import { Meta, StoryFn } from "@storybook/react";
import BaseCheckbox from ".";
import React from "react";

export default {
  component: BaseCheckbox,
  title: "Checkbox",
} as Meta;

const Template: StoryFn<typeof BaseCheckbox> = (args) => (
  <BaseCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Comments",
  error: "",
  disabled: false,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Comments",
  description: "Get notified when someones posts a comment on a posting.",
  error: "",
  disabled: false,
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
