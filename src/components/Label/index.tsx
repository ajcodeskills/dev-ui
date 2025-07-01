import React from "react";
import { TCommonElementSize } from "../../types/common.type";
import { twMerge } from "tailwind-merge";
import {
  defaultElementSize,
  formElementTextSizeClasses,
} from "../../constants/common.constants";

export type TLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  size?: TCommonElementSize;
  error?: boolean;
  required?: boolean;
};

const Label = ({
  children,
  className,
  size,
  error,
  required,
  ...restProps
}: TLabelProps) => {
  const labelSizeClass = formElementTextSizeClasses[size || defaultElementSize];

  return (
    <label
      className={twMerge(
        "text-primary",
        labelSizeClass,
        required &&
          'after:ml-0.5 after:text-xs after:text-error after:content-["*"]',
        error && "text-error",
        className,
      )}
      {...restProps}
    >
      {children}
    </label>
  );
};

export default Label;
