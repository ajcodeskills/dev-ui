import { Meta, StoryFn } from "@storybook/react";
import SelectComponent from ".";
import React from "react";

export default {
  title: "Select",
  component: SelectComponent,
} as Meta;

const Template: StoryFn<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);

const options = [
  { value: "apple ", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];
export const BaseSelect = Template.bind({});
BaseSelect.args = {
  options,
  isMulti: true,
  placeholder: "Select a fruit",
  onChange: () => {},
  className: "w-64",
  label: "Fruit",
};

export const SelectWithLongOption = Template.bind({});
SelectWithLongOption.args = {
  ...BaseSelect.args,
  options: [
    ...options,
    {
      value: "pineapple",
      label: "Pineapple for the win 🍍 show case a long option",
    },
  ],
};

export const SelectWithLabel = Template.bind({});
SelectWithLabel.args = {
  ...BaseSelect.args,
};

export const SelectWithDefaultValue = Template.bind({});
SelectWithDefaultValue.args = {
  ...BaseSelect.args,
  defaultValue: options[0],
  isMulti: false,
};

export const SelectWithError = Template.bind({});
SelectWithError.args = {
  ...BaseSelect.args,
  error: "This is an error",
};

export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  ...BaseSelect.args,
  disabled: true,
};

export const SmallSelect = Template.bind({});
SmallSelect.args = {
  ...BaseSelect.args,
  size: "sm",
};
export const LargeSelect = Template.bind({});
LargeSelect.args = {
  ...BaseSelect.args,
  size: "lg",
};
