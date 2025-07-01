import { twMerge } from "tailwind-merge";
import {
  chipBackground,
  chipBorder,
  chipSizes,
  chipTextColor,
  chipTextSizes,
  dotBackgroundClass,
  dotSizeClass,
} from "./chip.style";
import { TCommonElementSize, TCommonVariant } from "../../types/common.type";
import { defaultElementSize } from "../../constants/common.constants";

export type TChipProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  children?: React.ReactNode;
  variant?: TCommonVariant;
  type?: "badge" | "chip";
  size?: TCommonElementSize;
  className?: string;
  withDot?: boolean;
  withBorder?: boolean;
  withFill?: boolean;
};

const Chip = ({
  children,
  size = defaultElementSize,
  variant = "primary",
  type = "chip",
  className,
  withDot = true,
  withBorder = true,
  withFill = true,
  ...rest
}: TChipProps) => {
  return (
    <div
      className={twMerge(
        "flex w-fit items-center gap-2 border",
        chipSizes[size],
        type === "chip" && "rounded-full",
        withFill ? chipBackground[variant] : "bg-transparent",
        withBorder ? "border" : "border-none",
        chipBorder[variant],
        className,
      )}
      {...rest}
    >
      {withDot && (
        <div
          className={twMerge(
            "rounded-full",
            dotSizeClass[size],
            dotBackgroundClass[variant],
          )}
        />
      )}
      <span className={twMerge(chipTextSizes[size], chipTextColor[variant])}>
        {children}
      </span>
    </div>
  );
};

export default Chip;
