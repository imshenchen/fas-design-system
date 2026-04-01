/**
 * Chip / StatusChip — FAS Design Kit
 * @see ../../components.md § Chip
 */
import React from 'react';

export type ChipStatus =
  | 'processing' | 'success' | 'warning' | 'emergency'
  | 'error' | 'milestone' | 'idle'
  | 'mariner' | 'moss' | 'bronze' | 'salmon' | 'wine'
  | 'orchid' | 'slate' | 'indigo' | 'turquoise' | 'khaki'
  | 'cinnamon' | 'pink' | 'violet' | 'aqua';

export type ChipShape   = 'round' | 'rectangle';
export type ChipVariant = 'filled' | 'outlined';
export type ChipSize    = 'l' | 's';

// ─── StatusChip ───────────────────────────────────────────────────────────────
export interface StatusChipProps {
  status: ChipStatus;
  label: string;
  shape?:   ChipShape;
  variant?: ChipVariant;
  size?:    ChipSize;
  className?: string;
}

/**
 * StatusChip — 用於顯示節點、設備、工單等的標準狀態
 * 顏色語意由 token.md 定義，不得自行覆寫
 */
export const StatusChip: React.FC<StatusChipProps> = ({
  status,
  label,
  shape   = 'round',
  variant = 'filled',
  size    = 'l',
  className,
}) => (
  <span
    className={[
      'fas-chip',
      `fas-chip--${shape}`,
      `fas-chip--${variant}`,
      `fas-chip--${size}`,
      `fas-chip--${status}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {label}
  </span>
);

// ─── SelectableChip ───────────────────────────────────────────────────────────
export interface SelectableChipProps {
  label: string;
  selected?: boolean;
  onToggle?: (selected: boolean) => void;
  disabled?: boolean;
  size?: ChipSize;
  className?: string;
}

export const SelectableChip: React.FC<SelectableChipProps> = ({
  label,
  selected = false,
  onToggle,
  disabled = false,
  size = 'l',
  className,
}) => (
  <button
    type="button"
    disabled={disabled}
    aria-pressed={selected}
    onClick={() => onToggle?.(!selected)}
    className={[
      'fas-chip fas-chip--selectable',
      `fas-chip--${size}`,
      selected ? 'fas-chip--selected' : '',
      disabled ? 'fas-chip--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {label}
  </button>
);

// ─── RemovableChip ────────────────────────────────────────────────────────────
export interface RemovableChipProps {
  label: string;
  onRemove?: () => void;
  size?: ChipSize;
  className?: string;
}

export const RemovableChip: React.FC<RemovableChipProps> = ({
  label,
  onRemove,
  size = 'l',
  className,
}) => (
  <span
    className={['fas-chip fas-chip--removable', `fas-chip--${size}`, className]
      .filter(Boolean)
      .join(' ')}
  >
    {label}
    <button
      type="button"
      aria-label={`移除 ${label}`}
      onClick={onRemove}
      className="fas-chip__remove"
    >
      ×
    </button>
  </span>
);

export default StatusChip;
