import { getDefaultClassNames } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export const getDatePickerClasses = ({ inline }: { inline: boolean }) => {
  const defaultClassNames = getDefaultClassNames();
  const classNames = {
    root: twMerge(
      defaultClassNames.root,
      "p-4 rounded-md",
      inline ? "border border-secondary" : "",
    ),
    nav: twMerge(defaultClassNames.nav, "w-full h-fit justify-between"),
    month_caption: twMerge(
      defaultClassNames.month_caption,
      "justify-center text-base h-fit text-primary",
    ),
    chevron: twMerge(defaultClassNames.chevron, "fill-secondary"),
    day: twMerge(
      defaultClassNames.day,
      "text-primary rounded-md hover:bg-brand-primary-light text-sm",
    ),
    today: twMerge(defaultClassNames.today, "text-brand-primary font-bold"),
    selected: twMerge(
      defaultClassNames.selected,
      "bg-brand-primary !text-white hover:!bg-brand-primary hover:text-white font-medium",
    ),
    weekday: twMerge(defaultClassNames.weekday, "text-secondary text-sm"),
    month_grid: twMerge(
      defaultClassNames.month_grid,
      "gap-1 border-separate border-spacing-1",
    ),
  };

  return classNames;
};
