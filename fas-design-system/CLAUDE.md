# FAS Design System — Claude Code 全局設定

## 設計系統文件
> 所有生成任務開始前，依序載入以下文件。
> 順序代表優先層級，前面的文件優先於後面的文件。

@src/tokens/token.md
@src/components/components.md

---

## 專案概覽

- **產品**：FAS Design System（Delta 共用設計系統）
- **用途**：提供設計 Token、元件規格與展示，供各產品（EAP+、DIAWorks 等）引用
- **主要消費方**：EAP+、DIAWorks 等 Delta 產品線

---

## 專案結構

```
fas-design-system/
├── CLAUDE.md                    ← 本檔（AI 全局設定）
├── src/
│   ├── tokens/
│   │   └── token.md             ← Design Token 完整定義（色彩、間距、圓角等）
│   ├── components/
│   │   └── components.md        ← 元件規格（Variants、States、Token 對應）
│   └── principles/              ← 通用設計原則（未來擴充）
└── showcase/
    └── components.html          ← 元件互動展示（靜態 HTML）
```

---

## 核心規則

### Token 管理
- `src/tokens/token.md` 是所有 Token 值的**唯一來源**
- 所有顏色、間距、圓角數值皆須引用 Token，禁止硬編碼
- Token 異動必須同步更新 Figma Variables，兩者保持一致

### 元件規格
- `src/components/components.md` 定義所有元件的 Variant、State 與 Token 對應
- 消費方產品不得自行創造與此規格衝突的替代元件
- 新元件加入前需在本文件定義，再於 showcase 實作展示

### 生成行為
- 生成任何展示頁面前，先確認 `src/tokens/token.md` 內容是否最新
- Showcase 展示只覆蓋 `showcase/` 目錄，不異動 `src/` 文件
- 無法判斷的規格標記 `⚠️ 需確認`，不自行假設

---

## 團隊協作規則

- 修改 `src/` 內任何文件前，需告知團隊並同步 Figma
- Token 新增 / 修改後，通知所有消費方產品更新對應的 CSS 變數
- 每次 session 結束，若有新發現的規格缺口，補充到對應的 `.md` 文件

---

## 消費方引用路徑

其他產品引用本設計系統時，使用以下相對路徑：

```
../fas-design-system/src/tokens/token.md
../fas-design-system/src/components/components.md
```
