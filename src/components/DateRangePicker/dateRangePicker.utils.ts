import { getDefaultClassNames } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export const getRangePickerClasses = () => {
  const defaultClassNames = getDefaultClassNames();
  const classNames = {
    root: twMerge(defaultClassNames.root, "flex-1"),
    nav: twMerge(defaultClassNames.nav, "w-full h-fit justify-between p-4"),
    month_caption: twMerge(
      defaultClassNames.month_caption,
      "justify-center text-base font-semibold h-fit text-primary",
    ),
    chevron: twMerge(defaultClassNames.chevron, "fill-secondary"),
    day: twMerge(
      defaultClassNames.day,
      "text-primary rounded-md hover:bg-brand-primary-light text-sm m-1",
    ),
    today: twMerge(defaultClassNames.today, "text-brand-primary !font-bold"),
    selected: twMerge(
      defaultClassNames.selected,
      "bg-brand-primary text-white hover:!bg-brand-primary hover:text-white font-medium",
    ),
    weekday: twMerge(defaultClassNames.weekday, "text-secondary text-sm"),
    range_middle: twMerge(
      defaultClassNames.range_middle,
      "bg-brand-primary-light hover:!bg-brand-primary-medium",
    ),
    month_grid: twMerge(
      defaultClassNames.month_grid,
      "gap-1 border-separate border-spacing-1",
    ),
    month: twMerge(
      defaultClassNames.month,
      "border border-secondary rounded-md p-4",
    ),
    months: twMerge(defaultClassNames.months, "gap-4"),
  };

  return classNames;
};
