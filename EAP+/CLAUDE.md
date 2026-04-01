# EAP+ — Claude Code 全局設定

## 設計系統文件
> 所有生成任務開始前，依序載入以下文件。
> 順序代表優先層級，前面的文件優先於後面的文件。

@design-system/eap-design-principle.md
@../fas-design-system/src/tokens/token.md
@../fas-design-system/src/components/components.md

---

## 專案概覽

- **產品**：EAP+（SIE - Smart Integration Edgebox 智能整合邊緣運算機控制台）
- **前端框架**：React 18 + TypeScript
- **設計系統套件**：`@delta/fas-design-system`（`../fas-design-system/`）
- **主要使用者**：系統整合商（SI）、維運人員

---

## 專案結構

```
eap+/
├── CLAUDE.md
├── package.json                          ← 宣告 @delta/fas-design-system 依賴
├── design-system/
│   └── eap-design-principle.md           ← EAP+ 產品專屬設計原則
└── src/
    └── features/
        └── {feature-name}/
            ├── {feature-name}-spec.md    ← 功能規格（PM 確認版）
            ├── {feature-name}.html       ← 視覺參考（靜態稿）
            └── {FeatureName}Page.tsx     ← 頁面實作
```

---

## 元件引用規則

### ✅ 永遠從設計系統 import 元件

所有 UI 元件必須從 `@delta/fas-design-system` 引用，**不得在 feature 內自行實作**功能相同的替代元件。

```tsx
// ✅ 正確
import { Button, StatusChip, DataTable, Dialog, TextField, useSnackbar } from '@delta/fas-design-system';
import type { ColumnDef, ChipStatus } from '@delta/fas-design-system';

// ❌ 禁止 — 不得自行實作設計系統已定義的元件
const MyButton = styled.button`...`;
```

### ✅ Token 只用 cssVars，不寫死色碼

```tsx
// ✅ 正確
import { cssVars } from '@delta/fas-design-system';
style={{ color: cssVars.textHigh }}

// ❌ 禁止 — 寫死色碼
style={{ color: '#333333' }}
```

### ✅ 狀態顯示一律使用 StatusChip

```tsx
// ✅ 正確 — 節點狀態
<StatusChip status="success" label="確定" size="s" />
<StatusChip status="error"   label="危急" size="s" />

// ❌ 禁止 — 自訂色點或色塊替代 StatusChip
<span style={{ color: 'green' }}>確定</span>
```

---

## 版面結構（Layout Shell）

### 基本規則

所有頁面必須套用三段式版面：**Navigation Bar（頂）+ Side Menu（左）+ Main Content（其餘）**。

Shell 由 `AppShell` 元件統一負責。**個別 Page 元件不渲染 NavBar 或 SideMenu**，只輸出 Main Content 內部的結構。

### AppShell 結構

`AppShell` 定義在 `src/components/AppShell.tsx`，組合 fas-design-system 的 `NavigationBar` 與 `SideMenu`：

```tsx
// src/components/AppShell.tsx
import React from 'react';
import { NavigationBar, SideMenu, SideMenuNavItem, SnackbarProvider } from '@delta/fas-design-system';

interface AppShellProps {
  children: React.ReactNode;
  /** 目前選中的 nav item key，用來控制 SideMenu active 狀態 */
  activeNavKey?: string;
}

export const AppShell: React.FC<AppShellProps> = ({ children, activeNavKey }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <SnackbarProvider>
      <div className="app-root">
        {/* ── Navigation Bar ── */}
        <NavigationBar
          appName="SIE Console"
          onMenuToggle={() => setCollapsed((v) => !v)}
        />

        <div className="app-body">
          {/* ── Side Menu ── */}
          <SideMenu collapsed={collapsed}>
            <SideMenuNavItem
              icon="account_tree"
              label="多節點管理"
              navKey="node-management"
              active={activeNavKey === 'node-management'}
            />
            <SideMenuNavItem
              icon="device_hub"
              label="設備管理"
              navKey="device-management"
              active={activeNavKey === 'device-management'}
            />
            {/* 其他 nav items ... */}
          </SideMenu>

          {/* ── Main Content ── */}
          <main className="app-main">
            {children}
          </main>
        </div>
      </div>
    </SnackbarProvider>
  );
};
```

### Page 元件結構

每個 Page 元件只負責 Main Content 內部，頂層固定為 **PageHeader + PageBody**：

```tsx
// src/features/node-management/NodeManagementPage.tsx
const NodeManagementPage: React.FC = () => (
  <div className="page-content">

    {/* ── PageHeader：Breadcrumb（左）+ CTA（右），最多 2 個按鈕 ── */}
    <div className="page-header">
      <Breadcrumbs
        items={[
          { label: '多節點管理', onClick: () => navigate('/nodes') },
          { label: '候選節點清單' },
        ]}
      />
      <Button variant="contained" size="s" onClick={handleSubmit}>
        送出
      </Button>
    </div>

    {/* ── PageBody：功能主體 ── */}
    <div className="page-body">
      {/* Section 間距 48px、Sub-section 28px */}
    </div>

  </div>
);
```

### AppShell 在路由層套用

在路由層包覆 `AppShell`，使所有子路由自動套用版面，不需每個 Page 自己引用：

```tsx
// src/App.tsx（或 router.tsx）
import { AppShell } from './components/AppShell';

const App = () => (
  <Routes>
    {/* AppShell 套在 layout route 上，子路由自動繼承 */}
    <Route element={<AppShell activeNavKey={useActiveNavKey()} />}>
      <Route path="/nodes"        element={<NodeManagementPage />} />
      <Route path="/nodes/add"    element={<AddNodePage />} />
      <Route path="/devices"      element={<DeviceManagementPage />} />
    </Route>

    {/* 不需要 Shell 的頁面（如登入頁）直接放外層 */}
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
```

### CSS 規範

Shell 相關 class 的間距與尺寸引用 `cssVars` 與 `spacing`，不寫死數值：

```tsx
import { spacing } from '@delta/fas-design-system';

// ✅ 正確
<div style={{ padding: spacing[8] }}>   {/* 32px */}

// ❌ 禁止
<div style={{ padding: '32px' }}>
```

---

## 頁面實作規範

### 基本結構

每個 feature 頁面為一個 React Function Component，放在：
```
src/features/{feature-name}/{FeatureName}Page.tsx
```

**標準 import 順序：**
```tsx
// 1. React
import React, { useState, useCallback } from 'react';

// 2. 設計系統元件（全部從此處取）
import { Button, DataTable, Dialog, TextField, Breadcrumbs, useSnackbar } from '@delta/fas-design-system';
import type { ColumnDef } from '@delta/fas-design-system';

// 3. 本 feature 的型別 / 工具（若有）
import type { MyFeatureData } from './types';
```

### 型別定義

頁面內使用的資料型別定義在檔案頂端，或抽出到同目錄的 `types.ts`：
```tsx
interface CandidateNode {
  id:      string;
  name:    string;
  address: string;
  port:    number;
  status:  'ok' | 'critical';
  inUse:   boolean;
}
```

### DataTable 欄位定義

使用 `ColumnDef<T>` 型別，`render` 函式回傳 ReactNode：
```tsx
const columns: ColumnDef<CandidateNode>[] = [
  { key: 'name', header: '名稱', sortable: true },
  {
    key: 'status', header: '狀態',
    render: (_, row) => (
      <StatusChip
        status={row.status === 'ok' ? 'success' : 'error'}
        label={row.status === 'ok' ? '確定' : '危急'}
        size="s"
      />
    ),
  },
];
```

### Dialog 使用方式

```tsx
// 受控：由 open state 控制開關
const [dialogTarget, setDialogTarget] = useState<MyData | null>(null);

<Dialog
  open={!!dialogTarget}
  title="操作標題"
  size="md"
  onClose={() => setDialogTarget(null)}
  actions={
    <>
      <Button variant="outlined" color="secondary" size="s" onClick={() => setDialogTarget(null)}>取消</Button>
      <Button variant="contained" size="s" onClick={handleConfirm} disabled={!isValid}>確認</Button>
    </>
  }
>
  {/* Dialog 內容 */}
</Dialog>
```

- 破壞性操作（刪除）的確認按鈕使用 `color="error"`
- 所有 Dialog 必須有取消入口

### Toast / Snackbar 使用方式

```tsx
// 在元件內透過 hook 取得
const { showSnackbar } = useSnackbar();

// 操作成功後呼叫
showSnackbar({ status: 'success', message: '節點已成功添加。' });
showSnackbar({ status: 'error',   message: '操作失敗，請稍後再試。' });
```

- 頁面根層需包在 `<SnackbarProvider>` 內（通常在 App 層設定）

### TextField 與表單驗證

```tsx
// onBlur 即時驗證，不等到送出才顯示錯誤
<TextField
  id="alias"
  label="*別名"
  required
  maxLength={30}
  showCount
  value={alias}
  onChange={setAlias}
  onBlur={() => setAliasError(alias.trim() ? '' : '別名為必填欄位')}
  error={aliasError}
/>
```

### FeatureTitle 使用方式

頁面標題列（固定在 NavBar 下方），包含麵包屑導航與右側 CTA 按鈕。
**每個功能頁面必須使用 `FeatureTitle` 取代自訂標題列。**

```tsx
import { FeatureTitle, Button } from '@delta/fas-design-system';

<FeatureTitle
  items={[
    { label: '規則設定', onClick: () => navigate('/rules') },
    { label: '創建' },                   // 最後一項：current 頁面，無 onClick
  ]}
  actions={
    <>
      <Button variant="outlined" color="secondary" size="s" onClick={handleCancel}>
        取消
      </Button>
      <Button variant="contained" size="s" onClick={handleSubmit} disabled={!isValid}>
        創建
      </Button>
    </>
  }
/>
```

- 最多 5 層導航；最後一層不傳 `onClick`
- `actions` 最多 2 個按鈕
- 不需手動設定 `topOffset`（預設對應 NavBar 56px）

### Breadcrumbs 使用方式

```tsx
<Breadcrumbs
  items={[
    { label: '多節點管理', onClick: () => navigate('/nodes') },
    { label: '添加自候選節點清單' },   // 最後一項無 href/onClick → current
  ]}
/>
```

---

## 程式碼規範

### React 元件規範
- 一律使用 **Function Component + hooks**，不使用 Class Component
- 有 `ref` 轉發需求的元件使用 `React.forwardRef`
- 元件 `displayName` 需明確設定（`forwardRef` 尤其重要）

### TypeScript 規範
- Props 型別使用 `interface`，union 型別用 `type`
- 函式回傳型別明確標示（尤其是 event handler）
- 使用 `React.FC<Props>` 或直接標注 props 參數型別，不寫 `any`
- 從設計系統引用型別時加 `import type`，避免 runtime import

### 狀態管理
- 頁面層級用 `useState` / `useReducer`
- 跨元件共享用 Context（如 `SnackbarProvider`）
- API 呼叫使用 `useCallback` 包裝，避免不必要的重新渲染

### 規格未確認的項目
- 尚未定義的行為標記 `// ⚠️ 需確認：...`，不自行假設實作

---

## 功能開發流程

1. 確認 `{feature-name}-spec.md` 已完成且通過 PM 確認
2. 在 `src/features/{feature-name}/` 建立 `{FeatureName}Page.tsx`
3. 從 `@delta/fas-design-system` 引用所需元件，**不自行實作**
4. 若設計系統缺少所需元件，先標記 `⚠️ 需確認`，另行提案補充至 fas

---

## 團隊協作規則

- 需要新元件時，先向 fas-design-system 提案，不在 eap+ 內自行實作
- 修改 `design-system/eap-design-principle.md` 前，需告知團隊
- 若需異動 Token，回到 `../fas-design-system/src/tokens/token.md` 修改，並同步 Figma Variables
- 每次 session 結束，若有新發現的規格缺口，補充到對應的 `.md` 文件

---

## 需要補充的欄位（待確認後更新）

- [ ] CSS 方案（CSS Modules / Tailwind / styled-components）
- [ ] 路由方案（React Router / TanStack Router）
- [ ] 狀態管理方案（Zustand / Redux / Context only）
- [ ] API 串接方式（React Query / SWR / axios）
- [ ] Git 分支命名規範
- [ ] 測試框架和執行指令
- [ ] Build 和部署指令
