import React from "react";
import { useMergeRefs } from "@floating-ui/react";
import { useTooltipContext } from "./TooltipContext";

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild: boolean }
>(function TooltipTrigger({ children, asChild, ...props }, propRef) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setReference, propRef]);

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": context.open ? "open" : "closed",
      }),
    );
  }

  return (
    <div
      className="w-max"
      ref={ref}
      data-state={context.open ? "open" : "closed"}
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  );
});
