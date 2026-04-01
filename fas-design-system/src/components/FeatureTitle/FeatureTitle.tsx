/**
 * FeatureTitle — FAS Design Kit
 * @see ../../components.md § FeatureTitle
 *
 * 固定在 NavigationBar 下方的頁面標題列。
 * 左側顯示麵包屑導航（最多 5 層），右側可放入 CTA 按鈕。
 */
import React from 'react';
import { cssVars, spacing, zIndex } from '../../tokens/tokens';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface FeatureTitleItem {
  label: string;
  /** 有 onClick 時渲染為可點擊連結，否則為純文字（current） */
  onClick?: () => void;
}

export interface FeatureTitleProps {
  /**
   * 麵包屑導航層級，最多 5 層。
   * 最後一項為當前頁面（不可點擊），其餘項目需提供 onClick。
   */
  items: FeatureTitleItem[];
  /**
   * 右側操作按鈕區，傳入 <Button> 元件即可。
   * 建議最多放 2 個按鈕。
   */
  actions?: React.ReactNode;
  /** 自訂 className */
  className?: string;
  /**
   * 距離頂部的偏移量（px），預設 56（NavBar 高度）。
   * 若 NavBar 高度不同，請依實際值調整。
   */
  topOffset?: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

export const FeatureTitle = React.forwardRef<HTMLDivElement, FeatureTitleProps>(
  ({ items, actions, className, topOffset = 56 }, ref) => {
    // 最多取前 5 層
    const visibleItems = items.slice(0, 5);

    return (
      <div
        ref={ref}
        className={['fas-feature-title', className].filter(Boolean).join(' ')}
        style={{
          position:        'sticky',
          top:             topOffset,
          zIndex:          zIndex.sticky,
          display:         'flex',
          alignItems:      'center',
          gap:             spacing[4],
          minHeight:       '56px',
          padding:         `${spacing[2]} ${spacing[6]}`,
          backgroundColor: cssVars.bgSurface,
          borderBottom:    `1px solid ${cssVars.divider}`,
          boxSizing:       'border-box',
        }}
      >
        {/* ── Left: Breadcrumb Navigation ── */}
        <nav
          aria-label="Page breadcrumb"
          className="fas-feature-title__nav"
          style={{ display: 'flex', alignItems: 'center', gap: spacing[2], flex: 1, minWidth: 0 }}
        >
          {visibleItems.map((item, idx) => {
            const isLast  = idx === visibleItems.length - 1;
            const isLink  = !isLast && !!item.onClick;

            return (
              <React.Fragment key={idx}>
                {/* Label */}
                {isLink ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="fas-feature-title__crumb fas-feature-title__crumb--link"
                    style={{
                      font:            'inherit',
                      fontSize:        '20px',
                      lineHeight:      '24px',
                      fontWeight:      500,
                      fontFamily:      '"Noto Sans TC", sans-serif',
                      color:           cssVars.secondary,
                      background:      'none',
                      border:          'none',
                      padding:         0,
                      cursor:          'pointer',
                      whiteSpace:      'nowrap',
                      textDecoration:  'none',
                    }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={`fas-feature-title__crumb${isLast ? ' fas-feature-title__crumb--current' : ''}`}
                    aria-current={isLast ? 'page' : undefined}
                    style={{
                      fontSize:   '20px',
                      lineHeight: '24px',
                      fontWeight: 500,
                      fontFamily: '"Noto Sans TC", sans-serif',
                      color:      isLast ? cssVars.textHigh : cssVars.secondary,
                      whiteSpace: 'nowrap',
                      overflow:   isLast ? 'hidden' : undefined,
                      textOverflow: isLast ? 'ellipsis' : undefined,
                    }}
                  >
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLast && (
                  <span
                    className="fas-feature-title__sep"
                    aria-hidden="true"
                    style={{
                      fontFamily: '"Material Icons"',
                      fontSize:   '24px',
                      lineHeight: '24px',
                      color:      cssVars.secondary,
                      userSelect: 'none',
                      flexShrink: 0,
                    }}
                  >
                    navigate_next
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* ── Right: Action Buttons ── */}
        {actions && (
          <div
            className="fas-feature-title__actions"
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        spacing[4],
              flexShrink: 0,
            }}
          >
            {actions}
          </div>
        )}
      </div>
    );
  }
);

FeatureTitle.displayName = 'FeatureTitle';

export default FeatureTitle;
