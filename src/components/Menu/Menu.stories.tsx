import { Meta, StoryFn } from "@storybook/react";
import Menu from ".";
import React from "react";
import { MenuIcon } from "../../icons";
export default {
  component: Menu,
  title: "Menu",
} as Meta;

const options = [
  {
    label: "option ",
    onClick: () => console.log("option "),
  },
  {
    label: "option 2",
    onClick: () => console.log("option 2"),
    disabled: true,
  },
  {
    label: "option 3",
    onClick: () => console.log("option 3"),
    options: [
      {
        label: "option 3-a",
        onClick: () => console.log("option 3-a"),
      },
      {
        label: "option 3-b",
        onClick: () => console.log("option 3-b"),
        options: [
          {
            label: "option 3-a-a",
            onClick: () => console.log("option 3-a-a"),
          },
          {
            label: "option 3-b-b",
            onClick: () => console.log("option 3-b-b"),
          },
          {
            label: "option 3-c-c",
            onClick: () => console.log("option 3-c-c"),
          },
        ],
      },
      {
        label: "option 3-c",
        onClick: () => console.log("option 3-c"),
      },
    ],
  },
  {
    label: "option 4",
    onClick: () => console.log("option 4"),
  },
  {
    label: "option 5",
    onClick: () => console.log("option 5"),
  },
];

const Template: StoryFn<typeof Menu> = (args) => {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <Menu {...args}>
        <MenuIcon className="h-8 w-8 fill-primary p-1" />
      </Menu>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
};

export const MenuWithDistance = Template.bind({});
MenuWithDistance.args = {
  options,
  distance: 20,
};

export const MenuWithTopPlacement = Template.bind({});
MenuWithTopPlacement.args = {
  options,
  placement: "top",
};

export const MenuWithLeftPlacement = Template.bind({});
MenuWithLeftPlacement.args = {
  options,
  placement: "left",
};

export const MenuWithRightPlacement = Template.bind({});
MenuWithRightPlacement.args = {
  options,
  placement: "right",
};

export const MenuWithHoverTrigger = Template.bind({});
MenuWithHoverTrigger.args = {
  options,
  trigger: "hover",
};
