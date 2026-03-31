# EAP Product — Claude Code 全局設定

## 設計系統文件
> 所有生成任務開始前，依序載入以下文件。
> 順序代表優先層級，前面的文件優先於後面的文件。

@design-system/eap-design-principle.md
@design-system/token.md
@design-system/components.md

---

## 專案概覽

- **產品**：EAP（Employee Assistance Program）Web 應用
- **前端框架**：React
- **技術堆疊**：待補充（確認後更新此區塊）
- **主要使用者**：員工、HR、管理者

---

## 核心規則

### 設計規範
- 所有視覺生成必須對照 `eap-design-principle.md` 的設計準則
- Token 數值以 `token.md` 為唯一來源，禁止在程式碼裡寫死顏色、間距等數值
- 元件用法以 `component.md` 為準，不得自創未定義的 variant

### 程式碼規範
- 元件使用 React Function Component，不使用 Class Component
- 禁止在元件內直接寫 inline style，一律使用 token
- 每個元件必須處理 loading、error、empty 三種狀態
- 技術堆疊確認後補充對應的命名規範和 import 規則

### 生成行為
- 生成前先確認 `token.md` 是否與 Figma Variables 同步
- 生成範圍以當前 feature 的 `feature.md` 為準，不擅自擴充功能
- 無法判斷的規格標記 `⚠️ 需確認`，不自行假設

---

## 功能開發流程

每支功能進入開發前，必須存在對應的 feature spec：

```
features/{feature-name}/
├── CLAUDE.md     ← 宣告這次用哪些 design-system 文件
└── feature.md    ← 功能規格（use case、例外處理、驗收標準）
```

開發順序：
1. 確認 `feature.md` 已完成且經過 PM 確認
2. 進入 `features/{feature-name}/` 目錄再開始生成
3. 生成完成後人工確認輸出未偏移 `eap-design-principle.md` 的設計準則

---

## 團隊協作規則

- 修改任何 `design-system/` 文件前，需告知團隊
- Token 異動必須同步更新 Figma Variables，兩者保持一致
- 每次 session 結束，若有新發現的規格缺口，補充到對應的 `.md` 文件

---

## 需要補充的欄位（待確認後更新）

- [ ] 技術堆疊（CSS 方案、狀態管理、API 串接方式）
- [ ] Git 分支命名規範
- [ ] 測試框架和執行指令
- [ ] Build 和部署指令
