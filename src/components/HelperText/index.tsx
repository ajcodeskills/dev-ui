import React from "react";
import { twMerge } from "tailwind-merge";

export type THelperTextProps = React.DetailedHTMLProps<
  React.ParamHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  error?: boolean;
};

const HelperText = ({
  children,
  className,
  error,
  ...restProps
}: THelperTextProps) => {
  return (
    <p
      className={twMerge(
        "text-left text-xs text-secondary",
        error && "text-error",
        className,
      )}
      {...restProps}
    >
      {children}
    </p>
  );
};

export default HelperText;
