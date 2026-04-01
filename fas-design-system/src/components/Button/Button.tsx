/**
 * Button — FAS Design Kit
 * @see ../../components.md § Button
 *
 * Style 使用時機：
 *   contained → 頁面最主要動作，一頁面不宜重複（限搭配 primary）
 *   outlined  → 大部分通用按鈕（預設）
 *   text      → 工具列、空間緊湊情境
 */
import React from 'react';

export type ButtonColor   = 'primary' | 'secondary' | 'error';
export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize    = 'xl' | 'l' | 'm' | 's' | 'xs';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 視覺層級，預設 outlined */
  variant?: ButtonVariant;
  /** 語意色，contained 只能搭配 primary */
  color?: ButtonColor;
  /** 高度尺寸，預設 m (40px) */
  size?: ButtonSize;
  /** 按鈕左側 icon（Material Icon name 字串，或任意 ReactNode） */
  iconLeft?: React.ReactNode;
  /** 按鈕右側 icon */
  iconRight?: React.ReactNode;
  /** loading 狀態：顯示 Spin，並 disabled 點擊 */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'outlined',
      color = 'primary',
      size = 'm',
      iconLeft,
      iconRight,
      loading = false,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    // TODO: 以 CSS Modules / Tailwind / styled-components 實作樣式
    // 所有顏色引用 tokens.ts cssVars，不寫死色碼
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          'fas-btn',
          `fas-btn--${variant}`,
          `fas-btn--${color}`,
          `fas-btn--${size}`,
          loading && 'fas-btn--loading',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {loading ? (
          <span className="fas-btn__spin" aria-hidden />
        ) : (
          iconLeft && <span className="fas-btn__icon fas-btn__icon--left">{iconLeft}</span>
        )}
        <span className="fas-btn__label">{children}</span>
        {!loading && iconRight && (
          <span className="fas-btn__icon fas-btn__icon--right">{iconRight}</span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
