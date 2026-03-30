# FAS Design Kit — Components

> Source: Figma · Web Design Kit (Beta)
> Token 引用請參照 `token.md`，所有顏色以 Token 名稱表示，不寫死色碼。

---

## 目錄

- [Button](#button)
- [FAB](#fab-floating-action-button)
- [Icon Button](#icon-button)
- [Badge](#badge)
- [Chip](#chip)
- [Avatar](#avatar)
- [Divider](#divider)
- [Progress & Spin](#progress--spin)
- [Checkbox](#checkbox)
- [Radio](#radio)
- [Switch](#switch)
- [Slider](#slider)
- [Stepper](#stepper)
- [Scroll Bar](#scroll-bar)
- [Splitter](#splitter)
- [Hyperlink](#hyperlink)
- [Alert](#alert)
- [Accordion](#accordion)
- [Breadcrumbs](#breadcrumbs)
- [Card](#card)
- [Data Table](#data-table)
- [Dialog](#dialog)
- [Drawer & Navigation](#drawer--navigation)
- [List](#list)
- [Menu](#menu)
- [Navigation bar](#navigation-bar)
- [Side menu](#side-menu)
- [Picker](#picker)
- [Snackbar & Toast](#snackbar--toast)
- [Tooltip](#tooltip)
- [Text Field](#text-field)
- [Tab](#tab)
- [Uploader](#uploader)

---

## Button

**Page:** Button | **Component Set ID:** `255:169`

### 說明

按鈕用來讓使用者呼叫行動或做出選擇，點擊後產生立即回饋。根據不同使用情境與視覺層級，應採用不同類型的按鈕。按鈕由 **icon** 與**按鈕文字**組成。

### Variants

| Property | Values |
|----------|--------|
| Color | `Primary` · `Secondary` · `Error` |
| Style | `Outlined` · `Contained` · `Text` |
| Size | `XS-32` · `S-36` · `M-40` · `L-44` · `XL-48` |
| State | `Default` · `Hover` · `Disabled` |
| Show icon | `None` · `Left` · `Right` |

### 樣式規格（Style Specs）

#### 三種 Style

| Style | 說明 | 使用時機 |
|-------|------|---------|
| **Contained（實心）** | 最高視覺層級，填色背景 | 頁面最主要動作，一頁面內不宜重複出現過多 |
| **Outlined（外框）** | 預設形式，透明背景 + 邊框 | 大部分情況的通用按鈕，非頁面主要動作 |
| **Text（文字）** | 最低層級，無邊框 | 不需突顯的功能、工具列、空間較緊湊的情境 |

> Contained 只能搭配 Primary 色；Outlined 和 Text 可搭配 Primary、Secondary 或 Error 色。

#### 尺寸規格

| Size | 高度 | 優先使用情境 |
|------|------|------------|
| XL | 48px | — |
| L | 44px | — |
| **M（預設）** | **40px** | **DIAWorks 獨立按鈕（主工具列、彈窗標題列）** |
| **S** | **36px** | **模組元件內的按鈕（下拉選單、卡片內）** |
| XS | 32px | 空間極度有限的情境 |

#### CSS 規格（從 Figma 擷取）

```css
/* Outlined S-36 (Primary) */
border: 1px solid var(--primary);         /* #00adef */
background: transparent;
color: var(--primary);
height: 36px;
padding: 6px 16px;                         /* py-6 px-16（依尺寸調整） */
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-weight: 500;                          /* Medium */
font-size: 14px;
line-height: 20px;

/* Contained M-40 (Primary) */
background: var(--primary);               /* #00adef */
color: var(--text-white);                 /* #ffffff */
height: 40px;
padding: 8px 25px;
border-radius: 4px;

/* Hover: Contained */
background: var(--component-status-hover-contained);  /* #0088bd */

/* Hover: Outlined */
background: var(--component-status-hover);            /* #f0fbff */
```

#### Icon 使用

設計師可利用圖標強化視覺線索，可置於文字前（Left）或文字後（Right），圖標顏色需與文字相同。

#### 標籤文字

- 需套用符合語系的 Button 層級字體
- 英文第一個字母需大寫
- 內文過長時：不換行，以 `...` 隱藏，搭配 Hover + Tooltip 顯示完整內文

### States

| State | 說明 |
|-------|------|
| Default | 初始狀態 |
| Hover | 滑鼠滑入，Contained 背景變深、Outlined/Text 顯示淺底 |
| Disabled | 不可互動，使用 disabled 色票，不可作為操作引導 |

### Token 對應

| Property | Token |
|----------|-------|
| Contained background | `primary` |
| Contained background (Error) | `system status / error` |
| Contained hover background | `component status / hover contained` |
| Contained 文字 | `text / white` |
| Outlined / Text 文字色 | `primary` |
| Outlined / Text Error 文字色 | `system status / error` |
| Outlined border | `primary` |
| Outlined hover background | `component status / hover` |
| Disabled 文字 / icon | `component status / disabled element` |
| Disabled background (Contained) | `component status / disabled container` |
| Focus ring | `component status / focus` |

### Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| 一個頁面區域內只使用一個 Contained 按鈕作為主要行動 | 在同一操作頁面重複放置多個 Contained 按鈕 |
| 工具列情境使用 Text Button | 在寬鬆空間內過度使用 Text Button 降低可見度 |
| 搭配 Tooltip 處理長文字按鈕 | 讓按鈕文字換行 |

### 其他 Button 元件

| 元件 | ID | Variants |
|------|----|----------|
| Fully Rounded Button | `623:16405` | State: Default / Disabled / Hover |
| Segmented | `274:406` | State × Place × Color |
| Button for dark bg | `12644:20500` | State × Color (Primary / Secondary / Contained white / Outline white) |

---

## FAB (Floating Action Button)

**Component Set ID:** `262:74`

### Variants

| Property | Values |
|----------|--------|
| Type | `FAB` · `Extended FAB` |
| State | `Enable` · `Disabled` |

### Token 對應

| Property | Token |
|----------|-------|
| Background | `primary` |
| Icon / Label color | `text / white` |
| Disabled background | `component status / disabled container` |
| Disabled icon | `component status / disabled element` |

---

## Icon Button

**Component Set ID:** `279:3818`

### Variants

| Property | Values |
|----------|--------|
| Type | `Icon button` · `Remove` · `Toggle sorting` |
| State | `Default` · `Hover/Focus` · `Selected` · `Selected hover` · `Disabled` · `Ascending` · `Ascending hover` · `Descending` · `Descending hover` |
| Size | `L - 36` · `M - 24` · `S - 20` |

### Token 對應

| Property | Token |
|----------|-------|
| Default icon | `secondary` |
| Selected icon | `primary` |
| Hover background | `component status / hover` |
| Disabled icon | `component status / disabled element` |

### 其他 Icon Button

| 元件 | ID | Variants |
|------|----|----------|
| Icon Button - Mode Switch | `194:2128` | Switch mode (Light / Dark) × State |
| Icon Button - Language | `563:10654` | State × Language (EN / ZH-TW / ZH-CN) |

---

## Badge

**Component Set ID:** `34:133`

### Variants

| Property | Values |
|----------|--------|
| Type | `Number` · `Dot` |
| Status | `Filled` · `Alert` |

### Token 對應

| Property | Token |
|----------|-------|
| Background (Filled) | `primary` |
| Background (Alert) | `system status / error` |
| 數字文字 | `text / white` |

---

## Chip

### 說明

標籤是用於展示資訊或幫助使用者輸入資訊的顯示元件。適合用於：
- **輸入資訊**：多選下拉選單中代表已選取的項目（搭配移除圖標）
- **顯示資訊/狀態**：以顏色區分狀態，適合顯示有限集合的資訊（如機台狀態、工單狀態）
- **可選取/過濾**：幫助使用者做出選擇或篩選內容

### Chip - Round

**Component Set ID:** `99:1319`

| Property | Values |
|----------|--------|
| Size | `L` · `S` |
| Style | `Filled` · `Outline` |
| State | `Disabled` · `Enabled` |

### Chip - Rectangle

**Component Set ID:** `410:8405`

| Property | Values |
|----------|--------|
| Size | `L` · `S` |
| Style | `Filled` · `Outline` |
| State | `Default` · `Disable` |
| Removeable | `True` · `False` |
| With Icon | `True` · `False` |

### Status Chip

**Component Set ID:** `99:1581`

| Property | Values |
|----------|--------|
| Style | `Round` · `Rectangle` |
| Type | `Filled` · `Outlined` |
| Size | `L` · `S` |
| Status | Processing · Success · Warning · Emergency · Error · Milestone · Idle · Mariner · Moss · Bronze · Salmon · Wine · Orchid · Slate · Indigo · Turquoise · Khaki · Cinnamon · Pink · Violet · Aqua |

### Chip - Selectable

**Component Set ID:** `18287:1778` · Variants: Select (True / False)

> 可選取標籤以多個為一組，`Filled` 表示已選取，`Outline` 表示未選取。

### 樣式規格（Style Specs）

#### 尺寸規格

| Size | 高度 | Border-radius |
|------|------|--------------|
| **L（預設）** | **32px** | 16px（Round）· 4px（Rectangle） |
| S | 24px | 16px（Round）· 4px（Rectangle） |

> 建議前端將 Round 和 Rectangle 開發成**兩個獨立元件**，各自配置專屬 CSS。

#### CSS 規格（從 Figma 擷取，Round Filled L）

```css
/* Status Chip — Round, Filled, L */
height: 32px;
border-radius: 16px;
padding: 4px;
display: inline-flex;
align-items: center;

/* 內部 Label 容器 */
padding: 0 8px;

/* Label 文字 */
font-family: 'Roboto', sans-serif;
font-weight: 400;                          /* Regular */
font-size: 14px;
line-height: 20px;
letter-spacing: 0.035px;
white-space: nowrap;
```

#### 狀態色票對照（Status Chip 常用狀態）

| Status | Filled BG Token | Filled Text Token |
|--------|----------------|------------------|
| Processing | `chip / processing` (#c2eeff) | `chip / text processing` (#00638a) |
| Success | `chip / success` (#e0fbc6) | `chip / text success` (#365912) |
| Warning | `chip / warning` (#fff0c2) | `chip / text warning` (#5c4500) |
| Emergency | `chip / emergency` (#feece2) | `chip / text emergency` (#ac4207) |
| Error | `chip / error` (#fde2e4) | `chip / text error` (#bb0c15) |
| Milestone | `chip / milestone` (#ece9f2) | `chip / text milestone` (#594677) |
| Idle | `chip / idle` (#ebebeb) | `chip / text idle` (#585858) |

> 完整 21 種狀態色票請見 `token.md → Chip` 章節

### 使用規範

- 標籤只適合顯示**範圍或數量有限制的資訊**（如狀態），不適合用於顯示任意文字
- 多選情境使用**實心（Filled）標籤**搭配移除圖標
- 狀態顯示使用 **Status Chip**，對應顏色見上表
- 標籤頭尾端皆可依情境顯示圖標；若需顯示頭像，建議使用 **Round 外型**

### States

| State | 說明 |
|-------|------|
| Enabled | 正常可互動狀態 |
| Disabled | 不可互動，使用 disabled 色票 |

### Token 對應

| Property | Token |
|----------|-------|
| Filled background | `chip / {status}` |
| Filled text | `chip / text {status}` |
| Outlined border | `chip / outline {status}` |
| Outlined text | `chip / text {status}` |
| Disabled background | `component status / disabled container` |
| Disabled text | `component status / disabled element` |

> 完整 Status 色票對照請見 `token.md → Chip` 章節（21 種狀態色）

---

## Avatar

**Component Set ID:** `279:3361`

### Variants

| Property | Values |
|----------|--------|
| Type | `Primary` · `Secondary` · `Photo` |
| Size | `L` · `M` · `S` |

### Token 對應

| Property | Token |
|----------|-------|
| Primary 背景 | `primary` |
| Secondary 背景 | `background / container high` |
| Primary 文字 / icon | `text / white` |
| Secondary 文字 / icon | `secondary` |

---

## Divider

**Component Set ID:** `279:3930`

### Variants

| Property | Values |
|----------|--------|
| Direction | `Horizontal` · `Vertical` |

### Token 對應

| Property | Token |
|----------|-------|
| 線條顏色 | `divider` |

---

## Progress & Spin

### Progress

**Component Set ID:** `66:1952`

| Property | Values |
|----------|--------|
| Type | `Linear` · `Linear gradient` · `Circular` · `Circular gradient` · `Infinite` · `Actual & target` |
| Size | `S` · `L` |
| Progress | `0` · `10` · `30` · `50` · `70` · `99` · `100` · `None` · `start` · `end` |

### Spin

**Component Set ID:** `8463:2653`

| Property | Values |
|----------|--------|
| Type | `Linear` · `Linear gradient` · `Circular` · `Circular small` · `Circular gradient small` · `Circular gradient` |
| Progress | `start` · `middle` · `end` · `1`–`5` · `angle0` · `angle90` · `angle180` · `angle270` |

### Token 對應

| Property | Token |
|----------|-------|
| 進度條顏色 | `system status / processing` |
| 背景軌道 | `background / container high` |
| Gradient 起點 | `primary` |

---

## Checkbox

**Component Set ID:** `283:1049`

### Variants

| Property | Values |
|----------|--------|
| Select | `Selected` · `Unselected` · `Indeterminate` |
| State | `Enabled` · `Disabled` |

### Token 對應

| Property | Token |
|----------|-------|
| Checked background | `primary` |
| Checked icon | `text / white` |
| Unchecked border | `secondary` |
| Disabled background | `component status / disabled container` |
| Disabled border / icon | `component status / disabled element` |
| Hover / Focus ring | `component status / focus` |

---

## Radio

**Component Set ID:** `283:1310`

### Variants

| Property | Values |
|----------|--------|
| Selected | `True` · `False` |
| State | `Enabled` · `Disabled` |

### Token 對應

| Property | Token |
|----------|-------|
| Selected 圓圈 | `primary` |
| Unselected border | `secondary` |
| Disabled | `component status / disabled element` |

---

## Switch

**Component Set ID:** `283:1396`

### Variants

| Property | Values |
|----------|--------|
| On/Off | `On` · `Off` |
| State | `Enabled` · `Disabled` |

### Token 對應

| Property | Token |
|----------|-------|
| Track On | `switch / track on` |
| Track Off | `switch / track off` |
| Track Disabled | `switch / track diasbled` |
| Thumb Off | `switch / thumb off` |
| Thumb On | `primary` |
| Thumb Disabled | `switch / thumb diasbled` |

---

## Slider

**Component Set ID:** `1018:1778`

### Variants

| Property | Values |
|----------|--------|
| Type | `Single` · `Range` |
| State | `Default` · `Disabled` |
| Scale | `Value` · `Level` |

### Token 對應

| Property | Token |
|----------|-------|
| Active track | `primary` |
| Inactive track | `background / container high` |
| Thumb | `primary` |
| Disabled track | `component status / disabled container` |
| Value label background | `snackbar n tooltip / background` |
| Value label text | `text / white` |

---

## Stepper

**Component Set ID:** `827:9653`

### Variants

| Property | Values |
|----------|--------|
| State | `Activated` · `Inactive` |
| Label position | `Right` · `Bottom` |
| Type | `Number` · `Point` · `Complete` |

### Token 對應

| Property | Token |
|----------|-------|
| Active 圓圈 | `primary` |
| Active 文字 | `text / white` |
| Inactive 圓圈 | `background / container high` |
| Inactive 文字 | `text / medium emphasis` |
| Connector 線 | `background / container high` |
| Active connector | `primary` |

---

## Scroll Bar

**Component Set ID:** `5176:5208`

### Variants

| Property | Values |
|----------|--------|
| Direction | `Vertical` · `Horizontal` |

### Token 對應

| Property | Token |
|----------|-------|
| Scrollbar thumb | `scroll bar` |

---

## Splitter

**Component Set ID:** `6794:64547`

### Variants

| Property | Values |
|----------|--------|
| Direction | `Horizontal` · `Vertical` |
| State | `Enable` · `Disable` · `Enable hover` |
| collapsible left/top | `True` · `False` |
| collapsible right/down | `True` · `False` |

### Token 對應

| Property | Token |
|----------|-------|
| Handle 線條 | `divider` |
| Handle hover | `primary` |
| Disabled | `component status / disabled element` |

---

## Hyperlink

**Component Set ID:** `2182:21720`

### Variants

| Property | Values |
|----------|--------|
| Type | `Primary` · `Secondary` |
| State | `Default` · `Hover` |

### Token 對應

| Property | Token |
|----------|-------|
| Primary 文字 | `primary` |
| Secondary 文字 | `secondary` |
| Hover underline | `component status / hover contained` |

---

## Alert

**Component Set ID:** `11637:18813` (Organisms)

### 說明

提供操作的執行反饋，或作為持續性警示直至使用者確認後關閉。Alert 分為 **Inline 行內通知**和 **Banner 頁面橫幅**兩種。

### Variants

| Property | Values |
|----------|--------|
| Type | `Inline` · `Banner` |
| Status | `Error` · `Success` · `Warning` · `Processing` · `Announcement` |

### 兩種 Alert 的差異

#### Inline Alert（行內通知）
| 屬性 | 說明 |
|------|------|
| 位置 | 出現在內容區塊中（通常靠近觸發元件） |
| 強度 | 中等，視覺上融入內容流程 |
| 用途 | 提示某個特定區塊或欄位的狀況（錯誤、提醒、成功等） |
| 干擾程度 | 低，不打斷使用者操作 |
| 應用場景 | 表單欄位錯誤、區塊內提醒、局部成功/失敗訊息 |
| 可用狀態 | Error · Warning · Success · Processing（共 4 種） |

#### Banner Alert（頁面橫幅）
| 屬性 | 說明 |
|------|------|
| 位置 | 顯示在頁面頂部（全頁或模組的上方） |
| 強度 | 高，通常橫跨整個寬度、背景色醒目 |
| 用途 | 全局或重大事件（錯誤、系統通知、更新公告等） |
| 干擾程度 | 中～高，可能短暫中斷使用流程 |
| 應用場景 | 系統警告、全頁錯誤、維護通知、登入狀態提醒 |
| 可用狀態 | Error · Warning · Success · Processing · Announcement（共 5 種） |

### 樣式規格（Style Specs）

#### CSS 規格（從 Figma 擷取，以 Error 狀態為例）

```css
/* Inline Alert - Error */
background: var(--5-bg-error);             /* #fef1f1 */
border: 1px solid var(--alert-border-error); /* #fccacd — 四邊完整 border */
border-radius: 4px;
padding: 10px 10px 10px 16px;             /* pl-16 pr-10 py-10 */
display: flex;
gap: 8px;
align-items: flex-start;

/* Icon 容器 */
padding-top: 6px;                          /* 圖示對齊標題基線 */

/* 標題 */
font-family: 'Noto Sans TC', sans-serif;
font-weight: 500;                          /* Medium */
font-size: 16px;
line-height: 24px;
color: var(--alert-text-error);           /* #bb0c15 */

/* 內文 */
font-family: 'Noto Sans TC', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.035px;
color: var(--alert-text-error);

/* 操作按鈕（Secondary Outlined） */
border: 1px solid var(--secondary);       /* #727171 */
border-radius: 4px;
padding: 6px 9px;
font-size: 14px;
color: var(--secondary);
```

#### 狀態對應色票

| Status | Background Token | Border Token | Text Token |
|--------|-----------------|--------------|-----------|
| Error | `+5 BG / error` (#fef1f1) | `chart / 27 error` (#fccacd) | `chart / 48 error` (#bb0c15) |
| Warning | `+5 BG / warning` (#fffaeb) | `chart / 27 warning` | `chart / 48 warning` (#5c4500) |
| Success | `+5 BG / success` (#effbe2) | `chart / 27 success` | `chart / 48 success` (#365912) |
| Processing | `+5 BG / processing` (#f0fbff) | `chart / 27 processing` | `chart / 48 processing` (#00638a) |

### Token 對應

| Property | Token |
|----------|-------|
| Background | `+5 BG / {status}` |
| Border（四邊） | `chart / 27 {status}` |
| Icon 顏色 | `system status / {status}` |
| 標題文字 | `chart / 48 {status}` |
| 內文 | `chart / 48 {status}` |
| 時間戳文字 | `text / medium emphasis` |
| 操作按鈕邊框 | `secondary` |
| 操作按鈕文字 | `secondary` |

### Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| 表單驗證錯誤使用 Inline Alert，放在觸發區塊附近 | 把系統通知（系統層級）用 Inline Alert 呈現 |
| 系統層級事件（維護通知、版本更新）使用 Banner Alert | 在頁面內容中間插入 Banner Alert |
| Alert 預期最常用於**錯誤提示** | 在沒有操作觸發的情況下顯示 Success Alert |
| 提供明確的操作按鈕（如「查看詳情」「確認」「忽略」） | — |

---

## Accordion

**Component Set ID:** `744:15967` (Organisms)

### Variants

| Property | Values |
|----------|--------|
| Type | `Outlined` · `Underline` · `Background` |
| State | `on` · `off` |

### Token 對應

| Property | Token |
|----------|-------|
| Outlined border | `card / outlined` |
| Underline 線 | `divider` |
| Background (on) | `background / container low` |
| Header 文字 | `text / high emphasis` |
| Icon | `secondary` |
| Hover | `component status / hover` |

---

## Breadcrumbs

**Component Set ID:** `7976:17932` (Organisms)

### Variants

| Property | Values |
|----------|--------|
| Level | `1` · `2` · `3` · `4` · `5` |

> 目前項目（Current）使用獨立元件 `Current` (ID: `15386:62378`)，Variants: Dropdown × State

### Token 對應

| Property | Token |
|----------|-------|
| 非目前項目文字 | `text / medium emphasis` |
| 目前項目文字 | `text / high emphasis` |
| Separator icon | `text / medium emphasis` |
| Hover 文字 | `primary` |

---

## Card

**Component Set ID:** `68:2138` (Organisms)

### 說明

卡片用來顯示單一主題的內容並引導相關操作。適合用於報表呈現，可承載文字、列表、圖表與按鈕，**常用於工廠的戰情室看板、線頭看板或設備看板**。卡片由**標題 Header** 與**內容 Content** 組成，依使用情境做排列組合。

### Variants

| Property | Values |
|----------|--------|
| Style | `Elevated` · `Outlined` |
| State | `Inactive` · `Hover` · `Selected` |
| Radius | `4` · `8` |
| Show Header | `True` · `False` |
| Header BG | `True` · `False` |
| Show Drag | `True` · `False` |
| Show More Icon Button | `True` · `False` |

### 兩種 Style 差異

| Style | 外觀 | 使用時機 |
|-------|------|---------|
| **Elevated（懸浮）** | 陰影 2dp，與背景分離 | 大多情況皆可使用，預設選擇 |
| **Outlined（線框）** | 1px 完整邊框，無陰影 | 需要突顯卡片層次、或白色背景上需明確邊界時 |

### 圓角規格

| Radius | 數值 | 使用規則 |
|--------|------|---------|
| **4（標準）** | **4px** | **DIAWorks Web 產品一律使用此尺寸** |
| 8 | 8px | 特殊情境 |

### 樣式規格（Style Specs）

#### CSS 規格（從 Figma 擷取）

```css
/* Card 容器 — Elevated */
border-radius: 4px;
box-shadow: 0px 1px 4px 0px rgba(46, 46, 46, 0.12),  /* 2dp elevation */
            inset 0px 0px 2px 0px rgba(255, 255, 255, 0.12);
background: var(--elevation-surface-02dp);             /* #ffffff */

/* Card Header */
background: var(--background-container-high);         /* #ebebeb */
padding: 6px 16px;                                     /* py-6 px-16 */
display: flex;
align-items: center;
justify-content: space-between;

/* Header 標題文字 */
font-family: 'Roboto', sans-serif;
font-weight: 500;                                      /* Medium */
font-size: 16px;
line-height: 24px;
letter-spacing: 0.08px;
color: var(--text-high-emphasis);                     /* #333333 */

/* Card Content 區域 */
padding: 16px;

/* Card 容器 — Outlined */
border: 1px solid var(--card-outlined);               /* #d9d9d9 */
background: var(--background-surface);                /* #ffffff */
box-shadow: none;
```

### Content 可放置的元素

卡片 Content 可依需求組合以下元素：

| 元素 | 說明 |
|------|------|
| Media | 圖片、影片 |
| Text | 標題（Headline）、副標（Subhead）、說明文字 |
| Table | 資料表格 |
| Chart | 圖表（折線、長條、環形等） |
| Button | 操作按鈕 |

### Header 配置選項

| 選項 | 說明 |
|------|------|
| 顯示底色（Header BG） | 標題區域顯示 `container-high` (#ebebeb) 底色，增加層次感 |
| 不顯示底色 | 標題與 Content 視覺融合 |
| 不顯示 Header | 卡片不需標題時可完全移除 |
| More Icon Button | 多個設定操作可收納於此，以下拉選單展開 |

### Token 對應

| Property | Token |
|----------|-------|
| Elevated background | `elevation surface / 02dp` |
| Elevated shadow | `elevation shadow / 02dp` |
| Outlined background | `background / surface` |
| Outlined border | `card / outlined` |
| Header background | `background / container high` |
| Header 標題文字 | `text / high emphasis` |
| Hover background | `component status / hover` |
| Selected border | `primary` |

### Do's & Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| 在凹陷表面（Surface dim，#fafafa）使用 Elevated Card | 在白色表面（#ffffff）使用 Elevated Card（層次不明確） |
| 白色背景上改用 Outlined Card 或更改背景底色 | 在 Elevated Card 內部再嵌套 Elevated Card（視覺層級衝突） |
| DIAWorks 產品一律使用 Radius 4 | 混用 Radius 4 和 Radius 8 在同一頁面 |

---

## Data Table

**Component Set ID:** `139:5731` (Organisms)

### Variants

| Property | Values |
|----------|--------|
| Data Loading | `Pagination` · `Infinite scrolling` · `Load more` |
| Elevation | `00 dp` · `02 dp` |

### 子元件

| 元件 | ID | 說明 |
|------|----|------|
| Table header | `234:4043` | Type: Tab / Rich / Simple · Filled: True / False |
| Column | `267:3387` | type: text / number / checkbox · fixed: none / left / right |
| Row cell | `269:630` | type × size × fixed × state × editable (多種 cell 類型) |

#### Row cell 支援類型
`string` · `number` · `time` · `chip` · `btn_icon` · `btn_text` · `progress bar` · `checkbox` · `switch` · `radio` · `icon` · `textfield` · `hyperlink` · `progress bar for dashboard` · `bullet graph for dashboard`

#### Row cell sizes
`L 48` · `M 40` · `S 36`

### Token 對應

| Property | Token |
|----------|-------|
| Header 背景 | `background / surface dim variable` |
| Header 文字 | `text / high emphasis` |
| Row 背景 | `background / surface` |
| Striped row | `data table / striped row` |
| Selected row | `data table / selected row` |
| Border / 分隔線 | `divider` |
| Hover row | `component status / hover` |
| Sort icon (active) | `primary` |
| Sort icon (inactive) | `text / medium emphasis` |
| Fixed column shadow | `scroll bar` |

---

## Dialog

**Component Set ID:** `4329:14996` (Organisms)

### Variants

| Property | Values |
|----------|--------|
| Size | `XS` · `SM` · `MD` · `LG` · `XL` |

### Token 對應

| Property | Token |
|----------|-------|
| Background | `elevation surface / 24dp` |
| Overlay (Scrim) | `scrim` |
| Title 文字 | `text / high emphasis` |
| 內文 | `text / body` |
| 分隔線 | `divider` |
| Action button | 參見 [Button](#button) |

---

## Drawer & Navigation

### Drawer

**Component Set ID:** `280:421` (Organisms)

| Property | Values |
|----------|--------|
| Type | `Side Navigation - L` · `Side Navigation - M` · `Side Navigation - S` · `Full Screen` · `Standard` |
| Style | `Default` · `Float` |

### Nav Item

**Component Set ID:** `280:165`

| Property | Values |
|----------|--------|
| Type | `Normal` · `Narrow` · `Tree` |
| Indent | `L1` · `L2` · `L3` · `L4` · `L5` |
| State | `Inactive` · `Hover` · `Selected` · `Selected hover` · `Disabled` |

### Top Navigation

**Component Set ID:** `391:6898` · Type: `SDT` / `MES`

### Token 對應

| Property | Token |
|----------|-------|
| Drawer 背景 | `elevation surface / 16dp` |
| Nav item hover | `component status / hover` |
| Nav item selected background | `+5 BG / Processing` |
| Nav item selected text / icon | `primary` |
| Nav item inactive text | `text / high emphasis` |
| Nav item disabled text | `component status / disabled element` |
| 分隔線 | `divider` |

---

## List

### List Item

**Component Set ID:** `293:294` (Organisms)

| Property | Values |
|----------|--------|
| Size | `L` · `M` |
| State | `Inactive` · `Hover` · `Selected` · `Selected hover` · `Disabled` |

### Dragable List item

**Component Set ID:** `804:3007`

| State | Values |
|-------|--------|
| State | Selected/Hover · Inactive · Disable · Selected-Dragging · Inactive-Dragging · Selected-Hover · Inactive-Hover |

### Token 對應

| Property | Token |
|----------|-------|
| 背景 | `background / surface` |
| Hover | `component status / hover` |
| Selected background | `+5 BG / Processing` |
| Selected text | `primary` |
| Disabled text | `component status / disabled element` |
| 分隔線 | `divider` |
| Drag handle icon | `text / medium emphasis` |

---

## Menu

**Component Set ID:** `297:687` (Organisms)

### Variants

| Property | Values |
|----------|--------|
| Menu Type | `Single` · `Caption` · `Multi` · `Group` · `Column menu` |

### Token 對應

| Property | Token |
|----------|-------|
| 背景 | `elevation surface / 08dp` |
| 文字 | `text / high emphasis` |
| Hover | `component status / hover` |
| Divider | `divider` |
| Caption 文字 | `text / medium emphasis` |

---

## Picker

| 元件 | ID | Variants |
|------|----|----------|
| Picker - Date | `1766:14584` | Type: popup / inline |
| Picker - Year | `2846:23124` | Type: popup / inline |
| Picker - Month | `2846:23250` | Type: popup / inline |
| Picker - Time | `3349:4822` | 時間規則: 12小時制 / 24小時制 |
| colorpick_status | `2455:20445` | status: normal / hover / select / disabled · Size: XS 24 / XL 32 |

### Multi-select

| 元件 | ID | Size | State |
|------|----|------|-------|
| Multi-select - Rectangle | `533:5957` | XL / L / M / S / XS | Empty · Empty hover · Focus · Filled · Filled hover · Error · Error hover · Disabled · Read-only |
| Multi-select - Round | `7332:19473` | XL / L / M | 同上 |

### Token 對應

| Property | Token |
|----------|-------|
| Popup 背景 | `elevation surface / 08dp` |
| 選取日期背景 | `primary` |
| 選取日期文字 | `text / white` |
| Today 圓圈 border | `primary` |
| Range 選取區間 | `+5 BG / Processing` |
| Hover | `component status / hover` |
| 輸入框 border | `textfield / border` |
| 輸入框 hover border | `textfield / border hover` |
| Disabled | `component status / disabled container` |

---

## Snackbar & Toast

### Snackbar

**Component Set ID:** `3395:15945` (Organisms)

| Property | Values |
|----------|--------|
| Type | `One-line` · `Multi-line with title` · `Multi-line wo title` |
| Show status icon | `True` · `False` |
| Show close button | `True` · `False` |
| Show action button | `True` · `False` |
| Style | `None` · `Stripe` |
| Status | `Processing` · `Success` · `Warning` · `Error` |

### Toast

**Component Set ID:** `20152:45601` (Organisms)

| Property | Values |
|----------|--------|
| Type | `One-line` · `Multi-line` |
| Status | `Success` · `Processing` · `Warning` · `Error` |

### Token 對應

| Property | Token |
|----------|-------|
| Background | `snackbar n tooltip / background` |
| 主要文字 | `text / white` (Light) · `text / body` (Dark) |
| Action button | `snackbar n tooltip / action button` |
| Secondary action | `snackbar n tooltip / secondary action button` |
| Action hover | `snackbar n tooltip / action button hover` |
| Status icon (Processing) | `snackbar n tooltip / processing` |
| Status icon (Success) | `snackbar n tooltip / success` |
| Status icon (Warning) | `snackbar n tooltip / warning` |
| Status icon (Error) | `snackbar n tooltip / error` |

---

## Tooltip

### Tooltip

**Component Set ID:** `51:771` (Organisms)

| Property | Values |
|----------|--------|
| Type | `Single-line` · `Multi-line` · `Rich Tooltip` |

### Icon with tooltip

**Component Set ID:** `3413:10899` · Type: `Info` / `Help` · State: `Default` / `Hover`

### Token 對應

| Property | Token |
|----------|-------|
| Background | `snackbar n tooltip / background` |
| 文字 | `text / white` (Light) · `text / black` (Dark) |

---

## Text Field

Text Field 依樣式與 Label 位置分為多個元件：

| 元件 | ID | Style | Label |
|------|----|-------|-------|
| Text Field - outlined - inline | `7192:121366` | Outlined | Inline |
| Text Field - outlined - top label | `7192:128485` | Outlined | Top |
| Text Field - outlined - left label | `7192:129632` | Outlined | Left |
| Text Field - underline - inline | `7192:130665` | Underline | Inline |
| Text Field - underline - top label | `7192:131878` | Underline | Top |
| Text Field - underline - left label | `7192:132779` | Underline | Left |
| Text Field - borderless | `8406:21582` | Borderless | — |

### Variants（各 Text Field 共用）

| Property | Values |
|----------|--------|
| Size | `XL (48)` · `L (44)` · `M (40)` · `S (36)` · `XS (32)` |
| State | `Empty` · `Focus` · `Filled` · `Error` · `Disabled` · `Read-only` |
| Hover | `True` · `False` |

### Token 對應

| Property | Token |
|----------|-------|
| Border (default) | `textfield / border` |
| Border (hover) | `textfield / border hover` |
| Border (focus) | `primary` |
| Border (error) | `system status / error` |
| Label 文字 | `text / medium emphasis` |
| Label (focus) | `primary` |
| Label (error) | `system status / error` |
| Input 文字 | `text / high emphasis` |
| Placeholder | `text / placeholder` |
| Helper text | `text / medium emphasis` |
| Error helper text | `system status / error` |
| Disabled background | `component status / disabled container` |
| Disabled 文字 | `text / disabled` |
| Read-only 文字 | `text / medium emphasis` |
| Leading icon | `secondary` |
| Trailing icon | `secondary` |

---

## Tab

### Primary Tab

**Component Set ID:** `34:154` (Organisms)

| Property | Values |
|----------|--------|
| Label Type | `label` · `icon - top` · `icon - horizontal` |
| Selected | `true` · `false` |
| State | `Activated` · `Inactive` · `Inactive hover` |

### Secondary Tab

**Component Set ID:** `37:1242`

| Property | Values |
|----------|--------|
| Lebel Type | `Label` · `icon - top` · `icon - horizontal` |
| Selected | `true` · `false` |
| State | `Activated` · `Inactive` · `Inactiv hover` · `Disabled` |

### Closable Tab

**Component Set ID:** `324:11758` · State × With actions (True / False)

### Token 對應

| Property | Token |
|----------|-------|
| Active indicator (底線) | `primary` |
| Active 文字 / icon | `primary` |
| Inactive 文字 / icon | `text / medium emphasis` |
| Hover background | `component status / hover` |
| Disabled 文字 | `component status / disabled element` |
| Tab bar 背景 | `background / surface` |
| Tab bar border | `divider` |

---

## Uploader

### Upload Trigger

**Component Set ID:** `8727:85836` (Organisms)

| Property | Values |
|----------|--------|
| Type | `Drag & Drop` · `Button` |
| State | `Default` · `Hover/Dragging` · `Uploading-Progress` · `Uploading-Spin` · `Upload failed` · `Disable` |

### Uploaded List Item

**Component Set ID:** `8727:86073` · Show remove file: `True` / `False`

### Token 對應

| Property | Token |
|----------|-------|
| Drop zone border | `textfield / border` |
| Drop zone hover border | `primary` |
| Drop zone hover background | `component status / hover` |
| Uploading progress bar | `system status / processing` |
| Upload failed icon | `system status / error` |
| Disabled background | `component status / disabled container` |
| File name 文字 | `text / high emphasis` |
| File size 文字 | `text / medium emphasis` |
| Remove icon | `secondary` |

---

## Atoms（全局樣式）

### Illustrations

**Component Set ID:** `208:3730` (Atoms)

| Property | Values |
|----------|--------|
| Type | 404_1 · 404_2 · Config · No data · Question · Something goes wrong · Under Construction × 2 · Tablet / Mobile not supported · Empty · Search · No result found · Unknown error · disconnect · Chart not supported · No data for chart · Feature not supported · Drag n drop |
| Theme | `Light` · `Dark` |

### Delta Logo

**Component Set ID:** `208:4010`

| Property | Values |
|----------|--------|
| Type | `Symbol` · `Full` · `Demo` |
| Color | `Blue` · `White` · `Gray` · `Black` |

---

## Bullet Graph

| 元件 | ID | Variants |
|------|----|----------|
| Bar status | `18838:21374` | Status: Failed / Passed |
| Target bar | `18838:21380` | Target %: 50–100% |
| Bullet graph for dashboard | `18838:21393` | Actual progress bar: 0–100% |

### Token 對應

| Property | Token |
|----------|-------|
| Passed bar | `system status / success` |
| Failed bar | `system status / error` |
| Target marker | `text / high emphasis` |
| Background track | `background / container high` |

---

---

## Navigation bar

> **來源：** Figma `9E3JLVk3VWOESufwYQIAT2` · Node `50:18240`（開發者平台/開發者工具）
> **用途：** 開發者平台專用的頂端導覽列，取代 DIAWorks 深色 App Bar。

### 說明

平台導覽列橫跨整個視窗頂端，高度固定 56px，白色背景配底部分隔線。左側放置 App Mosaic Icon 與應用程式名稱，右側提供說明文件、設定、語言切換、通知與使用者頭像五個操作入口。

### 結構

| 區域 | 元素 | 說明 |
|------|------|------|
| 左側 | App Mosaic Icon | 28×28px · 4 色方格（2×2 grid，gap 2px，border-radius 2px） |
| 左側 | App Name | Roboto Bold 16px · letter-spacing 0.5px |
| 右側 | Icon Button | 36×36px 圓形 · 5 種操作（help / settings / language / notification / avatar） |
| 右側 | Language Selector | Roboto 14px · 32px 高 · border-radius 4px |
| 右側 | User Avatar | 32×32px 圓形 · 背景 primary · 白色首字母 |

### 樣式規格

```css
/* Container */
height: 56px;
background: var(--bg-surface);           /* #ffffff */
border-bottom: 1px solid var(--divider); /* #d9d9d9 */
box-shadow: 0 1px 4px rgba(46,46,46,0.08);
padding: 0 16px;

/* App Name */
font-family: 'Roboto'; font-weight: 700; font-size: 16px;
color: var(--text-high);                 /* #333333 */
letter-spacing: 0.5px;

/* Icon Button (default) */
width: 36px; height: 36px; border-radius: 50%;
color: var(--secondary);                 /* #727171 */
background: transparent;

/* Icon Button (hover) */
background: var(--comp-hover);           /* #f0fbff */
color: var(--primary);                   /* #00adef */

/* User Avatar */
width: 32px; height: 32px; border-radius: 50%;
background: var(--primary);
color: #ffffff; font-family: 'Roboto'; font-weight: 500; font-size: 13px;
```

### Token 對應

| Property | Token |
|----------|-------|
| 背景 | `background / surface` |
| 底線 | `divider` |
| App Name 文字 | `text / high emphasis` |
| Icon Button 預設色 | `secondary` |
| Icon Button hover 背景 | `component status / hover` |
| Icon Button hover 文字 | `primary` |
| User Avatar 背景 | `primary` |

---

## Side menu

> **來源：** Figma `9E3JLVk3VWOESufwYQIAT2` · Node `50:18240`（開發者平台/開發者工具）
> **用途：** 開發者平台專用的側邊導覽選單，搭配 Platform Navigation Bar 使用。

### 說明

側邊導覽固定於左側，寬度 200px，白色背景配右側分隔線。支援一層展開樹狀結構（L1 → L2），上方顯示分類標題，下方顯示各功能導覽項目，底部固定顯示版本號。

### Variants

| Property | Values |
|----------|--------|
| Item Type | `Parent`（有子項，可展開） · `Leaf`（無子項，直接連結） |
| State | `Inactive` · `Hover` · `Active`（Selected） |
| Sub-item State | `Inactive` · `Hover` · `Active` |
| Expanded | `True` · `False`（Parent 專屬） |

### 結構

| 元素 | 規格 |
|------|------|
| Category Header | Noto Sans TC 500 13px · `primary` · 左側小圖示 · border-bottom divider |
| Nav Item 容器 | 高 40px · padding 0 8px 0 12px · border-left 2px（active 時顯示 primary） |
| Nav Item Icon | Material Icons 20px · opacity 0.85 · 隨 Item 色變化 |
| Nav Item Label | Noto Sans TC 13px |
| Chevron | Material Icons 18px · `expand_more` · active 時旋轉 180° |
| Sub-item 容器 | 高 36px · padding-left 44px · 背景 `bg-surface-dim` |
| Version Footer | Roboto 12px · `primary` · border-top divider |

### 樣式規格

```css
/* Sidenav Container */
width: 200px;
background: var(--bg-surface);
border-right: 1px solid var(--divider);

/* Nav Item (default) */
height: 40px;
color: var(--text-high);
border-left: 2px solid transparent;
font-family: 'Noto Sans TC'; font-size: 13px;

/* Nav Item (hover) */
background: var(--comp-hover);           /* #f0fbff */
color: var(--primary);

/* Nav Item (active / selected) */
background: var(--comp-hover);
color: var(--primary);
border-left-color: var(--primary);
font-weight: 500;

/* Sub-item */
height: 36px;
padding-left: 44px;
background: var(--bg-surface-dim);      /* #fafafa */

/* Version Footer */
font-family: 'Roboto'; font-size: 12px;
color: var(--primary);
```

### Token 對應

| Property | Token |
|----------|-------|
| 容器背景 | `background / surface` |
| 右側邊線 | `divider` |
| Item 預設文字 | `text / high emphasis` |
| Item hover 背景 | `component status / hover` |
| Item active 背景 | `component status / hover` |
| Item active 文字 / icon | `primary` |
| Item active 左側 border | `primary` |
| Sub-item 背景 | `background / surface dim` |
| Category Header 文字 | `primary` |
| Version 文字 | `primary` |

---

> 最後更新：2026-03-30
> 顏色數值請查閱 `token.md`，Token 名稱格式為 `分類 / 子項目`
> 樣式規格來源：Figma Web Design Kit (Beta) — 透過 Figma MCP 直接擷取
