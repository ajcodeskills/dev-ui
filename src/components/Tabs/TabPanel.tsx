import { TabPanel } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { TTabPanel } from "./types";

const TabPanelComponent = ({ children, id, className }: TTabPanel) => {
  return (
    <TabPanel id={id} className={twMerge("w-full p-2", className)}>
      {children}
    </TabPanel>
  );
};
export default TabPanelComponent;
