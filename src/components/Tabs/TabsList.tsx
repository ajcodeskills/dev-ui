import { TabList } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { TTabListComponent } from "./types";
import { useTabsContext } from "./TabContext";

const TabsList = ({ children, className }: TTabListComponent) => {
  const { underline } = useTabsContext();
  return (
    <TabList
      className={({ orientation }) =>
        twMerge(
          "flex w-auto border-primary",
          underline && (orientation === "horizontal" ? "border-b" : "border-r"),
          orientation === "horizontal"
            ? "flex-row gap-x-6"
            : "flex-col gap-y-6",
          className,
        )
      }
    >
      {children}
    </TabList>
  );
};
export default TabsList;
