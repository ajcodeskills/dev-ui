import * as React from "react";
import {
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useTransitionStyles,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";
import {
  useDialog,
  IDialogOptions,
  useDialogContext,
  DialogContext,
} from "./useModal";

export type TTransitionStyle =
  | "fromTop"
  | "fromBottom"
  | "fromRight"
  | "fromLeft"
  | "default";

type TDialogProps = {
  children: React.ReactNode;
} & IDialogOptions;

type TDialogContentProps = React.HTMLProps<HTMLDivElement> & {
  overlay: keyof typeof overlayClass;
  transitionStyle: TTransitionStyle;
  lockScroll?: boolean;
  children: React.ReactNode;
  duration: number;
};

const overlayClass = {
  dark: "bg-overlay-dark",
  light: "bg-overlay-light",
  medium: "bg-overlay",
  blur: "backdrop-blur-sm bg-opacity-50",
};

const transitionStyleClass = {
  fromTop: {
    initial: { transform: "translateY(-100%)" },
    open: {
      transform: "translateY(0)",
    },
  },
  fromBottom: {
    initial: { transform: "translateY(100%)" },
    open: {
      transform: "translateY(0)",
    },
  },
  fromRight: {
    initial: { transform: "translateX(100%)" },
    open: {
      transform: "translateX(0)",
    },
  },
  fromLeft: {
    initial: { transform: "translateX(-100%)" },
    open: {
      transform: "translateX(0)",
    },
  },
  default: {
    initial: { transform: "scale(0)" },
    open: {
      transform: "scale(1)",
    },
  },
} as const;

const Dialog = ({ children, ...options }: TDialogProps) => {
  const dialog = useDialog(options);
  return (
    <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
  );
};

const DialogContent = React.forwardRef<HTMLDivElement, TDialogContentProps>(
  (props, propRef) => {
    const {
      transitionStyle,
      lockScroll = false,
      overlay,
      children,
      duration,
    } = props;
    const { context: floatingContext, ...context } = useDialogContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    const { styles } = useTransitionStyles(floatingContext, {
      duration,
      ...transitionStyleClass[transitionStyle],
    });

    if (!floatingContext.open) return null;
    return (
      <FloatingPortal>
        <FloatingOverlay
          className={twMerge(
            "z-50 grid place-items-center",
            overlayClass[overlay],
          )}
          lockScroll={lockScroll}
        >
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              {...context.getFloatingProps(props)}
              style={{
                ...styles,
              }}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    );
  },
);

DialogContent.displayName = "DialogContent";

export { Dialog, DialogContent };
