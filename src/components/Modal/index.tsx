import { TbX } from "react-icons/tb";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Dialog, DialogContent, TTransitionStyle } from "./BaseModal";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { TCommonElementSize } from "../../types/common.type";
import { defaultElementSize } from "../../constants/common.constants";

type TSize = TCommonElementSize | "xl" | "2xl" | "screen";
const sizeClass: Record<TSize, string> = {
  xs: "min-h-auto min-w-auto",
  sm: "min-h-52 min-w-80",
  md: "min-h-[20rem] min-w-[32rem]",
  lg: "min-h-[25rem] min-w-[44rem]",
  xl: "min-h-[32rem] min-w-[56rem]",
  "2xl": "min-h-[38rem] min-w-[69rem]",
  screen: "min-h-[90%] min-w-[90%]",
};

type TModalProps = {
  isOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
  overlay?: "dark" | "light" | "medium";
  size?: TSize;
  closeButtonClass?: string;
  transitionStyle?: TTransitionStyle;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  duration?: number;
  clickOutsideToClose?: boolean;
  showCloseIcon?: boolean;
  onClose?: () => void;
};

const Modal = ({
  isOpen = false,
  onClose = () => {},
  clickOutsideToClose,
  children,
  className,
  showCloseIcon,
  overlay = "dark",
  size = defaultElementSize,
  closeButtonClass,
  transitionStyle = "default",
  header,
  footer,
  duration = 200,
}: TModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
      outsidePress={clickOutsideToClose}
    >
      <DialogContent
        overlay={overlay}
        transitionStyle={transitionStyle}
        duration={duration}
        className={twMerge(
          "max-w-screen relative flex max-h-screen flex-col overflow-hidden rounded bg-primary p-4 text-primary",
          sizeClass[size],
          className,
        )}
      >
        {header && header}
        {children}
        {showCloseIcon && (
          <button
            type="button"
            className={twMerge(
              "absolute right-4 top-4 cursor-pointer rounded-full p-0.5 text-secondary hover:bg-primary-hover hover:text-secondary-hover",
              closeButtonClass,
            )}
            onClick={onClose}
          >
            <TbX className="h-5 w-5" />
          </button>
        )}
        {footer && footer}
      </DialogContent>
    </Dialog>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
