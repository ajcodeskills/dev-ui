import { Meta, StoryFn } from "@storybook/react";
import Toggle, { ToggleProps } from ".";
import React, { useState } from "react";
export default {
  title: "Toggle",
  component: Toggle,
} as Meta<ToggleProps>;
const Template: StoryFn<ToggleProps> = (args) => {
  const [toggle, setToggle] = useState(args.checked || false);
  return (
    <Toggle
      checked={toggle}
      {...args}
      onChange={({ checked }) => setToggle(checked)}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  disabled: false,
  id: "toggle",
  readonly: false,
  label: "Toggle",
  helperText: "Toggle update",
};
export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "Toggle error",
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
export const Readonly = Template.bind({});
Readonly.args = {
  ...Default.args,
  readOnly: true,
};
