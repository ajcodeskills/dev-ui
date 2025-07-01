import { twMerge } from "tailwind-merge";
import React, { forwardRef, ForwardedRef, useId } from "react";
import HelperText from "../HelperText";
import Label from "../Label";
import { TCommonInputElementProps } from "../../types/common.type";
import {
  formElementPlaceHolderTextSizeClasses,
  formElementPaddingSizeClasses,
  formElementTextSizeClasses,
  formElementHeightSizeClasses,
  defaultElementSize,
} from "../../constants/common.constants";
import FormElementWrapper from "../FormElementWrapper";

export type TInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "prefix" | "size"
> &
  TCommonInputElementProps & {
    suffix?: React.ReactNode;
    prefix?: string | React.ReactNode;
    inputClassName?: string;
  };

const Input = forwardRef(
  (
    {
      label,
      error,
      className,
      id,
      suffix,
      prefix,
      disabled,
      required,
      size = defaultElementSize,
      wrapperClassName,
      inputClassName,
      labelClassName,
      helperClassName,
      helper,
      ...rest
    }: TInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = id || useId();
    const elementSize = size || defaultElementSize;

    return (
      <FormElementWrapper className={wrapperClassName}>
        {label && (
          <Label
            htmlFor={inputId}
            size={elementSize}
            className={labelClassName}
            error={Boolean(error)}
            required={required}
          >
            {label}
          </Label>
        )}
        <div
          className={twMerge(
            "flex w-full items-center justify-start gap-2 rounded-lg border border-primary bg-primary focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary-medium",
            !!error &&
              "border-error focus-within:border-error focus-within:ring-error/30",
            disabled && "cursor-not-allowed border-secondary bg-secondary",
            formElementPaddingSizeClasses[elementSize],
            formElementHeightSizeClasses[elementSize],
            className,
          )}
        >
          {prefix}
          <input
            id={inputId}
            disabled={disabled}
            {...rest}
            ref={ref}
            className={twMerge(
              "w-full border-none text-primary accent-brand-primary outline-none placeholder:text-secondary disabled:cursor-not-allowed",
              formElementTextSizeClasses[elementSize],
              formElementPlaceHolderTextSizeClasses[elementSize],
              inputClassName,
            )}
            aria-invalid={Boolean(error)}
            aria-label={typeof label === "string" ? label : undefined}
            aria-describedby={error ? `text-${inputId}` : undefined}
          />
          {suffix}
        </div>
        <HelperText
          id={`text-${inputId}`}
          error={Boolean(error)}
          className={helperClassName}
        >
          {error || helper}
        </HelperText>
      </FormElementWrapper>
    );
  },
);

Input.displayName = "Input";
export default Input;
