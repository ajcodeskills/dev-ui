import * as React from "react";
import {
  useFloating,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";

interface IDialogOptions {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  outsidePress?: boolean;
}

const useDialog = ({
  open,
  onOpenChange: setOpen,
  outsidePress = true,
}: IDialogOptions) => {
  const data = useFloating({
    open,
    onOpenChange: setOpen,
  });
  const context = data.context;

  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
    outsidePress,
  });
  const role = useRole(context);

  const interactions = useInteractions([dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
};

type ContextType = ReturnType<typeof useDialog> | null;

const DialogContext = React.createContext<ContextType>(null);

const useDialogContext = () => {
  const context = React.useContext(DialogContext);

  if (context == null) {
    throw new Error("Dialog components must be wrapped in <Dialog />");
  }

  return context;
};

export { useDialog, IDialogOptions, useDialogContext, DialogContext };
