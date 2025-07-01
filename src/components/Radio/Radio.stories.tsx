import { Meta, StoryFn } from "@storybook/react";
import BaseRadio from ".";
import React from "react";

export default {
  component: BaseRadio,
  title: "Radio",
} as Meta;

const Template: StoryFn<typeof BaseRadio> = (args) => <BaseRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Comments",
  error: "",
  disabled: false,
  size: "md",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Comments",
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
