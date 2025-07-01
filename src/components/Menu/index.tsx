import {
  FloatingTree,
  Placement,
  useFloatingParentNodeId,
} from "@floating-ui/react";
import { RemoveScroll } from "react-remove-scroll";
import * as React from "react";
import { MenuComponent, MenuProps } from "./MenuComponent";
import { MenuItem } from "./MenuItem";

const BaseMenu = React.forwardRef<
  HTMLButtonElement,
  MenuProps & React.HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    );
  }

  return <MenuComponent {...props} ref={ref} />;
});

BaseMenu.displayName = "Menu";

interface Options {
  label: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  options?: Options[];
}

interface BaseMenuProps {
  options: Options[];
  children: React.ReactNode;
  distance?: number;
  placement?: Placement;
  trigger?: "click" | "hover";
  className?: string;
  lockScroll?: boolean;
}

const Menu: React.FC<BaseMenuProps> = ({
  options,
  children,
  lockScroll = true,
  ...props
}) => {
  return (
    <BaseMenu label={children as string} {...props}>
      <RemoveScroll enabled={lockScroll}>
        {options.map((item, idx) =>
          item.options ? (
            <Menu key={idx} options={item.options} lockScroll={lockScroll}>
              {item.label}
            </Menu>
          ) : (
            <MenuItem key={idx} {...item} />
          ),
        )}
      </RemoveScroll>
    </BaseMenu>
  );
};

export default Menu;
