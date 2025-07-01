import { Meta, StoryFn } from "@storybook/react";
import BasePopover from ".";
import React from "react";

export default {
  component: BasePopover,
  title: "Popover",
} as Meta;

const Template: StoryFn<typeof BasePopover> = (args) => {
  return (
    <div className="flex h-60 w-full items-center justify-center bg-secondary">
      <BasePopover
        {...args}
        content={
          <div className="p-3">
            <p>Hi</p>
            <p>Popover content</p>
          </div>
        }
      >
        <p>Open </p>
      </BasePopover>
    </div>
  );
};
export const Popover = Template.bind({});
Popover.args = {
  onOpenChange: undefined,
};

export const PopoverWithHoverTrigger = Template.bind({});
PopoverWithHoverTrigger.args = {
  onOpenChange: undefined,
  trigger: "hover",
};
export const PopoverWithArrow = Template.bind({});
PopoverWithArrow.args = {
  onOpenChange: undefined,
  withArrow: true,
};

export const PopoverWithClick = Template.bind({});
PopoverWithClick.args = {
  onOpenChange: undefined,
  trigger: "click",
};

export const PopoverWithTopPlacements = Template.bind({});
PopoverWithTopPlacements.args = {
  onOpenChange: undefined,
  placement: "top",
};

export const PopoverWithBottomPlacements = Template.bind({});
PopoverWithBottomPlacements.args = {
  onOpenChange: undefined,
  placement: "bottom",
};

export const PopoverWithLeftPlacements = Template.bind({});
PopoverWithLeftPlacements.args = {
  onOpenChange: undefined,
  placement: "left",
};

export const PopoverWithRightPlacements = Template.bind({});
PopoverWithRightPlacements.args = {
  onOpenChange: undefined,
  placement: "right",
};
