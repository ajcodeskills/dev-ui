import React from "react";
import { twMerge } from "tailwind-merge";
import { RemoveScroll } from "react-remove-scroll";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import { usePopoverContext } from "./PopoverContext";

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement> & {
    closeOnInsideClick?: boolean;
    withArrow?: boolean;
    delay?: number | { open?: number; close?: number };
    lockScroll?: boolean;
  }
>(function PopoverContent(
  {
    style,
    className,
    closeOnInsideClick,
    withArrow,
    delay = 150,
    lockScroll = true,
    autoFocus = true,
    ...props
  },
  propRef,
) {
  const state = usePopoverContext();
  const ref = useMergeRefs([state.context.refs.setFloating, propRef]);
  const { styles } = useTransitionStyles(state.context, {
    duration: delay,
    initial: {
      opacity: 0,
    },
  });
  if (!state.context.open) return null;
  return (
    <FloatingPortal>
      <FloatingFocusManager
        context={state.context}
        modal={state.modal}
        disabled={!autoFocus}
      >
        <RemoveScroll enabled={lockScroll}>
          <div
            ref={ref}
            className={twMerge(
              "rounded-md bg-primary text-primary shadow-2",
              className,
            )}
            style={{ ...state.context.floatingStyles, ...style, ...styles }}
            {...state.getFloatingProps(props)}
            onClick={() => closeOnInsideClick && state.setOpen(false)}
          >
            {withArrow && (
              <FloatingArrow
                context={state.context}
                ref={state.arrowRef}
                fill="rgb(var(--primary-bg))"
                stroke="rgb(var(--secondary-border))"
                strokeWidth={1}
              />
            )}
            {props.children}
          </div>
        </RemoveScroll>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
