import { defaultElementSize } from "../../constants/common.constants";
import { TCommonElementSize } from "../../types/common.type";
import { twMerge } from "tailwind-merge";

const progressBarSizes: Record<TCommonElementSize, string> = {
  xs: "h-1 text-xs",
  sm: "h-2 test-sm",
  md: "h-4 text-base",
  lg: "h-6 text-lg",
};

const progressBarColor = {
  secondary: "bg-brand-secondary",
  error: "bg-error-dark",
  warning: "bg-warning-dark",
  success: "bg-success-dark",
  primary: "bg-brand-primary",
};

type ProgressBarVariant = keyof typeof progressBarColor;

type TProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: ProgressBarVariant;
  size?: TCommonElementSize;
  progress?: number;
  trackClassName?: string;
  progressBarClassName?: string;
};

const ProgressBar = ({
  size = defaultElementSize,
  variant = "primary",
  progress = 0,
  trackClassName,
  progressBarClassName,
  ...restProps
}: TProgressBarProps) => {
  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden rounded-full bg-secondary",
        progressBarSizes[size],
        trackClassName,
      )}
      {...restProps}
    >
      <div
        className={twMerge(
          "absolute h-full rounded-full transition-all duration-300",
          progressBarColor[variant],
          progressBarClassName,
        )}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
