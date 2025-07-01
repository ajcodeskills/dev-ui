import { twMerge } from "tailwind-merge";
import React, { forwardRef, ForwardedRef, useId } from "react";
import HelperText from "../HelperText";
import FormElementWrapper from "../FormElementWrapper";
import { TCommonInputElementProps } from "../../types/common.type";
import Label from "../Label";
import {
  formElementPlaceHolderTextSizeClasses,
  formElementPaddingSizeClasses,
  formElementTextSizeClasses,
  defaultElementSize,
} from "../../constants/common.constants";

type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size"
> &
  TCommonInputElementProps & {
    inputClassName?: string;
    resizable?: boolean;
  };

const TextArea = forwardRef(
  (
    {
      label,
      error,
      className,
      id,
      disabled,
      value,
      resizable,
      size = defaultElementSize,
      required,
      inputClassName,
      wrapperClassName,
      labelClassName,
      helper,
      rows = 3,
      ...rest
    }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const textAreaId = id || useId();
    const elementSize = size || defaultElementSize;
    return (
      <FormElementWrapper className={wrapperClassName}>
        {label && (
          <Label
            htmlFor={textAreaId}
            size={size}
            className={labelClassName}
            error={Boolean(error)}
            required={required}
          >
            {label}
          </Label>
        )}

        <div
          className={twMerge(
            "relative flex w-full items-center justify-start gap-1",
            className,
          )}
        >
          <textarea
            id={textAreaId}
            disabled={disabled}
            ref={ref}
            rows={rows}
            value={value}
            {...rest}
            className={twMerge(
              "styled-scrollbar w-full rounded-lg border border-primary bg-primary text-primary outline-none placeholder:text-secondary focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-medium",
              inputClassName,
              !!error && "border-error focus:border-error focus:ring-error/30",
              disabled && "cursor-not-allowed border-secondary bg-secondary",
              !resizable && "resize-none",
              formElementTextSizeClasses[elementSize],
              formElementPlaceHolderTextSizeClasses[elementSize],
              formElementPaddingSizeClasses[elementSize],
              inputClassName,
            )}
            aria-invalid={Boolean(error)}
            aria-label={typeof label === "string" ? label : undefined}
            aria-describedby={error ? `text-${textAreaId}` : undefined}
          />
        </div>
        <div className="flex items-start justify-between">
          <HelperText id={`text-${textAreaId}`} error={Boolean(error)}>
            {error || helper}
          </HelperText>
          {!!rest?.maxLength && (
            <p className="w-fit whitespace-nowrap text-right text-xs text-tertiary">
              {value?.toString().length || 0} / {rest.maxLength}
            </p>
          )}
        </div>
      </FormElementWrapper>
    );
  },
);

TextArea.displayName = "TextArea";
export default TextArea;
