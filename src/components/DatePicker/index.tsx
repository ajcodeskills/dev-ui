import {
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useState,
  useCallback,
} from "react";
import { DayPicker, TZDate } from "react-day-picker";

import Input from "../Input";
import Popover from "../Popover";
import { CalendarIcon, CloseIcon } from "../../icons";
import { TDatePickerProps } from "./datePicker.types";
import { getDatePickerClasses } from "./datePicker.utils";
import {
  defaultElementSize,
  iconSizeClasses,
} from "../../constants/common.constants";
import { twMerge } from "tailwind-merge";

const DatePicker = ({
  value,
  onChange,
  label,
  wrapperClassName,
  popoverClassName,
  className,
  placeholder,
  error,
  required = false,
  timeZone,
  formatterFn = (date: string) => date,
  disabled,
  inline = false,
  captionLayout,
  lockScroll = true,
  clearable,
  inputPrefix = null,
  inputSuffix = null,
  size = defaultElementSize,
  ...props
}: TDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new TZDate(value, timeZone) : undefined,
  );

  const handleSelect = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onChange?.(date?.toISOString());
    },
    [onChange],
  );

  const handleClear = useCallback(
    (event: MouseEvent | KeyboardEvent) => {
      setSelectedDate(undefined);
      if (clearable) {
        onChange?.(undefined);
      }
      event.stopPropagation();
    },
    [clearable, onChange],
  );

  useEffect(() => {
    setSelectedDate(value ? new TZDate(value, timeZone) : undefined);
  }, [timeZone, value]);

  const defaultPrefix = (
    <div className="text-secondary">
      <CalendarIcon className={iconSizeClasses[size]} />
    </div>
  );
  const defaultSuffix = clearable && !!selectedDate && (
    <button
      className="cursor-pointer rounded text-secondary hover:bg-error hover:text-error"
      tabIndex={0}
      onClick={handleClear}
      onKeyDown={(e) => e.key === "Enter" && handleClear(e)}
    >
      <CloseIcon className={iconSizeClasses[size]} />
    </button>
  );

  const DatePickerComponent = (
    <DayPicker
      {...props}
      selected={selectedDate}
      onSelect={handleSelect}
      className={className}
      mode="single"
      classNames={getDatePickerClasses({ inline })}
      timeZone={timeZone}
      required
      disabled={disabled}
      disableNavigation={disabled === true}
      captionLayout={captionLayout}
      defaultMonth={selectedDate}
    />
  );

  if (inline) {
    return DatePickerComponent;
  }

  return (
    <Popover
      withArrow
      content={DatePickerComponent}
      lockScroll={lockScroll}
      className={twMerge("border border-secondary", popoverClassName)}
    >
      <Input
        label={label}
        error={error}
        value={selectedDate ? formatterFn(selectedDate?.toISOString()) : ""}
        placeholder={placeholder}
        readOnly
        required={required}
        disabled={disabled === true}
        prefix={inputPrefix ?? defaultPrefix}
        suffix={inputSuffix ?? defaultSuffix}
        size={size}
        wrapperClassName={twMerge("items-start", wrapperClassName)}
      />
    </Popover>
  );
};

export default DatePicker;
