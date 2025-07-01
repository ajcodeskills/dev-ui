import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Stepper from ".";

export default {
  component: Stepper,
  title: "Stepper",
} as Meta;

const steps = [
  {
    active: false,
    completed: true,
    disabled: false,
    error: false,
    id: "CUSTOMER_INFORMATION",
    title: "Customer Info",
    event: "CUSTOMER_INFORMATION",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: true,
    id: "DOCUMENTS",
    title: "Documents",
    event: "DOCUMENTS",
  },
  {
    active: true,
    completed: false,
    disabled: false,
    error: false,
    id: "CONTACTS",
    title: "Contacts",
    event: "CONTACTS",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "BILLING",
    title: "Billing",
    event: "BILLING",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "LICENSE",
    title: "License",
    event: "LICENSE",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "PROPERTIES",
    title: "Properties",
    event: "PROPERTIES",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "PORTFOLIO_SETUP",
    title: "Portfolio Settings",
    event: "PORTFOLIO_SETUP",
  },
];
const verticalSteps = [
  {
    active: false,
    completed: true,
    disabled: false,
    error: false,
    id: "CUSTOMER_INFORMATION",
    title: "Customer Info",
    event: "CUSTOMER_INFORMATION",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: true,
    id: "DOCUMENTS",
    title: "Documents",
    event: "DOCUMENTS",
  },
  {
    active: true,
    completed: false,
    disabled: false,
    error: false,
    id: "CONTACTS",
    title: "Contacts",
    event: "CONTACTS",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "BILLING",
    title: "Billing",
    event: "BILLING",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "LICENSE",
    title: "License",
    event: "LICENSE",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "PROPERTIES",
    title: "Properties",
    event: "PROPERTIES",
  },
  {
    active: false,
    completed: false,
    disabled: false,
    error: false,
    id: "PORTFOLIO_SETUP",
    title: "Portfolio Settings",
    event: "PORTFOLIO_SETUP",
  },
];
const Template: StoryFn<typeof Stepper> = (args) => {
  return <Stepper {...args} />;
};

export const HorizontalStepper = Template.bind({});
HorizontalStepper.args = {
  steps: steps,
  showNumber: true,
  allowSequential: true,
  isDesktop: true,
};

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  steps: verticalSteps,
  showNumber: true,
  allowSequential: false,
  isDesktop: true,
  isVertical: true,
};
