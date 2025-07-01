import { Meta, StoryFn } from "@storybook/react";
import BaseCheckboxGroup from ".";
import React, { useState } from "react";

export default {
  component: BaseCheckboxGroup,
  title: "Checkbox Group",
} as Meta;

const DEFAULT_OPTIONS = [
  {
    label: "Option 1",
    value: "option_1",
  },
  {
    label: "Option 2",
    value: "option_2",
  },
  {
    label: "Option 3",
    value: "option_3",
  },
];
const Template: StoryFn<typeof BaseCheckboxGroup> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);
  return (
    <BaseCheckboxGroup
      {...args}
      onChange={(value) => setSelectedValue(value)}
      value={selectedValue}
      options={DEFAULT_OPTIONS}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  error: "",
  value: ["option_2"],
  disabled: false,
  size: "md",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  value: ["option_1"],
  disabled: true,
};

export const WithMultiSelect = Template.bind({});
WithMultiSelect.args = {
  ...Default.args,
  value: ["option_1", "option_2"],
};
