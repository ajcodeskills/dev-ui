import * as React from "react";
import { Placement } from "@floating-ui/react";
import { usePopover } from "./usePopover";
import { PopoverContext } from "./PopoverContext";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverContent } from "./PopoverContent";

export interface PopoverOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  content?: React.ReactNode;
  asChild?: boolean;
  trigger?: "click" | "hover";
  distance?: number;
  className?: string;
  closeOnInsideClick?: boolean;
  withArrow?: boolean;
  delay?: number | { open?: number; close?: number };
  lockScroll?: boolean;
  autoFocus?: boolean;
}

function Popover({
  children,
  modal = false,
  content,
  asChild,
  className,
  closeOnInsideClick = false,
  withArrow,
  delay,
  lockScroll,
  autoFocus = true,
  ...restOptions
}: {
  children: React.ReactNode;
} & PopoverOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });
  return (
    <PopoverContext.Provider value={popover}>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent
        className={className}
        withArrow={withArrow}
        lockScroll={lockScroll}
        delay={delay}
        autoFocus={autoFocus}
        closeOnInsideClick={closeOnInsideClick}
      >
        {content}
      </PopoverContent>
    </PopoverContext.Provider>
  );
}

export default Popover;
