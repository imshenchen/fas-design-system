# FAS Design Kit — Design Tokens

> Source: `fas_design_kit_token.json`
> Token set: **Theme** · Modes: **Light Mode** / **Dark Mode**

---

## 概覽 Overview

本檔案將設計系統的 Token JSON 轉換為可讀格式，供 AI 與開發者參考使用。
所有 Token 類型皆為 `color`，適用範圍為 `ALL_SCOPES`。

---

## 品牌色 Brand Color

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `delta blue` *(品牌色)* | `#0087dc` | `#0087dc` |

---

## 主要色 Primary & Secondary

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `primary` | `#00adef` | `#57cfff` |
| `secondary` | `#727171` | `#cccccc` |

---

## 系統狀態色 System Status

用於表示系統層級的狀態，例如資料流程、警示訊息等。

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `system status / processing` | `#00adef` | `#57cfff` |
| `system status / success` | `#68ad23` | `#82d52f` |
| `system status / warning` | `#f5b900` | `#ffcb29` |
| `system status / emergency` | `#f66d20` | `#f88f53` |
| `system status / error` | `#f23a43` | `#f56b71` |
| `system status / milestone` | `#8a74ad` | `#a695c1` |
| `system status / idle` | `#808080` | `#a3a3a3` |
| `system status / draft` | `#cccccc` | `#727171` |

---

## 背景色 Background

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `background / surface` | `#ffffff` | `#141414` |
| `background / surface dim` | `#fafafa` | `#1a1a1a` |
| `background / surface dim variable` | `#f6f7f9` | `#1a1a1a` |
| `background / container low` | `#f3f3f3` | `#262626` |
| `background / container high` | `#ebebeb` | `#2e2e2e` |

---

## 層次表面色 Elevation Surface

在 Dark Mode 中，層次越高顏色越淺，以模擬 Material Design 的高度感。

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `elevation surface / 00dp` | `#ffffff` | `#1a1a1a` |
| `elevation surface / 02dp` | `#ffffff` | `#242424` |
| `elevation surface / 04dp` | `#ffffff` | `#292929` |
| `elevation surface / 06dp` | `#ffffff` | `#2e2e2e` |
| `elevation surface / 08dp` | `#ffffff` | `#333333` |
| `elevation surface / 12dp` | `#ffffff` | `#383838` |
| `elevation surface / 16dp` | `#ffffff` | `#383838` |
| `elevation surface / 24dp` | `#ffffff` | `#383838` |

---

## 文字色 Text

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `text / white` | `#ffffff` | `#000000` |
| `text / black` | `#000000` | `#ffffff` |
| `text / body` | `#333333` | `#f3f3f3` |
| `text / high emphasis` | `#333333` | `#f3f3f3` |
| `text / medium emphasis` | `#727171` | `#cccccc` |
| `text / disabled` | `#bfbfbf` | `#595959` |
| `text / placeholder` | `#a6a6a6` | `#727171` |

---

## 元件狀態色 Component Status

用於互動元件的各種狀態（hover、focus、disabled）。

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `component status / hover` | `#f0fbff` | `rgba(255,255,255,0.08)` |
| `component status / hover error` | `#fef1f1` | `rgba(255,255,255,0.08)` |
| `component status / hover secondary` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` |
| `component status / hover contained` | `#0088bd` | `#8adeff` |
| `component status / focus` | `rgba(0,173,239,0.12)` | `rgba(255,255,255,0.08)` |
| `component status / disabled element` | `#bfbfbf` | `#595959` |
| `component status / disabled container` | `#e6e6e6` | `#3d3d3d` |

---

## 狀態背景色 +4 BG（飽和）

用於有色背景區塊（如 Chip、Banner），飽和度較高。

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `+4 BG / Processing` | `#c2eeff` | `#003e57` |
| `+4 BG / Success` | `#e0fbc6` | `#29440e` |
| `+4 BG / Warning` | `#fff0c2` | `#5c4500` |
| `+4 BG / Emergency` | `#feece2` | `#7b2f05` |
| `+4 BG / Error` | `#fde2e4` | `#73171b` |
| `+4 BG / Milestone` | `#ece9f2` | `#413357` |
| `+4 BG / Idle` | `#ebebeb` | `#454545` |
| `+4 BG / Turquoise` | `#bdffed` | `#003d2d` |

---

## 狀態背景色 +5 BG（柔和）

用於有色背景區塊，飽和度較低、更柔和。

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `+5 BG / Processing` | `#f0fbff` | `#003e57` |
| `+5 BG / Success` | `#effbe2` | `#29440e` |
| `+5 BG / Warning` | `#fffaeb` | `#5c4500` |
| `+5 BG / Emergency` | `#fef5f0` | `#7b2f05` |
| `+5 BG / Error` | `#fef1f1` | `#73171b` |
| `+5 BG / Milestone` | `#f7f5f9` | `#413357` |
| `+5 BG / Idle` | `#f3f3f3` | `#454545` |

---

## 輸入框 Textfield

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `textfield / border` | `#727171` | `#808080` |
| `textfield / border hover` | `#808080` | `#a3a3a3` |

---

## 資料表格 Data Table

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `data table / striped row` | `#f6f7f9` | `#262626` |
| `data table / selected row` | `#e0f7ff` | `#00638a` |

---

## 通知條與提示框 Snackbar & Tooltip

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `snackbar n tooltip / background` | `#333333` | `#ffffff` |
| `snackbar n tooltip / action button` | `#57cfff` | `#00adef` |
| `snackbar n tooltip / secondary action button` | `#cccccc` | `#727171` |
| `snackbar n tooltip / action button hover` | `rgba(255,255,255,0.08)` | `#f0fbff` |
| `snackbar n tooltip / processing` | `#57cfff` | `#00adef` |
| `snackbar n tooltip / success` | `#82d52f` | `#68ad23` |
| `snackbar n tooltip / error` | `#f56b71` | `#f23a43` |
| `snackbar n tooltip / warning` | `#ffcb29` | `#f5b900` |

---

## 開關 Switch

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `switch / track on` | `rgba(0,173,239,0.38)` | `rgba(194,238,255,0.38)` |
| `switch / track off` | `rgba(114,114,113,0.38)` | `#727171` |
| `switch / track disabled` | `rgba(204,204,204,0.38)` | `rgba(114,113,113,0.6)` |
| `switch / thumb off` | `#ffffff` | `#e0e0e0` |
| `switch / thumb disabled` | `#999999` | `#727171` |

---

## 卡片 Card

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `card / outlined` | `#d9d9d9` | `#4d4d4d` |

---

## 標籤片 Chip

Chip 有三組子 Token：背景色、文字色（`text *`）、外框色（`outline *`）。

### Chip 背景色

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `chip / processing` | `#c2eeff` | `#003e57` |
| `chip / success` | `#e0fbc6` | `#29440e` |
| `chip / warning` | `#fff0c2` | `#5c4500` |
| `chip / emergency` | `#feece2` | `#7b2f05` |
| `chip / error` | `#fde2e4` | `#73171b` |
| `chip / milestone` | `#ece9f2` | `#413357` |
| `chip / idle` | `#ebebeb` | `#454545` |
| `chip / mariner` | `#ceddf2` | `#143668` |
| `chip / moss` | `#d5dabe` | `#3c4125` |
| `chip / bronze` | `#f2ddc0` | `#543812` |
| `chip / salmon` | `#fde0d8` | `#65170b` |
| `chip / wine` | `#f4e1e5` | `#602436` |
| `chip / orchid` | `#f2e2f4` | `#58224b` |
| `chip / slate` | `#e0e8eb` | `#2c3d45` |
| `chip / indigo` | `#dadcfb` | `#13197c` |
| `chip / turquoise` | `#bdffed` | `#003d2d` |
| `chip / khaki` | `#e6dcb2` | `#4d4319` |
| `chip / cinnamon` | `#f2dac9` | `#4e3023` |
| `chip / pink` | `#ffe5f1` | `#880742` |
| `chip / violet` | `#f0d9fc` | `#400c5a` |
| `chip / aqua` | `#baf6f7` | `#0a4648` |

### Chip 文字色

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `chip / text processing` | `#00638a` | `#ffffff` |
| `chip / text success` | `#365912` | `#ffffff` |
| `chip / text warning` | `#5c4500` | `#ffffff` |
| `chip / text emergency` | `#ac4207` | `#ffffff` |
| `chip / text error` | `#bb0c15` | `#ffffff` |
| `chip / text milestone` | `#594677` | `#ffffff` |
| `chip / text idle` | `#585858` | `#ffffff` |
| `chip / text mariner` | `#254f8e` | `#ffffff` |
| `chip / text moss` | `#5b6237` | `#ffffff` |
| `chip / text bronze` | `#7e541b` | `#ffffff` |
| `chip / text salmon` | `#952918` | `#ffffff` |
| `chip / text wine` | `#813132` | `#ffffff` |
| `chip / text orchid` | `#762d65` | `#ffffff` |
| `chip / text slate` | `#3d5561` | `#ffffff` |
| `chip / text indigo` | `#121cba` | `#ffffff` |
| `chip / text turquoise` | `#00664b` | `#ffffff` |
| `chip / text khaki` | `#4d4319` | `#ffffff` |
| `chip / text cinnamon` | `#7b4d37` | `#ffffff` |
| `chip / text pink` | `#c20059` | `#ffffff` |
| `chip / text violet` | `#6d1599` | `#ffffff` |
| `chip / text aqua` | `#0e6567` | `#ffffff` |

### Chip 外框色 (Light Mode)

在 Light Mode 中，Chip 外框色與文字色相同（各狀態詳見文字色）。

### Chip 外框色 (Dark Mode)

在 Dark Mode 中，Chip 外框色使用系統狀態色。

| Token | Dark Mode |
|-------|-----------|
| `chip / outline processing` | `#00adef` |
| `chip / outline success` | `#68ad23` |
| `chip / outline warning` | `#f5b900` |
| `chip / outline emergency` | `#f66d20` |
| `chip / outline error` | `#f23a43` |
| `chip / outline milestone` | `#8a74ad` |
| `chip / outline idle` | `#808080` |
| `chip / outline mariner` | `#3672cb` |
| `chip / outline moss` | `#848f50` |
| `chip / outline bronze` | `#d28c2d` |
| `chip / outline salmon` | `#e36551` |
| `chip / outline wine` | `#ba484a` |
| `chip / outline orchid` | `#bb4ea1` |
| `chip / outline slate` | `#668c9e` |
| `chip / outline indigo` | `#3b46ec` |
| `chip / outline turquoise` | `#00bd8b` |
| `chip / outline khaki` | `#b19838` |
| `chip / outline cinnamon` | `#b87c60` |
| `chip / outline pink` | `#ff5aa6` |
| `chip / outline violet` | `#aa36e4` |
| `chip / outline aqua` | `#1abdc2` |

---

## 分隔線 Divider

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `divider` | `#d9d9d9` | `#4d4d4d` |

---

## 遮罩與捲軸 Scrim & Scroll Bar

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `scrim` | `rgba(0,0,0,0.7)` | `rgba(0,0,0,0.7)` |
| `scroll bar` | `rgba(0,0,0,0.3)` | `rgba(255,255,255,0.3)` |

---

## 圖表色 Chart

圖表提供 63 個有序色票（1–63），前 21 個為主色，22–42 為淺色版，43–63 為深色版。
Light Mode 與 Dark Mode 共用相同圖表色序列（axis 除外）。

### 圖表座標軸

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `chart / axis XY` | `#cccccc` | `#585858` |
| `chart / axis label` | `#727171` | `#cccccc` |

### 主色系列（1–21）Light Mode

| # | 名稱 | 顏色 |
|---|------|------|
| 1 | processing | `#00adef` |
| 2 | warning | `#f5b900` |
| 3 | success | `#68ad23` |
| 4 | emergency | `#f66d20` |
| 5 | milestone | `#8a74ad` |
| 6 | error | `#f23a43` |
| 7 | idle | `#808080` |
| 8 | mariner | `#3672cb` |
| 9 | bronze | `#d28c2d` |
| 10 | moss | `#848f50` |
| 11 | salmon | `#e36551` |
| 12 | orchid | `#bb4ea1` |
| 13 | wine | `#ba484a` |
| 14 | slate | `#668c9e` |
| 15 | indigo | `#3b46ec` |
| 16 | khaki | `#b19838` |
| 17 | turquoise | `#00bd8b` |
| 18 | cinnamon | `#b87c60` |
| 19 | violet | `#aa36e4` |
| 20 | pink | `#ff5aa6` |
| 21 | aqua | `#1abdc2` |

### 淺色系列（22–42）Light Mode

| # | 名稱 | 顏色 |
|---|------|------|
| 22 | processing (light) | `#8adeff` |
| 23 | warning (light) | `#ffe48f` |
| 24 | success (light) | `#b5e684` |
| 25 | emergency (light) | `#fccfb5` |
| 26 | milestone (light) | `#d7cfe3` |
| 27 | error (light) | `#fccacd` |
| 28 | idle (light) | `#d9d9d9` |
| 29 | mariner (light) | `#85aae0` |
| 30 | bronze (light) | `#e4ba81` |
| 31 | moss (light) | `#b4bd89` |
| 32 | salmon (light) | `#f8b9b0` |
| 33 | orchid (light) | `#d798c8` |
| 34 | wine (light) | `#e3b5c1` |
| 35 | slate (light) | `#a4bbc6` |
| 36 | indigo (light) | `#989ef5` |
| 37 | khaki (light) | `#d5c37b` |
| 38 | turquoise (light) | `#4cffcf` |
| 39 | cinnamon (light) | `#e9c0a4` |
| 40 | violet (light) | `#daa1f7` |
| 41 | pink (light) | `#ff99c8` |
| 42 | aqua (light) | `#59e4e9` |

### 深色系列（43–63）Light Mode

| # | 名稱 | 顏色 |
|---|------|------|
| 43 | Processing (dark) | `#00638a` |
| 44 | Warning (dark) | `#8f6c00` |
| 45 | Success (dark) | `#365912` |
| 46 | Emergency (dark) | `#ac4207` |
| 47 | Milestone (dark) | `#594677` |
| 48 | Error (dark) | `#bb0c15` |
| 49 | Idle (dark) | `#585858` |
| 50 | Mariner (dark) | `#254f8e` |
| 51 | Bronze (dark) | `#7e541b` |
| 52 | Moss (dark) | `#5b6237` |
| 53 | Salmon (dark) | `#952918` |
| 54 | Orchid (dark) | `#762d65` |
| 55 | Wine (dark) | `#813132` |
| 56 | Slate (dark) | `#3d5561` |
| 57 | Indigo (dark) | `#121cba` |
| 58 | Khaki (dark) | `#746425` |
| 59 | Turquoise (dark) | `#00664b` |
| 60 | Cinnamon (dark) | `#7b4d37` |
| 61 | Violet (dark) | `#6d1599` |
| 62 | Pink (dark) | `#c20059` |
| 63 | Aqua (dark) | `#0e6567` |

> **注意：** Dark Mode 的圖表色（22–42 淺色系列）與 Light Mode 不同，改用更深的顏色；深色系列（43–63）也略有差異。詳見原始 JSON。

---

## Token 命名規則說明

- **`system status`**：系統層級狀態色，用於資料、事件的狀態標示
- **`component status`**：元件互動狀態（hover、focus、disabled）
- **`+4 BG` / `+5 BG`**：有色背景，+4 飽和度較高，+5 較柔和
- **`chip`**：Chip 元件有三層子 Token（背景、文字、外框）
- **圖表色 1–21**：主色，22–42：淺色，43–63：深色
