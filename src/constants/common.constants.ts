import { TCommonElementSize } from "../types/common.type";

export const defaultElementSize: TCommonElementSize = "md";

export const formElementTextSizeClasses: Record<TCommonElementSize, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export const formElementPlaceHolderTextSizeClasses: Record<
  TCommonElementSize,
  string
> = {
  xs: "placeholder:text-xs",
  sm: "placeholder:text-xs",
  md: "placeholder:text-sm",
  lg: "placeholder:text-base",
};

export const formElementPaddingSizeClasses: Record<TCommonElementSize, string> =
  {
    xs: "py-1 px-1.5",
    sm: "py-2 px-2",
    md: "py-2 px-2.5",
    lg: "py-2 px-3.5",
  };

export const formElementHeightSizeClasses: Record<TCommonElementSize, string> =
  {
    xs: "h-7",
    sm: "h-8",
    md: "h-9",
    lg: "h-10",
  };

export const selectionInputSizeClasses: Record<TCommonElementSize, string> = {
  xs: "h-2.5 w-2.5",
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export const iconSizeClasses: Record<TCommonElementSize, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};
