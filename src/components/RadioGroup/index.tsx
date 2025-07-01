import Radio, { TRadioProps } from "../Radio";
import FormElementWrapper from "../FormElementWrapper";
import { useId } from "react";
import HelperText from "../HelperText";
import Label from "../Label";
import { TGroupInputOption } from "../../types/common.type";
export type TRadioGroupProps = TRadioProps & {
  options?: TGroupInputOption[];
};

const RadioGroup = ({
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
  ...restProps
}: TRadioGroupProps) => {
  const innerId = id || useId();
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
      {options?.map((option) => (
        <Radio
          key={option.value}
          id={option.value}
          value={option.value}
          checked={value ? value === option.value : undefined}
          label={option.label}
          className={option.className || className}
          error={Boolean(error)}
          size={size}
          disabled={option.disabled}
          {...restProps}
        />
      ))}
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

export default RadioGroup;
