export interface TTabsItem {
  label: string;
  id: string;
  content: React.ReactNode;
}

export interface TTabsProps {
  children: React.ReactNode;
  kind?: "bar" | undefined;
  isDisabled?: boolean;
  className?: string;
  orientation?: "vertical" | "horizontal";
  tabs?: TTabsItem[];
  onTabChange?: (key: string | number) => void;
  defaultSelectedKey?: string;
  selectedKey?: string;
  disabledKeys?: string[];
  underline?: boolean;
  activateKeyboard?: boolean;
}
export interface TTabListComponent {
  children: React.ReactNode;
  className?: string;
}
export interface TTabPanel {
  children: React.ReactNode;
  id: string;
  className?: string;
}
export interface TTabItemComponent {
  children: React.ReactNode;
  id: string;
  className?: string;
}
