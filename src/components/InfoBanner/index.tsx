import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import {
  BORDER_CLASSES,
  BACKGROUND_CLASSES,
  ICON_CLASSES,
  TEXT_CLASSES,
  GAP_CLASSES,
} from "./infoBanner.styles";
import { TCommonElementSize, TCommonVariant } from "../../types/common.type";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../../icons";
import {
  defaultElementSize,
  formElementPaddingSizeClasses,
  formElementTextSizeClasses,
  iconSizeClasses,
} from "../../constants/common.constants";

const ICONS: Record<TCommonVariant, IconType> = {
  primary: InfoIcon,
  secondary: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  success: SuccessIcon,
};

export type TInfoBannerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant?: TCommonVariant;
  content: React.ReactNode;
  className?: string;
  withIcon?: boolean;
  withBorder?: boolean;
  withFill?: boolean;
  size?: TCommonElementSize;
};
const InfoBanner = ({
  variant = "primary",
  content,
  className,
  withIcon = true,
  withBorder = true,
  withFill = true,
  size = defaultElementSize,
  ...rest
}: TInfoBannerProps) => {
  const borderClass = withBorder && BORDER_CLASSES[variant];
  const bgClass = withFill && BACKGROUND_CLASSES[variant];
  const iconClass = ICON_CLASSES[variant];
  const textClass = TEXT_CLASSES[variant];
  const BannerIcon = ICONS[variant];
  const gap = GAP_CLASSES[size];

  return (
    <div
      {...rest}
      className={twMerge(
        "flex items-center rounded-md",
        borderClass,
        bgClass,
        formElementPaddingSizeClasses[size],
        gap,
        className,
      )}
    >
      {withIcon && (
        <BannerIcon className={twMerge(iconClass, iconSizeClasses[size])} />
      )}
      <div
        className={twMerge(
          "flex flex-1",
          textClass,
          formElementTextSizeClasses[size],
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default InfoBanner;
