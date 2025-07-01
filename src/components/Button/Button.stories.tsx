import { Meta, StoryFn } from "@storybook/react";
import BaseButton from ".";
import React from "react";

export default {
  title: "Button",
  component: BaseButton,
} as Meta;

const Template: StoryFn<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Primary Button",
  variant: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: "Outlined Button",
  variant: "outlined",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: "Disabled Button",
  disabled: true,
  variant: "primary",
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  children: "Ghost Button",
  variant: "ghost",
};

export const ButtonWithIcons = Template.bind({});
ButtonWithIcons.args = {
  children: "Button with Icons",
  variant: "primary",
  leftIcon: <span>🚀</span>,
  rightIcon: <span>🎉</span>,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  children: "Loading Button",
  variant: "primary",
  loading: true,
};

export const ErrorButton = Template.bind({});
ErrorButton.args = {
  children: "Error Button",
  variant: "error",
  error: true,
};

export const ExtraSmallButton = Template.bind({});
ExtraSmallButton.args = {
  children: "Extra Small Button",
  size: "xs",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: "Small Button",
  size: "sm",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  children: "Large Button",
  size: "lg",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Link Button",
  variant: "link",
};
export const ButtonAsChild = Template.bind({});
ButtonAsChild.args = {
  asChild: true,
  variant: "primary",
  children: (
    <a href="#" className="text-brand-primary underline">
      Link Styled as Button
    </a>
  ),
};

export const AnchorButton = Template.bind({});
AnchorButton.args = {
  as: "a",
  href: "#",
  children: "Anchor Button",
};
