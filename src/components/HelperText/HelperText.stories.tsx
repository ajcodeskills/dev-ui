import { Meta, StoryFn } from "@storybook/react";
import HelperText, { THelperTextProps } from ".";
import React from "react";

export default {
  component: HelperText,
  title: "HelperText",
} as Meta<THelperTextProps>;

const Template: StoryFn<THelperTextProps> = (args) => <HelperText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Enter your name here",
} as THelperTextProps;

export const Error = Template.bind({});
Error.args = {
  children: "Enter your name is wrong",
  error: true,
} as THelperTextProps;
