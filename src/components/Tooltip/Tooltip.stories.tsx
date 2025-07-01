import { Meta, StoryFn } from "@storybook/react";
import Tooltip, { TooltipProps } from ".";
import React from "react";
import Button from "../Button";

export default {
  component: Tooltip,
  title: "Tooltip",
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => {
  return (
    <div className="flex h-20 w-full items-center justify-center">
      <Tooltip {...args} />
    </div>
  );
};
export const ToolTip = Template.bind({});
ToolTip.args = {
  children: "Hover me",
  content: "Tooltip content 👋",
  onOpenChange: undefined,
};
export const TooltipWithArrow = Template.bind({});
TooltipWithArrow.args = {
  children: "Hover me - with arrow",
  content: "Tooltip content 👋",
  withArrow: true,
  onOpenChange: undefined,
};
export const followCursorToolTip = Template.bind({});
followCursorToolTip.args = {
  children: "Hover me - followCursor",
  content: "Tooltip content 👋",
  followCursor: true,
  withArrow: true,
  onOpenChange: undefined,
};
export const BottomToolTip = Template.bind({});
BottomToolTip.args = {
  placement: "bottom",
  children: "Hover me - Bottom Tooltip",
  content: "Tooltip content 👋",
  onOpenChange: undefined,
};

export const LeftToolTip = Template.bind({});
LeftToolTip.args = {
  placement: "left",
  children: "Hover me - Left Tooltip",
  content: "Tooltip content 👋",
  onOpenChange: undefined,
};

export const RightToolTip = Template.bind({});
RightToolTip.args = {
  placement: "right",
  children: "Hover me - Right Tooltip",
  content: "Tooltip content 👋",
  onOpenChange: undefined,
};

export const DelayToolTip = Template.bind({});
DelayToolTip.args = {
  children: "Hover me - Delay Tooltip",
  content: "Tooltip content 👋",
  delay: 1000,
  onOpenChange: undefined,
};

export const OpenDelayToolTip = Template.bind({});
OpenDelayToolTip.args = {
  children: "Hover me - Open Delay Tooltip",
  content: "Tooltip content 👋",
  delay: { open: 1000 },
  onOpenChange: undefined,
};

export const CloseDelayToolTip = Template.bind({});
CloseDelayToolTip.args = {
  children: "Hover me - Close Delay Tooltip",
  content: "Tooltip content 👋",
  delay: { close: 1000 },
  onOpenChange: undefined,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: "Hover me - With Custom Content",
  onOpenChange: undefined,
  content: (
    <div className="flex flex-col">
      <div className="text-sm text-white">Tooltip content 👋</div>
      <div className="text-xs text-white">Some extra info</div>
    </div>
  ),
};

export const withDistance = Template.bind({});
withDistance.args = {
  children: "Hover me - with offset",
  content: "Tooltip content 👋",
  distance: 20,
  onOpenChange: undefined,
};

export const withDisabled = Template.bind({});
withDisabled.args = {
  children: "Hover me - disabled",
  content: "Tooltip content 👋",
  onOpenChange: undefined,
  isDisabled: true,
};

export const withButton = Template.bind({});
withButton.args = {
  children: <Button>Hover over me</Button>,
  content: "Tooltip content 👋",
  onOpenChange: undefined,
};
