import { TCommonElementSize, TCommonVariant } from "../../types/common.type";

export const BORDER_CLASSES: Record<TCommonVariant, string> = {
  primary: "border border-brand-primary-medium ",
  secondary: "border border-secondary",
  warning: "border border-warning-light",
  error: "border border-error-light",
  success: "border border-success-light",
};

export const BACKGROUND_CLASSES: Record<TCommonVariant, string> = {
  primary: "bg-brand-primary-light ",
  secondary: "bg-secondary",
  warning: "bg-warning-light",
  error: "bg-error-light",
  success: "bg-success-light",
};

export const ICON_CLASSES: Record<TCommonVariant, string> = {
  primary: "text-brand-primary",
  secondary: "text-secondary",
  warning: "text-warning",
  error: "text-error",
  success: "text-success",
};

export const TEXT_CLASSES: Record<TCommonVariant, string> = {
  primary: "text-primary",
  secondary: "text-primary",
  warning: "text-warning",
  error: "text-error",
  success: "text-success",
};

export const GAP_CLASSES: Record<TCommonElementSize, string> = {
  xs: "gap-1",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
};
