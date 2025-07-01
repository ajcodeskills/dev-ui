import { DayPickerProps } from "react-day-picker";
import { TCommonElementSize } from "../../types/common.type";

export type TDatePickerProps = DayPickerProps & {
  /** Expected date in ISO 8601 date format eg. 2024-12-02T00:00:00.000Z or 2024-12-02T00:00:00.000-12:00 */
  value?: string;
  wrapperClassName?: string;
  popoverClassName?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  formatterFn?: (date: string) => string;
  inline?: boolean;
  lockScroll?: boolean;
  inputPrefix?: React.ReactNode;
  inputSuffix?: React.ReactNode;
  size?: TCommonElementSize;
} & (
    | {
        onChange?: (date?: string) => void;
        clearable: true;
      }
    | {
        onChange?: (date: string) => void;
        clearable?: false;
      }
  );
