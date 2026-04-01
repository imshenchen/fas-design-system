/**
 * DataTable — FAS Design Kit
 * @see ../../components.md § Data Table
 */
import React from 'react';

export type SortDirection = 'asc' | 'desc' | 'none';

export interface ColumnDef<T = Record<string, unknown>> {
  /** 欄位唯一識別 */
  key: string;
  /** 表頭標籤 */
  header: string;
  /** 欄位寬度（px 或 %） */
  width?: string | number;
  /** 是否可排序 */
  sortable?: boolean;
  /** 自訂 render，回傳 ReactNode */
  render?: (value: unknown, row: T, rowIndex: number) => React.ReactNode;
  /** 文字對齊 */
  align?: 'left' | 'center' | 'right';
}

export interface PaginationConfig {
  page: number;
  pageSize: number;
  total: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: ColumnDef<T>[];
  data: T[];
  /** row 的唯一 key 取得函式 */
  rowKey: (row: T, index: number) => string | number;
  pagination?: PaginationConfig;
  /** 排序狀態（受控） */
  sortKey?: string;
  sortDirection?: SortDirection;
  onSort?: (key: string, direction: SortDirection) => void;
  /** 選取（checkbox） */
  selectable?: boolean;
  selectedKeys?: Set<string | number>;
  onSelectChange?: (keys: Set<string | number>) => void;
  /** loading 狀態：顯示 Spin overlay */
  loading?: boolean;
  /** empty state 顯示 */
  emptyText?: string;
  /** 斑馬紋 */
  striped?: boolean;
  className?: string;
}

export function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  rowKey,
  pagination,
  sortKey,
  sortDirection = 'none',
  onSort,
  selectable = false,
  selectedKeys,
  onSelectChange,
  loading = false,
  emptyText = '目前沒有資料',
  striped = true,
  className,
}: DataTableProps<T>) {
  const handleSort = (key: string) => {
    if (!onSort) return;
    let next: SortDirection = 'asc';
    if (sortKey === key) {
      next = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc';
    }
    onSort(key, next);
  };

  const allSelected =
    selectable &&
    data.length > 0 &&
    data.every((row, i) => selectedKeys?.has(rowKey(row, i)));

  const toggleAll = () => {
    if (!onSelectChange) return;
    const keys = data.map((row, i) => rowKey(row, i));
    onSelectChange(allSelected ? new Set() : new Set(keys));
  };

  const toggleRow = (key: string | number) => {
    if (!onSelectChange || !selectedKeys) return;
    const next = new Set(selectedKeys);
    next.has(key) ? next.delete(key) : next.add(key);
    onSelectChange(next);
  };

  return (
    <div className={['fas-datatable__wrapper', className].filter(Boolean).join(' ')}>
      {/* Table */}
      <div className="fas-datatable__scroll">
        <table className={['fas-datatable', striped && 'fas-datatable--striped', loading && 'fas-datatable--loading'].filter(Boolean).join(' ')}>
          <thead>
            <tr>
              {selectable && (
                <th className="fas-datatable__th fas-datatable__th--checkbox">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    aria-label="全選"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={[
                    'fas-datatable__th',
                    col.sortable && 'fas-datatable__th--sortable',
                    col.align && `fas-datatable__th--${col.align}`,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ width: col.width }}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  aria-sort={
                    sortKey === col.key
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : sortDirection === 'desc'
                        ? 'descending'
                        : 'none'
                      : undefined
                  }
                >
                  {col.header}
                  {col.sortable && (
                    <span className={['fas-datatable__sort-icon', sortKey === col.key && 'fas-datatable__sort-icon--active'].filter(Boolean).join(' ')} aria-hidden />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="fas-datatable__td fas-datatable__td--loading">
                  <span className="fas-spin" aria-label="載入中" />
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="fas-datatable__td fas-datatable__td--empty">
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const key = rowKey(row, rowIndex);
                const isSelected = selectedKeys?.has(key) ?? false;
                return (
                  <tr
                    key={key}
                    className={['fas-datatable__row', isSelected && 'fas-datatable__row--selected'].filter(Boolean).join(' ')}
                  >
                    {selectable && (
                      <td className="fas-datatable__td fas-datatable__td--checkbox">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(key)}
                          aria-label={`選取第 ${rowIndex + 1} 列`}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={['fas-datatable__td', col.align && `fas-datatable__td--${col.align}`].filter(Boolean).join(' ')}
                      >
                        {col.render
                          ? col.render((row as Record<string, unknown>)[col.key], row, rowIndex)
                          : String((row as Record<string, unknown>)[col.key] ?? '')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="fas-datatable__pagination">
          <div className="fas-datatable__page-size">
            <span>每頁列數：</span>
            <select
              value={pagination.pageSize}
              onChange={(e) => pagination.onPageSizeChange?.(Number(e.target.value))}
            >
              {(pagination.pageSizeOptions ?? [10, 20, 50]).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="fas-datatable__page-nav">
            <span>{((pagination.page - 1) * pagination.pageSize) + 1}–{Math.min(pagination.page * pagination.pageSize, pagination.total)} / {pagination.total}</span>
            <button onClick={() => pagination.onPageChange(1)} disabled={pagination.page === 1}>«</button>
            <button onClick={() => pagination.onPageChange(pagination.page - 1)} disabled={pagination.page === 1}>‹</button>
            <button onClick={() => pagination.onPageChange(pagination.page + 1)} disabled={pagination.page * pagination.pageSize >= pagination.total}>›</button>
            <button onClick={() => pagination.onPageChange(Math.ceil(pagination.total / pagination.pageSize))} disabled={pagination.page * pagination.pageSize >= pagination.total}>»</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataTable;
