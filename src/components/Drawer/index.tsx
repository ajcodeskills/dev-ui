import { Dialog, Transition } from "@headlessui/react";
import { TbX } from "react-icons/tb";

import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { positionClass } from "./constants";
import DrawerHeader from "./DrawerHeader";
import DrawerFooter from "./DrawerFooter";
import DrawerBody from "./DrawerBody";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  clickOutsideToClose?: boolean;
  children: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  overlay?: "dark" | "light" | "medium";
}

const Drawer: React.FC<DrawerProps> & {
  Header: typeof DrawerHeader;
  Body: typeof DrawerBody;
  Footer: typeof DrawerFooter;
  Title: typeof Dialog.Title;
} = ({
  isOpen,
  onClose,
  clickOutsideToClose,
  children,
  className,
  position = "right",
  header,
  footer,
  title,
  overlay = "dark",
}) => {
  const handleClose = () => {
    if (clickOutsideToClose) {
      onClose();
    }
  };
  const overlayClass = {
    dark: "bg-overlay-dark",
    light: "bg-overlay-light",
    medium: "bg-overlay",
  };
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={twMerge(
                " fixed inset-0 transition-opacity",
                overlayClass[overlay],
              )}
            />
          </Transition.Child>
          <div
            className={twMerge(
              "fixed flex max-w-full",
              positionClass[position]?.position,
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              {...positionClass[position]?.transition}
            >
              <Dialog.Panel>
                <div
                  className={twMerge(
                    "flex h-full w-full flex-col bg-secondary shadow-3",
                    className,
                  )}
                >
                  {header ? (
                    header
                  ) : (
                    <DrawerHeader>
                      <div className="flex items-center justify-between gap-2">
                        <Dialog.Title className="text-lg font-semibold text-primary">
                          {title}
                        </Dialog.Title>
                        <button
                          type="button"
                          className="cursor-pointer rounded-full p-0.5 text-secondary hover:bg-primary-hover hover:text-secondary-hover"
                          onClick={onClose}
                        >
                          <TbX className="h-5 w-5" />
                        </button>
                      </div>
                    </DrawerHeader>
                  )}
                  {children}
                  {footer && footer}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Title = Dialog.Title;
Drawer.displayName = "Drawer";

export default Drawer;
