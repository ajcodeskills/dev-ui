import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import InfoBanner, { TInfoBannerProps } from ".";

export default {
  title: "InfoBanner",
  component: InfoBanner,
} as Meta;

const Template: StoryFn<TInfoBannerProps> = (args) => (
  <div className="w-96">
    <InfoBanner {...args} />
  </div>
);

export const PrimaryInfo = Template.bind({});
PrimaryInfo.args = {
  variant: "primary",
  content: "I am primary info banner",
};

export const SecondaryInfo = Template.bind({});
SecondaryInfo.args = {
  variant: "secondary",
  content: "I am secondary info banner",
};

export const WarningInfo = Template.bind({});
WarningInfo.args = {
  variant: "warning",
  content: "I am warning info banner",
};

export const ErrorInfo = Template.bind({});
ErrorInfo.args = {
  variant: "error",
  content: "I am error info banner",
};

export const SuccessInfo = Template.bind({});
SuccessInfo.args = {
  variant: "success",
  content: "I am success info banner",
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  variant: "primary",
  content: (
    <div className="flex flex-col gap-1">
      <p className="font-semibold text-primary">Event has been scheduled</p>
      <p className="text-secondary">Sunday, December 03, 2023 at 9:00 AM</p>
    </div>
  ),
};
