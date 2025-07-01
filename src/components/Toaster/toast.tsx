import toast, {
  Renderable,
  ToastOptions,
  ValueOrFunction,
} from "react-hot-toast";
import { WarningIcon } from "../../icons";

const defaultErrorMsg = "Something went wrong.";

const showToast = (
  jsx: JSX.Element | ((arg?: ToastOptions) => JSX.Element),
  options?: ToastOptions,
) => toast(jsx, options);

showToast.success = (
  message?: string | JSX.Element,
  options?: ToastOptions,
): void => {
  toast.success(message || "", options);
};

showToast.custom = (
  jsx: JSX.Element | ((arg?: ToastOptions) => JSX.Element),
  options?: ToastOptions,
) => {
  toast.custom(jsx, options);
};

showToast.error = (
  message?: string | JSX.Element,
  options?: ToastOptions,
): void => {
  toast.error(message || defaultErrorMsg, options);
};

showToast.warn = (
  message?: string | JSX.Element,
  options?: ToastOptions,
): void => {
  toast.success(message || defaultErrorMsg, {
    ...options,
    style: {
      backgroundColor: "rgb(var(--warning-bg-dark))",
    },
    icon: <WarningIcon className="h-6 w-6 fill-white" />,
  });
};

showToast.promise = (
  promise: Promise<unknown>,
  options?: ToastOptions & {
    loading?: string | JSX.Element;
    success?: string | JSX.Element;
    error?: ValueOrFunction<Renderable, string> | JSX.Element;
  },
) => {
  toast.promise(
    promise,
    {
      loading: options?.loading ?? "Loading...",
      success: options?.success ?? "Success",
      error: options?.error ?? defaultErrorMsg,
    },
    { ...options, duration: undefined } as ToastOptions,
  );
};

// To dismiss toast manually pass id to dismiss specific toast, else all toasts will be dismissed
// this will remove with animation
showToast.dismiss = (id?: string) => {
  toast.dismiss(id);
};
// To remove toast manually pass id to remove specific toast, else all toasts will be removed
// this will remove instantly
showToast.remove = (id?: string) => {
  toast.remove(id);
};

export { showToast };
