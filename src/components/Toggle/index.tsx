import React, { useEffect, useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import FormElementWrapper from "../FormElementWrapper";
import HelperText from "../HelperText";
import { TCommonInputElementProps } from "../../types/common.type";
import { defaultElementSize } from "../../constants/common.constants";
import Label from "../Label";

export type ToggleProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "onChange"
> &
  TCommonInputElementProps & {
    checked?: boolean;
    onChange?: (change: { id: string; checked: boolean }) => void;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    inputClassName?: string;
  };
const Toggle = ({
  id,
  checked,
  onChange,
  disabled,
  readOnly,
  size = defaultElementSize,
  label,
  className,
  labelClassName,
  wrapperClassName,
  error,
  helper,
  helperClassName,
  required,
  inputClassName,
  ...rest
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onChange?.({ id: id || "", checked: !isChecked });
      setIsChecked(!isChecked);
    }
  };
  const handleClick = () => {
    if (disabled || readOnly) return;
    onChange?.({ id: id || "", checked: !isChecked });
    setIsChecked(!isChecked);
  };

  const toggleSize = {
    xs: "w-5 h-3",
    sm: "w-7 h-4",
    md: "w-9 h-5",
    lg: "w-11 h-6",
  };

  const innerId = id || useId();
  const elementSize = size || defaultElementSize;

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <FormElementWrapper className={wrapperClassName}>
      <div
        className={twMerge(
          "flex items-center justify-start",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className,
        )}
      >
        <div
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-label={typeof label === "string" ? label : undefined}
          aria-describedby={error ? `text-${innerId}` : undefined}
          id={innerId}
          className={twMerge(
            "flex cursor-pointer items-center rounded-full p-0.5 outline-offset-2",
            toggleSize[size],
            isChecked ? "bg-brand-primary" : "bg-tertiary-hover",
            error && "bg-error-dark",
            disabled && "cursor-not-allowed opacity-50",
            readOnly && "cursor-default",
            inputClassName,
          )}
          {...rest}
        >
          <div
            className={twMerge(
              "shadow-md aspect-square h-full transform rounded-full bg-primary transition-transform duration-300",
              isChecked ? "translate-x-full" : "translate-x-0",
            )}
          />
        </div>
        {label && (
          <Label
            htmlFor={innerId}
            size={elementSize}
            onClick={handleClick}
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
};
export default Toggle;
