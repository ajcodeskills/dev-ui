import { forwardRef, ForwardedRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import FormElementWrapper from "../FormElementWrapper";
import { TCommonInputElementProps } from "../../types/common.type";
import {
  selectionInputSizeClasses,
  defaultElementSize,
} from "../../constants/common.constants";
import Label from "../Label";
import HelperText from "../HelperText";

export type TSelectionInputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
> &
  TCommonInputElementProps & {
    inputClassName?: string;
  };

const SelectionInput = forwardRef(
  (
    {
      label,
      error,
      required,
      disabled,
      id,
      className,
      wrapperClassName,
      labelClassName,
      inputClassName,
      helperClassName,
      helper,
      type,
      size = defaultElementSize,
      checked,
      ...rest
    }: TSelectionInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const innerId = id || useId();
    const elementSize = size || defaultElementSize;
    return (
      <FormElementWrapper className={wrapperClassName}>
        <div
          className={twMerge(
            "flex w-max items-center justify-start",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
            className,
          )}
        >
          <input
            type={type}
            className={twMerge(
              "cursor-pointer rounded border border-primary bg-primary text-brand-primary accent-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed",
              selectionInputSizeClasses[elementSize],
              error && "border-error",
              disabled
                ? "border-secondary bg-tertiary"
                : "hover:border-brand-primary",
              inputClassName,
            )}
            id={innerId}
            checked={checked}
            ref={ref}
            required={required}
            aria-checked={checked}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-label={typeof label === "string" ? label : undefined}
            aria-describedby={error ? `text-${innerId}` : undefined}
            {...rest}
          />

          {label && (
            <Label
              htmlFor={innerId}
              size={elementSize}
              className={twMerge(
                "pl-2",
                disabled ? "cursor-not-allowed" : "cursor-pointer",
                labelClassName,
              )}
              error={Boolean(error)}
              required={required}
            >
              {label}
            </Label>
          )}
        </div>
        <HelperText
          id={`text-${innerId}`}
          error={Boolean(error)}
          className={helperClassName}
        >
          {error || helper}
        </HelperText>
      </FormElementWrapper>
    );
  },
);

SelectionInput.displayName = "SelectionInput";
export default SelectionInput;
