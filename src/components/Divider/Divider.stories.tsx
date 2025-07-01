import { Meta, StoryFn } from "@storybook/react";
import BaseDivider from ".";
import React from "react";

export default {
  title: "Divider",
  component: BaseDivider,
} as Meta;

const Template: StoryFn<typeof BaseDivider> = (args) => (
  <BaseDivider {...args} />
);

export const HorizontalDivider = Template.bind({});
HorizontalDivider.args = {
  variant: "horizontal",
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
  variant: "vertical",
};
