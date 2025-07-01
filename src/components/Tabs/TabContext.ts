import { createContext, useContext } from "react";

export const TabContext = createContext({
  isDisabled: false,
  orientation: "horizontal",
  underline: false,
});

export const useTabsContext = () => useContext(TabContext);
