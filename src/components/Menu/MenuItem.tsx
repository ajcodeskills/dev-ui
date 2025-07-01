import React from "react";
import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import { MenuContext } from "./MenuContext";
import { twMerge } from "tailwind-merge";

interface MenuItemProps {
  label: React.ReactNode;
  disabled?: boolean;
}

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, ...props }, forwardedRef) => {
  const menu = React.useContext(MenuContext);
  const item = useListItem();
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      role="menuitem"
      className={twMerge(
        "outline-none focus-within:outline-none focus:outline-none",
        "flex w-full min-w-max items-center justify-between bg-primary px-3 py-1 text-left text-sm text-primary hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50",
        isActive && "bg-primary-hover",
      )}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit("click");
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      })}
    >
      {label}
    </button>
  );
});

MenuItem.displayName = "MenuItem";
