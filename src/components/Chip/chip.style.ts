import { TCommonElementSize, TCommonVariant } from "../../types/common.type";

export const chipSizes: Record<TCommonElementSize, string> = {
  xs: "py-1 px-2 rounded-md",
  sm: "py-1 px-2 rounded-md",
  md: "py-1.5 px-3 rounded-lg",
  lg: "py-2 px-3 rounded-lg",
};
export const chipTextSizes: Record<TCommonElementSize, string> = {
  xs: "text-[0.625rem]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};
export const chipTextColor: Record<TCommonVariant, string> = {
  secondary: "text-primary",
  error: "text-error",
  warning: "text-warning",
  success: "text-success",
  primary: "text-primary",
};

export const chipBackground: Record<TCommonVariant, string> = {
  secondary: "bg-secondary",
  error: "bg-error-light",
  warning: "bg-warning-light",
  success: "bg-success-light",
  primary: "bg-brand-primary-light",
};
export const chipBorder: Record<TCommonVariant, string> = {
  secondary: "border-secondary",
  error: "border-error",
  warning: "border-warning",
  success: "border-success",
  primary: "border-brand-primary-medium",
};

export const dotSizeClass: Record<TCommonElementSize, string> = {
  xs: "w-1.5 h-1.5",
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-3 h-3",
};
export const dotBackgroundClass: Record<TCommonVariant, string> = {
  secondary: "bg-grey",
  error: "bg-error-dark",
  warning: "bg-warning-dark",
  success: "bg-success-dark",
  primary: "bg-brand-primary",
};
