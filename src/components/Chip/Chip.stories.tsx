import { Meta, StoryFn } from "@storybook/react";
import BaseChip, { TChipProps } from ".";
import React from "react";
import { chipTextSizes } from "./chip.style";
import { twMerge } from "tailwind-merge";

export default {
  component: BaseChip,
  title: "Chip",
} as Meta;

const Template: StoryFn<TChipProps> = (args) => {
  return (
    <BaseChip {...args}>
      <span className={twMerge(chipTextSizes[args.size ?? "md"])}>
        Information for chip
      </span>
    </BaseChip>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "md",
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  ...Default.args,
  variant: "secondary",
};

export const WarningChip = Template.bind({});
WarningChip.args = {
  ...Default.args,
  variant: "warning",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: "primary",
};

export const ErrorChip = Template.bind({});
ErrorChip.args = {
  ...Default.args,
  variant: "error",
};

export const WithOutBorderChip = Template.bind({});
WithOutBorderChip.args = {
  ...Default.args,
  withBorder: false,
};

export const WithOutBackgroundChip = Template.bind({});
WithOutBackgroundChip.args = {
  ...Default.args,
  withFill: false,
};
export const WithDotChip = Template.bind({});
WithDotChip.args = {
  ...Default.args,
  withDot: true,
};
export const Badge = Template.bind({});
Badge.args = {
  ...Default.args,
  type: "badge",
  withFill: false,
};
