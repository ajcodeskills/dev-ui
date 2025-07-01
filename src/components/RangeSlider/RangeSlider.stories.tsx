import { Meta, StoryFn } from "@storybook/react";
import RangeSlider from ".";
import React, { useState } from "react";

export default {
  component: RangeSlider,
  title: "RangeSlider",
} as Meta;

const Template: StoryFn<typeof RangeSlider> = (args) => {
  const [values, setValues] = useState<number[]>([15, 40]);
  const onSliderChange = (values: number[]) => {
    setValues(values);
  };
  return (
    <div className="p-10">
      <RangeSlider {...args} onChange={onSliderChange} values={values} />
    </div>
  );
};

export const Default = Template.bind({});

export const WithMarkers = Template.bind({});
WithMarkers.args = {
  showMarkers: true,
};

export const WithCustomisedSegments = Template.bind({});
WithCustomisedSegments.args = {
  segmentClassnameArray: ["bg-green", "bg-orange", "bg-red"],
  showMarkers: true,
};

export const WithCustomisedHandlers = Template.bind({});
WithCustomisedHandlers.args = {
  ...WithCustomisedSegments.args,
  sliderClassnameArray: ["bg-green", "bg-red"],
  showMarkers: true,
};
export const WithCustomisedHeight = Template.bind({});
WithCustomisedHeight.args = {
  showMarkers: true,
  className: "h-5",
};
export const WithCustomisedStepSize = Template.bind({});
WithCustomisedStepSize.args = {
  showMarkers: true,
  stepSize: 10,
};
export const WithTicks = Template.bind({});
WithTicks.args = {
  showMarkers: true,
  showTicks: true,
};
