import { DayPickerProps, Matcher } from "react-day-picker";
import { TCommonElementSize } from "../../types/common.type";

export type TDateRange = {
  from?: string;
  to?: string;
};

export type TDateRangePickerProps = DayPickerProps & {
  /** Expected date in ISO 8601 date format eg. 2024-12-02T00:00:00.000Z or 2024-12-02T00:00:00.000-12:00 */
  value?: TDateRange;
  dateFormat?: string;
  wrapperClassName?: string;
  popoverClassName?: string;
  inline?: boolean;
  label?: string;
  error?: string;
  placeholder?: string;
  className?: string;
  quickRangeOptions?: TQuickRangeOption[];
  formatterFn?: (date: string) => string;
  disabled?: Matcher;
  fixedDays?: number;
  lockScroll?: boolean;
  inputPrefix?: React.ReactNode;
  inputSuffix?: React.ReactNode;
  size?: TCommonElementSize;
} & (
    | {
        onChange?: (range?: TDateRange) => void;
        clearable: true;
      }
    | {
        onChange?: (range: TDateRange) => void;
        clearable?: false;
      }
  );

export type TQuickRangeOption = {
  id: string;
  label: string;
  from: string;
  to: string;
};
