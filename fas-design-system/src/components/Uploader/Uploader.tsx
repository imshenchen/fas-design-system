/**
 * Uploader — FAS Design Kit
 * @see ../../components.md § Uploader
 */
import React from 'react';

export type UploaderState = 'default' | 'dragging' | 'uploading' | 'error' | 'disabled';

export interface UploaderProps {
  /** 接受的檔案類型（MIME 或副檔名），如 '.tsv' 或 'image/*' */
  accept?: string;
  /** 最大檔案大小（bytes） */
  maxSize?: number;
  multiple?: boolean;
  disabled?: boolean;
  /** 上傳進度 0–100，有值時顯示 progress bar */
  progress?: number;
  /** 錯誤訊息 */
  error?: string;
  onSelect: (files: File[]) => void;
  /** 拖曳進入時觸發 */
  onDragEnter?: () => void;
  /** 拖曳離開時觸發 */
  onDragLeave?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Uploader: React.FC<UploaderProps> = ({
  accept,
  maxSize,
  multiple = false,
  disabled = false,
  progress,
  error,
  onSelect,
  onDragEnter,
  onDragLeave,
  className,
  children,
}) => {
  const [dragging, setDragging] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const validate = (files: FileList | null): File[] => {
    if (!files) return [];
    return Array.from(files).filter((file) => {
      if (maxSize && file.size > maxSize) return false;
      return true;
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    onDragLeave?.();
    if (disabled) return;
    const valid = validate(e.dataTransfer.files);
    if (valid.length) onSelect(valid);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!dragging) {
      setDragging(true);
      onDragEnter?.();
    }
  };

  const handleDragLeave = () => {
    setDragging(false);
    onDragLeave?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valid = validate(e.target.files);
    if (valid.length) onSelect(valid);
    e.target.value = '';
  };

  const state: UploaderState = disabled
    ? 'disabled'
    : error
    ? 'error'
    : progress !== undefined
    ? 'uploading'
    : dragging
    ? 'dragging'
    : 'default';

  return (
    <div
      className={['fas-uploader', `fas-uploader--${state}`, className].filter(Boolean).join(' ')}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={disabled ? undefined : () => inputRef.current?.click()}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className="fas-uploader__input"
        aria-hidden
      />

      {progress !== undefined ? (
        <div className="fas-uploader__progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="fas-uploader__progress-bar" style={{ width: `${progress}%` }} />
          <span>{progress}%</span>
        </div>
      ) : (
        children ?? (
          <div className="fas-uploader__placeholder">
            <span className="fas-uploader__icon" aria-hidden />
            <p className="fas-uploader__title">拖曳檔案至此，或點擊選擇檔案</p>
            {accept && <p className="fas-uploader__meta">接受格式：{accept}</p>}
            {maxSize && (
              <p className="fas-uploader__meta">最大 {(maxSize / 1024 / 1024).toFixed(0)}MB</p>
            )}
          </div>
        )
      )}

      {error && <p className="fas-uploader__error" role="alert">{error}</p>}
    </div>
  );
};

export default Uploader;
