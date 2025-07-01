import { Meta, StoryFn } from "@storybook/react";
import BaseInput from ".";
import React from "react";
import { EmailIcon } from "../../icons";

export default {
  component: BaseInput,
  title: "Input",
} as Meta;

const Template: StoryFn<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Enter your name",
  placeholder: "Enter your name",
  error: "",
  disabled: false,
  size: "md",
  inputClassName: "",
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "This field is required",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  ...Default.args,
  suffix: <EmailIcon className="h-5 w-5 fill-primary text-primary" />,
};
export const WithPrefix = Template.bind({});
WithPrefix.args = {
  ...Default.args,
  prefix: <EmailIcon className="h-5 w-5 fill-primary text-primary" />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
export const SmallInput = Template.bind({});
SmallInput.args = {
  ...Default.args,
  size: "sm",
};
export const LargeInput = Template.bind({});
LargeInput.args = {
  ...Default.args,
  size: "lg",
};
export const RequiredField = Template.bind({});
RequiredField.args = {
  ...Default.args,
  required: true,
};
