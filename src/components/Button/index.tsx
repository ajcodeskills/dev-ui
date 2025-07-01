import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";
import ButtonLoader from "./ButtonLoader";
import { TCommonElementSize } from "../../types/common.type";
import {
  defaultElementSize,
  formElementPaddingSizeClasses,
  formElementTextSizeClasses,
  iconSizeClasses,
} from "../../constants/common.constants";

type TVariant =
  | "primary"
  | "secondary"
  | "error"
  | "outlined"
  | "ghost"
  | "link";
type TButtonBaseProps = {
  variant?: TVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  error?: boolean;
  size?: TCommonElementSize;
  asIcon?: boolean;
};

type AsProp<C extends React.ElementType> = {
  asChild?: boolean;
  as?: C;
};

type TPolymorphicComponentProp<
  C extends React.ElementType,
  Props = unknown,
> = Props & React.ComponentPropsWithoutRef<C> & AsProp<C>;

type TButtonProps<C extends React.ElementType = "button"> =
  TPolymorphicComponentProp<C, TButtonBaseProps>;

const variantClasses: Record<TVariant, string> = {
  primary:
    "bg-brand-primary text-brand-primary-text hover:bg-brand-primary-hover",
  secondary:
    "bg-transparent text-primary hover:text-primary-hover ring-1 ring-inset ring-secondary hover:ring-secondary-hover",
  outlined:
    "bg-transparent text-brand-primary hover:text-brand-primary-hover ring-1 ring-inset ring-brand-primary hover:ring-brand-primary-hover",
  error: "bg-red text text-brand-primary-text",
  ghost: "bg-transparent text-brand-primary hover:text-brand-primary-hover",
  link: "bg-transparent text-brand-primary hover:text-brand-primary-hover underline-offset-4 hover:underline",
};

const paddingClasses = {
  ...formElementPaddingSizeClasses,
  xs: "py-1.5 px-1.5",
};

const Button = ({
  children,
  className,
  disabled,
  variant = "primary",
  rightIcon,
  leftIcon,
  loading,
  error,
  size = defaultElementSize,
  asChild = false,
  as,
  asIcon = false,
  ...rest
}: TButtonProps) => {
  const resolvedClasses = twMerge(
    "inline-flex items-center justify-center transition-all active:scale-95 disabled:scale-100 disabled:cursor-not-allowed",
    "rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
    paddingClasses[size],
    formElementTextSizeClasses[size],
    variantClasses[variant],
    disabled && "opacity-50",
    error && "animate-shake",
    className,
  );

  const Comp = asChild ? Slot : as || "button";

  const renderContent = () => {
    if (asIcon) {
      const iconClass = {
        ...iconSizeClasses,
        xs: "w-4 h-4",
      };

      return (
        <Slot className={twMerge(iconClass[size])}>
          {loading ? <ButtonLoader size={size} /> : children}
        </Slot>
      );
    }

    return (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {loading && <ButtonLoader size={size} className="ml-2" />}
      </>
    );
  };

  return (
    <Comp
      aria-label={typeof children === "string" ? children : undefined}
      aria-disabled={disabled || Boolean(loading)}
      {...rest}
      className={resolvedClasses}
      disabled={disabled || Boolean(loading)}
    >
      {asChild ? children : renderContent()}
    </Comp>
  );
};

export default Button;
