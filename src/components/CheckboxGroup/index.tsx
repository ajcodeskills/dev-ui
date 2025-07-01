import FormElementWrapper from "../FormElementWrapper";
import { ChangeEvent, useId } from "react";
import HelperText from "../HelperText";
import Label from "../Label";
import Checkbox, { TCheckboxProps } from "../Checkbox";
import { TGroupInputOption } from "../../types/common.type";

export type TCheckboxGroupProps = Omit<TCheckboxProps, "onChange" | "value"> & {
  options: TGroupInputOption[];
  onChange?: (values: string[]) => void;
  value: string[];
};

const CheckboxGroup = ({
  id,
  value,
  options,
  className,
  wrapperClassName,
  error,
  helperClassName,
  label,
  labelClassName,
  helper,
  required,
  size,
  onChange,
  ...restProps
}: TCheckboxGroupProps) => {
  const innerId = id || useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: targetValue } = e.target;
    const updatedValues = [...value];
    if (checked) {
      updatedValues.push(targetValue);
    } else {
      updatedValues.splice(updatedValues.indexOf(targetValue), 1);
    }
    onChange?.(updatedValues);
  };

  return (
    <FormElementWrapper className={wrapperClassName}>
      {label && (
        <Label
          htmlFor={innerId}
          size={size}
          className={labelClassName}
          error={Boolean(error)}
          required={required}
        >
          {label}
        </Label>
      )}
      {options?.map((option) => {
        return (
          <Checkbox
            key={option.value}
            id={option.value}
            value={option.value}
            checked={value.includes(option.value)}
            label={option.label}
            className={option.className || className}
            error={Boolean(error)}
            size={size}
            onChange={handleChange}
            disabled={option.disabled}
            readOnly={option.readonly}
            {...restProps}
          />
        );
      })}
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

export default CheckboxGroup;
