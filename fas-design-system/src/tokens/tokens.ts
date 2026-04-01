/**
 * FAS Design System — Design Tokens
 * @see token.md for full specification and Dark Mode values
 *
 * 使用方式：
 *   import { cssVars, rawTokens } from '@fas-design-system/tokens';
 *
 * - cssVars   → 對應 CSS 自訂屬性（用於 inline style 或 styled-components）
 * - rawTokens → 原始色碼（用於 JS 邏輯、圖表、動態產生樣式等）
 */

// ─── CSS Variable References ────────────────────────────────────────────────
// 在 React 元件中使用這組，而非寫死色碼
export const cssVars = {
  // Brand
  deltaBlue: 'var(--delta-blue)',
  primary:   'var(--primary)',
  secondary: 'var(--secondary)',

  // System Status
  statusProcessing: 'var(--status-processing)',
  statusSuccess:    'var(--status-success)',
  statusWarning:    'var(--status-warning)',
  statusEmergency:  'var(--status-emergency)',
  statusError:      'var(--status-error)',
  statusMilestone:  'var(--status-milestone)',
  statusIdle:       'var(--status-idle)',

  // Background
  bgSurface:          'var(--bg-surface)',
  bgSurfaceDim:       'var(--bg-surface-dim)',
  bgSurfaceDimVar:    'var(--bg-surface-dim-var)',
  bgContainerLow:     'var(--bg-container-low)',
  bgContainerHigh:    'var(--bg-container-high)',

  // Elevation
  elevation02dp: 'var(--elevation-02dp)',
  elevation08dp: 'var(--elevation-08dp)',
  elevation24dp: 'var(--elevation-24dp)',

  // Text
  textWhite:       'var(--text-white)',
  textBlack:       'var(--text-black)',
  textHigh:        'var(--text-high)',
  textBody:        'var(--text-body)',
  textMedium:      'var(--text-medium)',
  textDisabled:    'var(--text-disabled)',
  textPlaceholder: 'var(--text-placeholder)',

  // Component States
  compHover:          'var(--comp-hover)',
  compHoverContained: 'var(--comp-hover-contained)',
  compHoverSecondary: 'var(--comp-hover-secondary)',
  compDisabledEl:     'var(--comp-disabled-el)',
  compDisabledCon:    'var(--comp-disabled-con)',
  compFocus:          'var(--comp-focus)',

  // Chip
  chipProcessing: 'var(--chip-processing)',
  chipSuccess:    'var(--chip-success)',
  chipWarning:    'var(--chip-warning)',
  chipEmergency:  'var(--chip-emergency)',
  chipError:      'var(--chip-error)',
  chipMilestone:  'var(--chip-milestone)',
  chipIdle:       'var(--chip-idle)',

  chipTextProcessing: 'var(--chip-text-processing)',
  chipTextSuccess:    'var(--chip-text-success)',
  chipTextWarning:    'var(--chip-text-warning)',
  chipTextEmergency:  'var(--chip-text-emergency)',
  chipTextError:      'var(--chip-text-error)',
  chipTextMilestone:  'var(--chip-text-milestone)',
  chipTextIdle:       'var(--chip-text-idle)',

  // Border / Divider
  divider:             'var(--divider)',
  cardOutlined:        'var(--card-outlined)',
  textfieldBorder:     'var(--textfield-border)',
  textfieldBorderHover:'var(--textfield-border-hover)',

  // Overlay / Scroll
  scrim:     'var(--scrim)',
  scrollBar: 'var(--scroll-bar)',

  // Data Table
  tableStriped:  'var(--table-striped)',
  tableSelected: 'var(--table-selected)',

  // Snackbar / Toast
  snackbarBg:      'var(--snackbar-bg)',
  snackbarSuccess: 'var(--snackbar-success)',
  snackbarError:   'var(--snackbar-error)',
  snackbarAction:  'var(--snackbar-action)',
} as const;

export type CssVar = typeof cssVars[keyof typeof cssVars];

// ─── Raw Token Values (Light Mode) ──────────────────────────────────────────
// 用於 JS 邏輯（如圖表配色、動態計算），不用於 React 元件樣式
export const rawTokens = {
  deltaBlue: '#0087dc',
  primary:   '#00adef',
  secondary: '#727171',

  statusProcessing: '#00adef',
  statusSuccess:    '#68ad23',
  statusWarning:    '#f5b900',
  statusEmergency:  '#f66d20',
  statusError:      '#f23a43',
  statusMilestone:  '#8a74ad',
  statusIdle:       '#808080',

  textHigh:        '#333333',
  textMedium:      '#727171',
  textDisabled:    '#bfbfbf',
  textPlaceholder: '#a6a6a6',
  textWhite:       '#ffffff',

  divider:     '#d9d9d9',
  bgSurface:   '#ffffff',
  bgSurfaceDim:'#fafafa',

  // Chart colors (1–21 主色系列)
  chartColors: [
    '#00adef', '#f5b900', '#68ad23', '#f66d20', '#8a74ad',
    '#f23a43', '#808080', '#3672cb', '#d28c2d', '#848f50',
    '#e36551', '#bb4ea1', '#ba484a', '#668c9e', '#3b46ec',
    '#b19838', '#00bd8b', '#b87c60', '#aa36e4', '#ff5aa6',
    '#1abdc2',
  ],
} as const;

// ─── Spacing Scale ───────────────────────────────────────────────────────────
// @see components.md § Spacing Scale（4px 基礎單位）
export const spacing = {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  5:  '20px',
  6:  '24px',
  7:  '28px',
  8:  '32px',
  10: '40px',
  12: '48px',
} as const;

export type SpacingKey = keyof typeof spacing;

// ─── Z-index Scale ───────────────────────────────────────────────────────────
export const zIndex = {
  base:       0,
  sticky:     10,
  sideMenu:   50,
  navBar:     100,
  dropdown:   200,
  dialog:     300,
  tooltip:    400,
} as const;
