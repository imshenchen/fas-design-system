/**
 * Snackbar / Toast — FAS Design Kit
 * @see ../../components.md § Snackbar & Toast
 */
import React from 'react';

export type SnackbarStatus = 'success' | 'error' | 'warning' | 'processing';

export interface SnackbarAction {
  label: string;
  onClick: () => void;
}

export interface SnackbarProps {
  open: boolean;
  message: string;
  status?: SnackbarStatus;
  /** 自動關閉毫秒數，0 表示不自動關閉 */
  autoHideDuration?: number;
  action?: SnackbarAction;
  onClose?: () => void;
  className?: string;
}

export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  status,
  autoHideDuration = 4000,
  action,
  onClose,
  className,
}) => {
  React.useEffect(() => {
    if (!open || !autoHideDuration) return;
    const timer = setTimeout(() => onClose?.(), autoHideDuration);
    return () => clearTimeout(timer);
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={['fas-snackbar', status && `fas-snackbar--${status}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      {status && <span className="fas-snackbar__icon" aria-hidden />}
      <span className="fas-snackbar__message">{message}</span>
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="fas-snackbar__action"
        >
          {action.label}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          aria-label="關閉"
          onClick={onClose}
          className="fas-snackbar__close"
        >
          ×
        </button>
      )}
    </div>
  );
};

// ─── SnackbarProvider（Queue 管理） ────────────────────────────────────────────
export interface SnackbarMessage extends Omit<SnackbarProps, 'open' | 'onClose'> {
  id: string;
}

interface SnackbarContextValue {
  showSnackbar: (msg: Omit<SnackbarMessage, 'id'>) => void;
}

export const SnackbarContext = React.createContext<SnackbarContextValue>({
  showSnackbar: () => {},
});

export const useSnackbar = () => React.useContext(SnackbarContext);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queue, setQueue] = React.useState<SnackbarMessage[]>([]);

  const showSnackbar = React.useCallback(
    (msg: Omit<SnackbarMessage, 'id'>) => {
      const id = `snackbar-${Date.now()}`;
      setQueue((q) => [...q, { ...msg, id }]);
    },
    [],
  );

  const remove = (id: string) =>
    setQueue((q) => q.filter((m) => m.id !== id));

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <div className="fas-snackbar__container" aria-live="polite">
        {queue.map(({ id, ...rest }) => (
          <Snackbar key={id} open onClose={() => remove(id)} {...rest} />
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export default Snackbar;
