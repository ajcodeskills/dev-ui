import { FloatingDelayGroup, type Placement } from "@floating-ui/react";
import * as React from "react";
import { TooltipContext } from "./TooltipContext";
import { useTooltip } from "./useTooltip";
import { TooltipTrigger } from "./TooltipTrigger";
import { TooltipContent } from "./TooltipContent";

type TBaseTooltipProps = {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  followCursor?: boolean;
  onOpenChange?: (open: boolean) => void;
  distance?: number;
};

function BaseTooltip({
  children,
  ...options
}: { children: React.ReactNode } & TBaseTooltipProps) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

export interface TooltipProps extends TBaseTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  withArrow?: boolean;
  followCursor?: boolean;
  className?: string;
  arrowClassName?: string;
  delay?:
    | number
    | {
        open?: number;
        close?: number;
      };
  isDisabled?: boolean;
  asChild?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  delay = 100,
  withArrow,
  className,
  arrowClassName,
  isDisabled = false,
  asChild = false,
  ...props
}) => {
  if (isDisabled) {
    return children;
  }

  return (
    <FloatingDelayGroup delay={delay}>
      <BaseTooltip {...props}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent
          withArrow={withArrow}
          className={className}
          arrowClassName={arrowClassName}
        >
          {content}
        </TooltipContent>
      </BaseTooltip>
    </FloatingDelayGroup>
  );
};

export default Tooltip;
