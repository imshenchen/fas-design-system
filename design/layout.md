# FAS Design Kit — Layout

> Source: Figma · `9E3JLVk3VWOESufwYQIAT2`（通用平台選單 / 開發者平台選單）
> Token 引用請參照 `token.md`，元件規格請參照 `components.md`。

---

## 目錄

- [版面結構](#版面結構)
- [Breakpoints](#breakpoints)
- [Grid System](#grid-system)
- [Spacing Scale](#spacing-scale)
- [Z-index 層級](#z-index-層級)
- [區域規格](#區域規格)

---

## 版面結構

開發者平台採用「頂部導覽 + 左側選單 + 主要內容」三段式固定版面。

```
┌─────────────────────────────────────────────────────┐
│                  Navigation Bar (60px)               │  ← sticky, z-index 100
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│  Side Menu   │         Main Content Area            │
│  280px       │         flex: 1                      │
│  (sticky)    │         padding: 32px                │
│              │                                      │
│  [Narrow:    │                                      │
│   80px]      │                                      │
│              │                                      │
└──────────────┴──────────────────────────────────────┘
```

| 區域 | 說明 |
|------|------|
| **Navigation Bar** | 頂部固定，全寬，高度 60px |
| **Side Menu** | 左側固定，展開 280px / 收合 80px（icon only） |
| **Main Content** | 剩餘空間（`flex: 1`），可捲動 |

---

## Breakpoints

從 Figma 框架尺寸推導出以下斷點，涵蓋 Mobile → Desktop HD。

| 名稱 | 寬度 | 版面行為 |
|------|------|---------|
| **XS** — Mobile | `< 768px` | 單欄；Navigation Bar 收合；Side Menu 隱藏或以 Overlay 方式呈現 |
| **SM** — Tablet | `768px – 1023px` | Navigation Bar 顯示；Side Menu 以 Narrow（80px）呈現 |
| **MD** — Laptop | `1024px – 1279px` | Side Menu Narrow（80px）；內容區全展開 |
| **LG** — Desktop | `1280px – 1919px` | Side Menu 展開（280px）；標準三欄版面 |
| **XL** — Desktop HD | `≥ 1920px` | Side Menu 展開（280px）；內容區最大 1640px |

> **Figma 對應 Frame 寬度：** 320px（Mobile） / 937px（Tablet） / 1165px（Laptop） / 1920px（Desktop HD）

### Breakpoint CSS

```css
/* XS — Mobile */
@media (max-width: 767px) { ... }

/* SM — Tablet */
@media (min-width: 768px) and (max-width: 1023px) { ... }

/* MD — Laptop */
@media (min-width: 1024px) and (max-width: 1279px) { ... }

/* LG — Desktop */
@media (min-width: 1280px) and (max-width: 1919px) { ... }

/* XL — Desktop HD */
@media (min-width: 1920px) { ... }
```

---

## Grid System

FAS 設計系統未定義固定欄數 Grid，內容版面以 **Flexbox** 為主，並依以下原則排版：

| 項目 | 規格 |
|------|------|
| 排版方式 | Flexbox / CSS Grid（依元件情境選用） |
| 最大內容寬 | 1640px（Desktop HD，1920px viewport） |
| 頁面邊距（Content Padding） | 32px（左右各） |
| 元件間距（Gap） | 依 Spacing Scale，常用 12px / 16px / 24px |

### 內容寬度計算（1920px viewport）

```
Viewport 1920px
  └─ Side Menu  280px
  └─ Content    1640px
       └─ padding-left  32px
       └─ padding-right 32px
       └─ 可用內容寬    1576px
```

---

## Spacing Scale

以 **4px** 為基礎單位，所有間距為 4 的倍數。

| Token（建議命名） | 值 | 常見使用情境 |
|------------------|----|------------|
| `space-1` | 4px | 元件內微間距（icon gap） |
| `space-2` | 8px | 元件內標準間距 |
| `space-3` | 12px | Side Menu padding、item spacing |
| `space-4` | 16px | 元件間距、清單間距 |
| `space-5` | 20px | Navigation Bar 水平 padding |
| `space-6` | 24px | Card / Demo Box padding |
| `space-7` | 28px | Sub-section 間距 |
| `space-8` | 32px | Main Content padding、Section 標題下間距 |
| `space-10` | 40px | — |
| `space-12` | 48px | Section 間距（`margin-bottom`） |

### 使用情境對照

| 情境 | Spacing |
|------|---------|
| Navigation Bar 水平 padding | 20px |
| Side Menu padding（四邊） | 12px |
| Side Menu item spacing | 12px |
| Main Content padding | 32px |
| Section `margin-bottom` | 48px |
| Sub-section `margin-bottom` | 28px |
| Card / Demo Box padding | 24px |
| 元件間 gap | 12px |

---

## Z-index 層級

| 層級 | 值 | 元件 |
|------|-----|------|
| Base | 0 | 一般內容 |
| Sticky | 10 | 固定表格 Header |
| Side Menu | 50 | Side Menu（Mobile Overlay 模式） |
| Navigation Bar | 100 | Navigation Bar（頁面頂端固定） |
| Dropdown | 200 | 下拉選單、Picker |
| Dialog | 300 | Modal / Dialog |
| Tooltip | 400 | Tooltip |
| Toast / Snackbar | 500 | 全域通知 |

---

## 區域規格

### Navigation Bar

| 項目 | 規格 |
|------|------|
| 高度 | 60px |
| 背景 | `background / surface`（#ffffff） |
| 底線 | 1px solid `divider` |
| 水平 padding | 20px |
| Position | `sticky; top: 0` |
| Z-index | 100 |
| 最左側內容 | 漢堡選單按鈕（36×36px，切換 Side Menu 展開/收折） |
| 左側內容 | App Logo + App Name（Roboto Bold 16px） |
| 右側內容 | Icon Buttons（36×36px）、Language Selector、User Avatar（32×32px） |

### Side Menu

| 項目 | 展開（Default） | 收合（Narrow） |
|------|---------------|--------------|
| 寬度 | 280px | 80px |
| 切換方式 | 頂部漢堡按鈕，`transition: width .2s ease` | — |
| 背景 | `background / surface` | `background / surface` |
| 右側邊線 | 1px solid `divider` | 1px solid `divider` |
| Padding（四邊） | 12px | 12px |
| Item spacing | 12px | 12px |
| Position | `sticky; top: 60px` | `sticky; top: 60px` |
| 高度 | `calc(100vh - 60px)` | `calc(100vh - 60px)` |
| Overflow | `auto`（可捲動） | `auto` |
| 收折時隱藏 | — | Category Header、Label、Chevron、Sub-menu、Footer |

### Sub-item 群組導引線

子選單展開時，群組容器顯示左側導引線，表示項目的從屬關係。

| 項目 | 規格 |
|------|------|
| 群組容器 margin-left | 22px（對齊 icon 中心） |
| 導引線 | `border-left: 1px solid var(--divider)` |
| Sub-item padding-left | 22px |
| Sub-item 背景 | `background / surface`（與父層相同，不使用 dim） |

### Main Content Area

| 項目 | 規格 |
|------|------|
| 寬度 | `flex: 1`（1640px at 1920px viewport） |
| Padding | 32px |
| 背景 | `background / surface dim`（#fafafa） |
| Overflow | `auto`（可捲動） |
| Section `margin-bottom` | 48px |
| Section `scroll-margin-top` | 72px（含 Nav 高度） |
| Sub-section `margin-bottom` | 28px |

---

> 最後更新：2026-03-30（Side Menu 收折行為、sub-item 導引線規格補充）
> Figma 來源：`通用平台選單 > 通用平台選單配置`、`開發者平台選單`
