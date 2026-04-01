/**
 * FAS Design System — Components
 * Central barrel export
 *
 * 消費方引用範例：
 *   import { Button, StatusChip, DataTable } from '@delta/fas-design-system';
 */

// Button
export { Button } from './Button/Button';
export type { ButtonProps, ButtonColor, ButtonVariant, ButtonSize } from './Button/Button';

// Chip
export { StatusChip, SelectableChip, RemovableChip } from './Chip/Chip';
export type { StatusChipProps, SelectableChipProps, RemovableChipProps, ChipStatus, ChipShape, ChipVariant, ChipSize } from './Chip/Chip';

// TextField
export { TextField, TextArea } from './TextField/TextField';
export type { TextFieldProps, TextAreaProps, TextFieldStyle, TextFieldSize, TextFieldState } from './TextField/TextField';

// Dialog
export { Dialog, DialogSection, DialogDivider } from './Dialog/Dialog';
export type { DialogProps, DialogSize } from './Dialog/Dialog';

// DataTable
export { DataTable } from './DataTable/DataTable';
export type { DataTableProps, ColumnDef, PaginationConfig, SortDirection } from './DataTable/DataTable';

// Breadcrumbs
export { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs/Breadcrumbs';

// Snackbar / Toast
export { Snackbar, SnackbarProvider, SnackbarContext, useSnackbar } from './Snackbar/Snackbar';
export type { SnackbarProps, SnackbarStatus, SnackbarAction, SnackbarMessage } from './Snackbar/Snackbar';

// IconButton
export { IconButton } from './IconButton/IconButton';
export type { IconButtonProps, IconButtonSize } from './IconButton/IconButton';

// Uploader
export { Uploader } from './Uploader/Uploader';
export type { UploaderProps, UploaderState } from './Uploader/Uploader';

// FeatureTitle
export { FeatureTitle } from './FeatureTitle/FeatureTitle';
export type { FeatureTitleProps, FeatureTitleItem } from './FeatureTitle/FeatureTitle';
