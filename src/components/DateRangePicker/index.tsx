import {
  useCallback,
  useState,
  MouseEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import { DateRange, DayPicker, TZDate } from "react-day-picker";
import { twMerge } from "tailwind-merge";

import Input from "../Input";
import Popover from "../Popover";
import QuickRange from "./QuickRange";
import { CalendarIcon, CloseIcon } from "../../icons";
import { getRangePickerClasses } from "./dateRangePicker.utils";
import {
  TDateRangePickerProps,
  TQuickRangeOption,
} from "./dateRangePicker.types";
import {
  defaultElementSize,
  iconSizeClasses,
} from "../../constants/common.constants";

const DateRangePicker = ({
  value,
  onChange,
  wrapperClassName,
  popoverClassName,
  label,
  error,
  placeholder,
  className,
  disabled,
  timeZone,
  captionLayout,
  numberOfMonths = 2,
  quickRangeOptions = [],
  inline = false,
  clearable = false,
  fixedDays,
  formatterFn = (date: string) => date,
  lockScroll,
  inputPrefix = null,
  inputSuffix = null,
  size = defaultElementSize,
  ...props
}: TDateRangePickerProps) => {
  const [range, setRange] = useState<DateRange>({
    from: value?.from ? new TZDate(value?.from, timeZone) : undefined,
    to: value?.to ? new TZDate(value?.to, timeZone) : undefined,
  });
  const [quickRange, setQuickRange] = useState<TQuickRangeOption | undefined>();
  const [defaultMonth, setDefaultMonth] = useState<Date | undefined>();

  const isValidRange = range?.from || range?.to;
  const inputText = isValidRange
    ? `${range?.from ? formatterFn(range.from?.toISOString()) : ""} - ${range?.to ? formatterFn(range.to.toISOString()) : ""}`
    : "";

  const handleUpdate = useCallback(
    (newRange?: DateRange) => {
      if (fixedDays && newRange?.to && newRange?.from) {
        let from;
        if (range.from && newRange.from.valueOf() < range.from.valueOf()) {
          from = newRange.from;
        } else {
          from = newRange.to;
        }
        const to = new TZDate(from, timeZone);
        const currDate = from.getUTCDate();
        to.setUTCDate(currDate + fixedDays - 1);
        setRange({ from, to });
        onChange?.({ from: from?.toISOString(), to: to?.toISOString() });
        setDefaultMonth(from);
      } else {
        const from = newRange?.from || undefined;
        const to =
          newRange?.from === newRange?.to
            ? undefined
            : newRange?.to || undefined;
        setRange({ from, to });
        onChange?.({ from: from?.toISOString(), to: to?.toISOString() });
        setDefaultMonth(newRange?.from);
      }
      setQuickRange(undefined);
    },
    [fixedDays, range.from, timeZone, onChange],
  );

  const handleQuickRangeChange = useCallback(
    (range: TQuickRangeOption) => {
      setQuickRange(range);
      const newRange = {
        from: new TZDate(range.from, timeZone),
        to: new TZDate(range.to, timeZone),
      };
      setRange(newRange);
      onChange?.({
        from: newRange.from?.toISOString(),
        to: newRange.to?.toISOString(),
      });
      setDefaultMonth(newRange?.from);
    },
    [onChange, timeZone],
  );

  const handleClear = useCallback(
    (event: MouseEvent | KeyboardEvent) => {
      handleUpdate({ from: undefined, to: undefined });
      setQuickRange(undefined);
      event.stopPropagation();
    },
    [handleUpdate],
  );

  useEffect(() => {
    setRange({
      from: value?.from ? new TZDate(value?.from, timeZone) : undefined,
      to: value?.to ? new TZDate(value?.to, timeZone) : undefined,
    });
    setDefaultMonth(
      value?.from ? new TZDate(value?.from, timeZone) : undefined,
    );
  }, [timeZone, value]);

  const defaultPrefix = (
    <div className="text-secondary">
      <CalendarIcon className={iconSizeClasses[size]} />
    </div>
  );
  const defaultSuffix = clearable && isValidRange && (
    <button
      className="cursor-pointer rounded text-secondary hover:bg-error hover:text-error"
      tabIndex={0}
      onClick={handleClear}
      onKeyDown={(e) => e.key === "Enter" && handleClear(e)}
    >
      <CloseIcon className={iconSizeClasses[size]} />
    </button>
  );

  const DateRangePicker = (
    <div className={twMerge("flex w-fit gap-4 rounded-md p-4")}>
      <QuickRange
        value={quickRange}
        onChange={handleQuickRangeChange}
        options={quickRangeOptions}
      />
      <DayPicker
        {...props}
        selected={range}
        onSelect={handleUpdate}
        className={className}
        mode="range"
        classNames={getRangePickerClasses()}
        timeZone={timeZone}
        disabled={disabled}
        disableNavigation={disabled === true}
        captionLayout={captionLayout}
        numberOfMonths={numberOfMonths}
        defaultMonth={defaultMonth}
        month={defaultMonth}
        onMonthChange={setDefaultMonth}
      />
    </div>
  );

  if (inline) {
    return DateRangePicker;
  }

  return (
    <Popover
      withArrow
      content={DateRangePicker}
      lockScroll={lockScroll}
      className={twMerge("border border-secondary", popoverClassName)}
    >
      <Input
        label={label}
        error={error}
        value={inputText}
        placeholder={placeholder}
        readOnly
        required={props.required}
        disabled={disabled === true}
        prefix={inputPrefix ?? defaultPrefix}
        suffix={inputSuffix ?? defaultSuffix}
        size={size}
        wrapperClassName={twMerge("items-start", wrapperClassName)}
      />
    </Popover>
  );
};

export default DateRangePicker;
