/**
 * TextField — FAS Design Kit
 * @see ../../components.md § Text Field
 */
import React from 'react';

export type TextFieldStyle = 'outlined' | 'underline' | 'borderless';
export type TextFieldSize  = 'xl' | 'l' | 'm' | 's' | 'xs';
export type TextFieldState = 'default' | 'focus' | 'filled' | 'error' | 'disabled' | 'readonly';

export interface TextFieldProps {
  /** 欄位標籤 */
  label?: string;
  /** Label 位置 */
  labelPosition?: 'top' | 'inline' | 'left';
  style?:    TextFieldStyle;
  size?:     TextFieldSize;
  value?:    string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?:   React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  /** 錯誤訊息：有值時欄位進入 error state */
  error?: string;
  /** 輔助說明文字（無錯誤時顯示） */
  helperText?: string;
  disabled?:  boolean;
  readOnly?:  boolean;
  required?:  boolean;
  maxLength?: number;
  /** 顯示字元計數器（配合 maxLength） */
  showCount?: boolean;
  leadingIcon?:  React.ReactNode;
  trailingIcon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  labelPosition = 'top',
  style    = 'outlined',
  size     = 'm',
  value,
  defaultValue,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  disabled  = false,
  readOnly  = false,
  required  = false,
  maxLength,
  showCount = false,
  leadingIcon,
  trailingIcon,
  type = 'text',
  id,
  name,
  className,
  inputRef,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e.target.value, e);
  };

  const state: TextFieldState = disabled
    ? 'disabled'
    : readOnly
    ? 'readonly'
    : error
    ? 'error'
    : 'default';

  // TODO: 以 CSS Modules / Tailwind 實作樣式，色彩引用 tokens.ts cssVars
  return (
    <div
      className={[
        'fas-textfield',
        `fas-textfield--${style}`,
        `fas-textfield--${size}`,
        `fas-textfield--${state}`,
        `fas-textfield--label-${labelPosition}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <label htmlFor={id} className="fas-textfield__label">
          {label}
          {required && <span className="fas-textfield__required" aria-hidden>*</span>}
        </label>
      )}
      <div className="fas-textfield__control">
        {leadingIcon && (
          <span className="fas-textfield__icon fas-textfield__icon--leading">{leadingIcon}</span>
        )}
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          value={currentValue}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className="fas-textfield__input"
        />
        {trailingIcon && (
          <span className="fas-textfield__icon fas-textfield__icon--trailing">{trailingIcon}</span>
        )}
      </div>
      {showCount && maxLength && (
        <span className="fas-textfield__count" aria-live="polite">
          {currentValue.length} / {maxLength}
        </span>
      )}
      {error && (
        <p id={`${id}-error`} className="fas-textfield__error" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${id}-helper`} className="fas-textfield__helper">
          {helperText}
        </p>
      )}
    </div>
  );
};

// ─── Textarea variant ────────────────────────────────────────────────────────
export interface TextAreaProps extends Omit<TextFieldProps, 'type' | 'leadingIcon' | 'trailingIcon' | 'inputRef'> {
  rows?: number;
  textareaRef?: React.Ref<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label, labelPosition = 'top', style = 'outlined', size = 'm',
  value, defaultValue, onChange, onBlur, placeholder, error, helperText,
  disabled = false, readOnly = false, required = false,
  maxLength, showCount = false, id, name, className, textareaRef,
  rows = 3,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    (onChange as any)?.(e.target.value, e);
  };

  return (
    <div className={['fas-textfield fas-textfield--textarea', `fas-textfield--${style}`, `fas-textfield--${size}`, className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className="fas-textfield__label">
          {label}{required && <span aria-hidden>*</span>}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={id} name={name} rows={rows}
        value={currentValue} onChange={handleChange} onBlur={onBlur}
        placeholder={placeholder} disabled={disabled} readOnly={readOnly}
        required={required} maxLength={maxLength}
        aria-invalid={!!error}
        className="fas-textfield__input fas-textfield__textarea"
      />
      {showCount && maxLength && (
        <span className="fas-textfield__count">{currentValue.length} / {maxLength}</span>
      )}
      {error && <p className="fas-textfield__error" role="alert">{error}</p>}
      {!error && helperText && <p className="fas-textfield__helper">{helperText}</p>}
    </div>
  );
};

export default TextField;
