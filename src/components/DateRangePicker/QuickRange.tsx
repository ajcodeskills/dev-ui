import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { TQuickRangeOption } from "./dateRangePicker.types";

type TQuickRangeProps = {
  options?: TQuickRangeOption[];
  value?: TQuickRangeOption;
  onChange: (schedule: TQuickRangeOption) => void;
};
const QuickRange = ({ options, value, onChange }: TQuickRangeProps) => {
  if (!options?.length) return null;

  return (
    <div className="flex w-32 flex-col gap-3">
      {options?.map((schedule) => (
        <Button
          className={twMerge(
            value?.id === schedule.id
              ? "border-brand-primary ring-brand-primary"
              : "border-tertiary ring-tertiary",
          )}
          size="sm"
          variant={value?.id === schedule.id ? "outlined" : "secondary"}
          onClick={() => onChange(schedule)}
          key={schedule.id}
        >
          {schedule.label}
        </Button>
      ))}
    </div>
  );
};

export default QuickRange;
