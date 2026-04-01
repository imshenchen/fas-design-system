/**
 * Dialog — FAS Design Kit
 * @see ../../components.md § Dialog
 *
 * 所有 Dialog 必須提供明確取消入口（H3 User Control）
 * 破壞性操作的確認 Dialog 使用 Error 語意按鈕
 */
import React from 'react';

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const DIALOG_WIDTH: Record<DialogSize, string> = {
  xs:  '320px',
  sm:  '400px',
  md:  '480px',
  lg:  '640px',
  xl:  '800px',
};

export interface DialogProps {
  open: boolean;
  /** Dialog 標題 */
  title: string;
  size?: DialogSize;
  children: React.ReactNode;
  /** Footer actions（通常為 Button 組合） */
  actions?: React.ReactNode;
  /** 點擊 Overlay 是否關閉，破壞性操作建議設為 false */
  closeOnOverlay?: boolean;
  onClose: () => void;
  /** aria-labelledby 的 id，若不指定由元件自動產生 */
  titleId?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  title,
  size = 'md',
  children,
  actions,
  closeOnOverlay = true,
  onClose,
  titleId,
}) => {
  const generatedId = React.useId();
  const labelId = titleId ?? `dialog-title-${generatedId}`;

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fas-dialog__overlay"
      aria-modal="true"
      role="presentation"
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        role="dialog"
        aria-labelledby={labelId}
        className={['fas-dialog', `fas-dialog--${size}`].join(' ')}
        style={{ maxWidth: DIALOG_WIDTH[size] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="fas-dialog__header">
          <h2 id={labelId} className="fas-dialog__title">
            {title}
          </h2>
          <button
            type="button"
            className="fas-dialog__close"
            aria-label="關閉"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="fas-dialog__body">{children}</div>

        {/* Footer */}
        {actions && <div className="fas-dialog__footer">{actions}</div>}
      </div>
    </div>
  );
};

// ─── Convenience sub-components ───────────────────────────────────────────────
export const DialogSection: React.FC<{
  label?: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <section className="fas-dialog__section">
    {label && <p className="fas-dialog__section-label">{label}</p>}
    {children}
  </section>
);

export const DialogDivider: React.FC = () => (
  <hr className="fas-dialog__divider" />
);

export default Dialog;
