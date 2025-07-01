import {
  FloatingArrow,
  FloatingPortal,
  useDelayGroup,
  useDelayGroupContext,
  useTransitionStyles,
} from "@floating-ui/react";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useTooltipContext } from "./TooltipContext";

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  arrowClassName?: string;
  className?: string;
  withArrow?: boolean;
}

export const TooltipContent = ({
  arrowClassName,
  className,
  withArrow,
  children,
  ...props
}: TooltipContentProps) => {
  const state = useTooltipContext();
  const { isInstantPhase, currentId } = useDelayGroupContext();

  useDelayGroup(state.context, { id: state.context.floatingId });

  const instantDuration = 0;
  const duration = 250;

  const { isMounted, styles } = useTransitionStyles(state.context, {
    duration: isInstantPhase
      ? {
          open: instantDuration,
          // `id` is this component's `id`
          // `currentId` is the current group's `id`
          close:
            currentId === state.context.floatingId ? duration : instantDuration,
        }
      : duration,
    initial: {
      opacity: 0,
    },
  });

  if (!isMounted) return null;

  return (
    <FloatingPortal>
      <div
        ref={state.refs.setFloating}
        style={{
          ...state.floatingStyles,
          ...styles,
        }}
        {...state.getFloatingProps(props)}
        className={twMerge(
          "rounded bg-tooltip px-4 py-1.5 text-xs text-white",
          className,
        )}
      >
        {children}
        {withArrow && (
          <FloatingArrow
            context={state.context}
            ref={state.arrowRef}
            className={twMerge("fill-tooltip", arrowClassName)}
          />
        )}
      </div>
    </FloatingPortal>
  );
};
