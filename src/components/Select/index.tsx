import BaseSelect from "./BaseSelect";
import { AsyncProps } from "react-select/async";
import { components, GroupBase } from "react-select";
import { useId } from "react";
import Label from "../Label";
import { defaultElementSize } from "../../constants/common.constants";
import { TCommonInputElementProps } from "../../types/common.type";
import FormElementWrapper from "../FormElementWrapper";
import HelperText from "../HelperText";

type TSelectProps = {
  id?: string;
  strategy?: "default" | "fixed";
  required?: boolean;
  isCreatable?: boolean;
  disabled?: boolean;
} & TCommonInputElementProps;

const Select = <
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>({
  label,
  error,
  id,
  required,
  size = defaultElementSize,
  labelClassName,
  wrapperClassName,
  helperClassName,
  helper,
  disabled,
  ...rest
}: AsyncProps<OptionType, IsMulti, GroupType> & TSelectProps) => {
  const selectId = id || useId();
  const elementSize = size || defaultElementSize;
  return (
    <FormElementWrapper className={wrapperClassName}>
      {label && (
        <Label
          htmlFor={selectId}
          size={elementSize}
          className={labelClassName}
          error={Boolean(error)}
          required={required}
        >
          {label}
        </Label>
      )}
      <BaseSelect
        {...rest}
        id={selectId}
        error={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-disabled={disabled}
        aria-label={typeof label === "string" ? label : undefined}
        aria-describedby={error ? `text-${selectId}` : undefined}
        size={size}
        isDisabled={disabled}
      />
      <HelperText
        id={`text-${selectId}`}
        error={Boolean(error)}
        className={helperClassName}
      >
        {error || helper}
      </HelperText>
    </FormElementWrapper>
  );
};

Select.components = components;

export default Select;
