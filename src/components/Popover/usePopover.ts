import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useHover,
  safePolygon,
  arrow,
} from "@floating-ui/react";
import React from "react";
import { PopoverOptions } from ".";

export function usePopover({
  placement = "bottom",
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  initialOpen = false,
  trigger = "click",
  distance = 5,
}: PopoverOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;
  const arrowRef = React.useRef(null);
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(distance),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5,
      }),
      shift({
        padding: 5,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null && trigger === "click",
  });
  const hover = useHover(context, {
    enabled: controlledOpen == null && trigger === "hover",
    handleClose: safePolygon({
      buffer: 100,
      requireIntent: false,
    }),
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role, hover]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
      modal,
    }),
    [open, setOpen, interactions, data, modal],
  );
}
