import { Tabs } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import TabsList from "./TabsList";
import TabItem from "./TabItem";
import TabPanelComponent from "./TabPanel";
import { TTabsProps } from "./types";
import { TabContext } from "./TabContext";
export type { TTabsProps };

const TabsComponent = ({
  children,
  className,
  isDisabled = false,
  orientation = "horizontal",
  onTabChange,
  defaultSelectedKey,
  selectedKey,
  disabledKeys,
  underline = true,
  activateKeyboard = true,
}: TTabsProps) => {
  return (
    <Tabs
      className={twMerge(
        "flex w-full bg-primary p-2 text-sm text-primary",
        orientation === "horizontal" ? "flex-col" : "flex-row",
        className,
      )}
      isDisabled={isDisabled}
      orientation={orientation}
      onSelectionChange={onTabChange}
      keyboardActivation={activateKeyboard ? "automatic" : "manual"}
      defaultSelectedKey={defaultSelectedKey}
      selectedKey={selectedKey}
      disabledKeys={disabledKeys}
    >
      <TabContext.Provider value={{ orientation, isDisabled, underline }}>
        {children}
      </TabContext.Provider>
    </Tabs>
  );
};

TabsComponent.TabsList = TabsList;
TabsComponent.Tab = TabItem;
TabsComponent.TabPanel = TabPanelComponent;
export default TabsComponent;
