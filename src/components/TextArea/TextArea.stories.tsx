import { Meta, StoryFn } from "@storybook/react";
import BaseTextArea from ".";
import React, { useState } from "react";

export default {
  component: BaseTextArea,
  title: "TextArea",
} as Meta;

const Template: StoryFn<typeof BaseTextArea> = (args) => {
  const [value, setValue] = useState("");
  return (
    <BaseTextArea
      {...args}
      value={value}
      rows={5}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Enter your text",
  placeholder: "Enter your text",
  error: "",
  disabled: false,
  resizable: true,
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  ...Default.args,
  maxLength: 255,
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

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};
