import { Meta, StoryFn } from "@storybook/react";
import BaseRadioGroup from ".";
import React, { useState } from "react";

export default {
  component: BaseRadioGroup,
  title: "Radio Group",
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
const Template: StoryFn<typeof BaseRadioGroup> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);
  return (
    <BaseRadioGroup
      {...args}
      onChange={(e) => setSelectedValue(e.target.value)}
      value={selectedValue}
      options={DEFAULT_OPTIONS}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  error: "",
  value: "option_2",
  disabled: false,
  size: "md",
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
  ...Default.args,
  value: "option_2",
  readOnly: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...Default.args,
  value: "option_1",
  disabled: true,
};
