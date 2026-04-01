/**
 * IconButton — FAS Design Kit
 * @see ../../components.md § Icon Button
 */
import React from 'react';

export type IconButtonSize = 'l' | 'm' | 's';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Icon name 字串，或任意 ReactNode */
  icon: React.ReactNode;
  size?: IconButtonSize;
  /** selected 狀態（用於 Toggle） */
  selected?: boolean;
  /** aria-label 必填，提供無障礙說明 */
  'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'm', selected = false, className, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      className={[
        'fas-icon-btn',
        `fas-icon-btn--${size}`,
        selected && 'fas-icon-btn--selected',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon}
    </button>
  ),
);

IconButton.displayName = 'IconButton';
export default IconButton;
