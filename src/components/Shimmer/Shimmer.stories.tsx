import { Meta, StoryFn } from "@storybook/react";
import BaseShimmer from ".";
import React from "react";

export default {
  component: BaseShimmer,
  title: "Shimmer",
} as Meta;

const Template: StoryFn<typeof BaseShimmer> = (args) => (
  <BaseShimmer {...args} />
);

export const Nested = Template.bind({});
Nested.args = {
  className: "w-80",
  withRing: true,
  children: (
    <>
      <BaseShimmer className="m-4 h-10 w-10" circle withRing></BaseShimmer>
      <BaseShimmer className="m-4 h-5 w-40" circle withRing></BaseShimmer>
      <BaseShimmer
        className="m-4 h-4 w-60"
        circle
        variant="secondary"
      ></BaseShimmer>
      <BaseShimmer
        className="m-4 h-4 w-60"
        circle
        variant="secondary"
      ></BaseShimmer>
      <BaseShimmer
        className="m-4 h-4 w-60"
        circle
        variant="secondary"
      ></BaseShimmer>
      <BaseShimmer
        className="m-4 h-4 w-60"
        circle
        variant="secondary"
      ></BaseShimmer>
    </>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  className: "h-10",
  variant: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  className: "h-10",
  variant: "secondary",
};
export const WithOutLight = Template.bind({});
WithOutLight.args = {
  className: "h-10",
  variant: "secondary",
  WithRing: true,
  light: false,
};
export const WithRing = Template.bind({});
WithRing.args = {
  className: "h-10",
  withRing: true,
};
export const Circle = Template.bind({});
Circle.args = {
  circle: true,
  className: "w-10 h-10",
};
export const CircleWithRing = Template.bind({});
CircleWithRing.args = {
  circle: true,
  className: "w-10 h-10",
  withRing: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  className: "h-10",
  withRing: true,
  circle: true,
};
