import { Meta, StoryFn } from "@storybook/react";
import Label, { TLabelProps } from ".";
import React from "react";

export default {
  component: Label,
  title: "Label",
} as Meta<TLabelProps>;

const Template: StoryFn<TLabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Enter your name",
} as TLabelProps;

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: "Enter your name",
  size: "sm",
} as TLabelProps;

export const LargeSize = Template.bind({});
SmallSize.args = {
  children: "Enter your name",
  size: "lg",
} as TLabelProps;

export const Required = Template.bind({});
Required.args = {
  children: "Enter your name",
  required: true,
} as TLabelProps;
