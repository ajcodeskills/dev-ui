import { Tab } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { TTabItemComponent } from "./types";
import { useTabsContext } from "./TabContext";

const TabItem = ({ children, id, className }: TTabItemComponent) => {
  const { orientation } = useTabsContext();
  return (
    <Tab
      className={({ isSelected, isDisabled }) =>
        twMerge(
          "w-fit cursor-pointer whitespace-nowrap border-transparent text-start font-medium text-secondary outline-none transition hover:border-primary-hover hover:text-secondary-hover",
          isSelected &&
            "border-brand-primary font-medium text-brand-primary hover:border-brand-primary-hover hover:text-brand-primary-hover",
          orientation === "horizontal" ? "border-b-2 py-1" : "border-r-2 px-1",
          isDisabled &&
            "cursor-not-allowed border-none text-tertiary hover:text-tertiary",
          className,
        )
      }
      id={id}
    >
      {children}
    </Tab>
  );
};

export default TabItem;
