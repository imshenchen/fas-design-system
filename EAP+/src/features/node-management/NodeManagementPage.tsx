/**
 * NodeManagementPage — EAP+ 節點管理
 * @see node-management-spec.md
 *
 * 所有元件從 @delta/fas-design-system 引用，
 * 不在此頁面自行實作樣式元件。
 */
import React, { useState, useCallback } from 'react';

// ─── 從設計系統引用元件 ────────────────────────────────────────────────────────
import {
  Button,
  StatusChip,
  DataTable,
  Dialog,
  DialogSection,
  DialogDivider,
  TextField,
  TextArea,
  Breadcrumbs,
  Uploader,
  useSnackbar,
} from '@delta/fas-design-system';

import type {
  ColumnDef,
  PaginationConfig,
  ChipStatus,
} from '@delta/fas-design-system';

// ─── Types ────────────────────────────────────────────────────────────────────

/** 候選節點（曾被移除、可重新加入的節點） */
interface CandidateNode {
  id:        string;
  name:      string;
  address:   string;
  port:      number;
  /** 連線狀態 */
  status:    'ok' | 'critical';
  healthUrl: string;
  registerId: string;
  /** 是否已被其他地方引用 */
  inUse:     boolean;
}

/** 手動輸入的節點資料列 */
interface ManualNodeRow {
  id:      string;
  alias:   string;
  desc?:   string;
  tag?:    string;
  address: string;
  port:    string;
  /** false = 填寫中；true = 已確認 */
  confirmed: boolean;
}

type ViewMode = 'candidate' | 'manual';

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_TO_CHIP: Record<CandidateNode['status'], { status: ChipStatus; label: string }> = {
  ok:       { status: 'success', label: '確定' },
  critical: { status: 'error',   label: '危急' },
};

const MOCK_CANDIDATES: CandidateNode[] = [
  { id: '1', name: 'edge-node-alpha',   address: '10.0.1.10',   port: 9000, status: 'ok',       healthUrl: 'http://10.0.1.10:9000/health',   registerId: 'reg-a1b2-c3d4', inUse: false },
  { id: '2', name: 'edge-node-beta',    address: '10.0.1.11',   port: 9001, status: 'critical', healthUrl: 'http://10.0.1.11:9001/health',   registerId: 'reg-b2c3-d4e5', inUse: false },
  { id: '3', name: 'factory-a-node-01', address: '192.168.2.5', port: 8080, status: 'ok',       healthUrl: 'http://192.168.2.5:8080/health', registerId: 'reg-c3d4-e5f6', inUse: true  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

interface AddNodeDialogProps {
  open: boolean;
  node: CandidateNode | null;
  onClose: () => void;
  onConfirm: (alias: string, tag: string, desc: string) => void;
}

const AddNodeDialog: React.FC<AddNodeDialogProps> = ({ open, node, onClose, onConfirm }) => {
  const [alias, setAlias] = useState('');
  const [tag,   setTag]   = useState('');
  const [desc,  setDesc]  = useState('');
  const [aliasError, setAliasError] = useState('');

  React.useEffect(() => {
    if (open) { setAlias(''); setTag(''); setDesc(''); setAliasError(''); }
  }, [open]);

  const handleConfirm = () => {
    if (!alias.trim()) { setAliasError('別名為必填欄位'); return; }
    onConfirm(alias.trim(), tag, desc.trim());
  };

  return (
    <Dialog
      open={open}
      title="向主節點添加節點"
      size="md"
      onClose={onClose}
      actions={
        <>
          <Button variant="outlined" color="secondary" size="s" onClick={onClose}>取消</Button>
          <Button variant="contained" size="s" onClick={handleConfirm} disabled={!alias.trim()}>加入</Button>
        </>
      }
    >
      {/* 唯讀：候選節點資訊 */}
      <DialogSection label="候選節點資訊">
        <dl className="node-readonly-grid">
          <dt>候選節點名稱</dt><dd>{node?.name}</dd>
          <dt>地址</dt>         <dd>{node?.address}</dd>
          <dt>連接埠</dt>       <dd>{node?.port}</dd>
        </dl>
      </DialogSection>

      <DialogDivider />

      {/* 使用者填寫：SIE 節點資訊 */}
      <DialogSection label="SIE 節點資訊">
        <TextField
          id="dialog-alias"
          label="*別名"
          required
          maxLength={30}
          showCount
          value={alias}
          onChange={setAlias}
          onBlur={() => { if (!alias.trim()) setAliasError('別名為必填欄位'); else setAliasError(''); }}
          error={aliasError}
          placeholder="請輸入別名（最多 30 字元）"
        />
        {/* ⚠️ 需確認：標籤 Searchable Dropdown 元件待設計系統補充 */}
        <TextField
          id="dialog-tag"
          label="標籤"
          value={tag}
          onChange={setTag}
          placeholder="選填"
        />
        <TextArea
          id="dialog-desc"
          label="說明"
          maxLength={100}
          showCount
          value={desc}
          onChange={setDesc}
          placeholder="請輸入說明（最多 100 字元）"
        />
      </DialogSection>
    </Dialog>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const NodeManagementPage: React.FC = () => {
  const { showSnackbar } = useSnackbar();
  const [view, setView] = useState<ViewMode>('candidate');

  // ── 候選節點清單狀態 ──
  const [candidates,     setCandidates]    = useState<CandidateNode[]>(MOCK_CANDIDATES);
  const [search,         setSearch]        = useState('');
  const [statusFilter,   setStatusFilter]  = useState<string>('');
  const [usageFilter,    setUsageFilter]   = useState<string>('');
  const [candidatePage,  setCandidatePage] = useState(1);
  const [dialogNode,     setDialogNode]    = useState<CandidateNode | null>(null);

  // ── 手動新增狀態 ──
  const [manualRows,  setManualRows]  = useState<ManualNodeRow[]>([]);
  const [uploadError, setUploadError] = useState('');

  // ─── Candidate Table ───────────────────────────────────────────────────────

  const filteredCandidates = candidates.filter((n) => {
    const q = search.toLowerCase();
    const matchSearch = !q || n.name.includes(q) || n.address.includes(q) || String(n.port).includes(q);
    const matchStatus = !statusFilter || (statusFilter === 'ok' ? n.status === 'ok' : n.status === 'critical');
    const matchUsage  = !usageFilter  || (usageFilter  === 'inUse' ? n.inUse : !n.inUse);
    return matchSearch && matchStatus && matchUsage;
  });

  const PAGE_SIZE = 10;
  const candidatePagination: PaginationConfig = {
    page: candidatePage,
    pageSize: PAGE_SIZE,
    total: filteredCandidates.length,
    onPageChange: setCandidatePage,
    onPageSizeChange: () => setCandidatePage(1),
  };

  const candidateColumns: ColumnDef<CandidateNode>[] = [
    { key: 'name',       header: '名稱',     sortable: true },
    { key: 'address',    header: '地址',     sortable: true },
    { key: 'port',       header: '連接埠',   sortable: true },
    {
      key: 'status', header: '狀態', sortable: true,
      render: (_, row) => {
        const { status, label } = STATUS_TO_CHIP[row.status];
        return <StatusChip status={status} label={label} size="s" />;
      },
    },
    { key: 'healthUrl',   header: '健康訊息', sortable: true },
    { key: 'registerId',  header: '註冊 ID',  sortable: true },
    {
      key: 'inUse', header: '使用狀態', sortable: true,
      render: (_, row) => (
        <span className={`usage-dot usage-dot--${row.inUse ? 'active' : 'idle'}`}>
          {row.inUse ? '使用中' : '閒置'}
        </span>
      ),
    },
    {
      key: '_actions', header: '設定',
      render: (_, row) => (
        <div className="table-actions">
          <Button
            variant="text" size="xs"
            aria-label={`加入 ${row.name}`}
            onClick={() => setDialogNode(row)}
          >
            複製
          </Button>
          <Button
            variant="text" size="xs" color="error"
            aria-label={`刪除 ${row.name}`}
            onClick={() => handleDeleteCandidate(row.id)}
          >
            刪除
          </Button>
        </div>
      ),
    },
  ];

  const handleDeleteCandidate = (id: string) => {
    setCandidates((prev) => prev.filter((n) => n.id !== id));
    showSnackbar({ status: 'success', message: '候選節點已刪除。' });
  };

  const handleAddFromDialog = (alias: string, _tag: string, _desc: string) => {
    setDialogNode(null);
    showSnackbar({ status: 'success', message: `節點「${alias}」已成功添加。` });
  };

  // ─── Manual Add ────────────────────────────────────────────────────────────

  const handleFileSelect = useCallback((files: File[]) => {
    const file = files[0];
    if (!file) return;
    if (!file.name.endsWith('.tsv')) {
      setUploadError('格式錯誤：請上傳 TSV 格式的檔案');
      return;
    }
    setUploadError('');
    // TODO: 解析 TSV，將有效列 push 進 manualRows
    showSnackbar({ status: 'success', message: `已從 ${file.name} 解析節點，請確認後送出。` });
  }, [showSnackbar]);

  const confirmedRows = manualRows.filter((r) => r.confirmed);

  const handleSubmit = () => {
    if (confirmedRows.length === 0) return;
    // TODO: 呼叫 API
    showSnackbar({ status: 'success', message: `已送出 ${confirmedRows.length} 筆節點。` });
    setManualRows([]);
    setView('candidate');
  };

  // ─── Breadcrumb items ──────────────────────────────────────────────────────

  const breadcrumbs = [
    { label: '多節點管理', onClick: () => {} },
    {
      label: view === 'candidate' ? '添加自候選節點清單' : '手動添加節點',
    },
  ];

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="page-content">
      {/* ── 候選節點清單視圖 ── */}
      {view === 'candidate' && (
        <>
          <div className="page-header">
            <Breadcrumbs items={breadcrumbs} />
            <Button
              variant="outlined" size="s"
              onClick={() => setView('manual')}
            >
              手動添加節點
            </Button>
          </div>

          {/* 搜尋 + 篩選 */}
          <div className="filter-bar">
            <TextField
              id="search"
              placeholder="搜尋節點名稱、地址、連接埠"
              value={search}
              onChange={setSearch}
              size="s"
            />
            {/* ⚠️ 需確認：Select 元件待設計系統補充；目前用 TextField 替代示意 */}
            <TextField id="status-filter" placeholder="所有狀態" value={statusFilter} onChange={setStatusFilter} size="s" />
            <TextField id="usage-filter"  placeholder="所有使用狀態" value={usageFilter}  onChange={setUsageFilter}  size="s" />
          </div>

          <DataTable<CandidateNode>
            columns={candidateColumns}
            data={filteredCandidates.slice((candidatePage - 1) * PAGE_SIZE, candidatePage * PAGE_SIZE)}
            rowKey={(row) => row.id}
            pagination={candidatePagination}
            emptyText="目前沒有符合條件的候選節點"
          />

          {/* 加入節點 Dialog */}
          <AddNodeDialog
            open={!!dialogNode}
            node={dialogNode}
            onClose={() => setDialogNode(null)}
            onConfirm={handleAddFromDialog}
          />
        </>
      )}

      {/* ── 手動添加視圖 ── */}
      {view === 'manual' && (
        <>
          <div className="page-header">
            <Breadcrumbs items={breadcrumbs} />
            <div className="page-header__actions">
              <Button variant="outlined" size="s" onClick={() => setView('candidate')}>
                添加自候選節點清單
              </Button>
              <Button
                variant="contained" size="s"
                disabled={confirmedRows.length === 0}
                onClick={handleSubmit}
              >
                送出
              </Button>
            </div>
          </div>

          {/* TSV 匯入 */}
          <section className="section-card">
            <h2 className="section-card__title">TSV 批次匯入</h2>
            <a href="/templates/node-template.tsv" download className="download-link">
              下載模板.tsv
            </a>
            <Uploader
              accept=".tsv"
              maxSize={1024 * 1024}
              onSelect={handleFileSelect}
              error={uploadError}
            />
          </section>

          {/* 手動輸入列表 */}
          {/* ⚠️ 需確認：可編輯 Table Row 元件待設計系統補充 */}
          <section className="section-card">
            <h2 className="section-card__title">
              手動輸入列表
              {confirmedRows.length > 0 && (
                <span className="section-card__badge">已確認 {confirmedRows.length} 筆</span>
              )}
            </h2>
            {/* TODO: 渲染可編輯列表 */}
          </section>
        </>
      )}
    </div>
  );
};

export default NodeManagementPage;
