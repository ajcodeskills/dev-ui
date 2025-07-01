import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  Placement,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTransitionStyles,
  useTypeahead,
} from "@floating-ui/react";
import React from "react";
import { MenuContext } from "./MenuContext";
import { twMerge } from "tailwind-merge";

export interface MenuProps {
  label: React.ReactNode;
  nested?: boolean;
  children?: React.ReactNode;
  distance?: number;
  placement?: Placement;
  nestedPlacement?: Placement;
  trigger?: "click" | "hover";
  className?: string;
}

export const MenuComponent = React.forwardRef<
  HTMLButtonElement,
  React.HTMLProps<HTMLButtonElement> & MenuProps
>(
  (
    {
      children,
      label,
      distance = 4,
      placement = "bottom-end",
      nestedPlacement = "right-start",
      trigger = "click",
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hasFocusInside, setHasFocusInside] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
    const labelsRef = React.useRef<Array<string | null>>([]);
    const parent = React.useContext(MenuContext);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId != null;

    const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: isNested ? nestedPlacement : placement,
      middleware: [
        offset({
          mainAxis: isNested ? 0 : distance,
          alignmentAxis: isNested ? -4 : 0,
        }),
        flip(),
        shift(),
      ],
      whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
      enabled: isNested || trigger === "hover",
      delay: { open: 75 },
      handleClose: safePolygon({ blockPointerEvents: true, buffer: 100 }),
    });
    const click = useClick(context, {
      event: "mousedown",
      toggle: !isNested,
      ignoreMouse: isNested,
      enabled: !isNested && trigger === "click",
    });
    const role = useRole(context, { role: "menu" });
    const dismiss = useDismiss(context, { bubbles: true });
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    });
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      onMatch: isOpen ? setActiveIndex : undefined,
      activeIndex,
    });
    const { styles } = useTransitionStyles(context, {
      duration: 150,
      initial: {
        opacity: 0,
      },
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    React.useEffect(() => {
      if (!tree) return;

      function handleTreeClick() {
        setIsOpen(false);
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false);
        }
      }

      tree.events.on("click", handleTreeClick);
      tree.events.on("menuopen", onSubMenuOpen);

      return () => {
        tree.events.off("click", handleTreeClick);
        tree.events.off("menuopen", onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    React.useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit("menuopen", { parentId, nodeId });
      }
    }, [tree, isOpen, nodeId, parentId]);

    return (
      <FloatingNode id={nodeId}>
        <button
          ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
          tabIndex={
            !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
          }
          role={isNested ? "menuitem" : undefined}
          data-open={isOpen ? "" : undefined}
          data-nested={isNested ? "" : undefined}
          data-focus-inside={hasFocusInside ? "" : undefined}
          className={twMerge(
            isNested
              ? "flex w-full items-center justify-between bg-primary px-3 py-1 text-left text-sm outline-none focus-within:bg-primary-hover focus-within:outline-none hover:bg-primary-hover focus:outline-none"
              : "w-fit rounded-md",
            isOpen && "bg-primary-hover",
          )}
          {...getReferenceProps(
            parent.getItemProps({
              ...props,
              onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event);
                setHasFocusInside(false);
                parent.setHasFocusInside(true);
              },
            }),
          )}
        >
          {label}
          {isNested && (
            <span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
              ▶
            </span>
          )}
        </button>
        <MenuContext.Provider
          value={{
            activeIndex,
            setActiveIndex,
            getItemProps,
            setHasFocusInside,
            isOpen,
          }}
        >
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  <div
                    ref={refs.setFloating}
                    className={twMerge(
                      "overflow-auto rounded-md border border-tertiary bg-primary text-sm text-primary shadow-2 outline-none focus-within:outline-none focus:outline-none",
                      className,
                    )}
                    style={{ ...floatingStyles, ...styles }}
                    {...getFloatingProps()}
                  >
                    {children}
                  </div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
    );
  },
);

MenuComponent.displayName = "MenuComponent";
