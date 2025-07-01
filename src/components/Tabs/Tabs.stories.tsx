import { Meta, StoryFn } from "@storybook/react";
import Tabs from ".";
import React from "react";

export default {
  component: Tabs,
  title: "Tabs",
} as Meta;

const Template: StoryFn<typeof Tabs> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.TabsList aria-label="History of Ancient Rome">
        <Tabs.Tab id="one">Tab 1</Tabs.Tab>
        <Tabs.Tab id="two">Tab 2</Tabs.Tab>
        <Tabs.Tab id="three">Tab 3</Tabs.Tab>
      </Tabs.TabsList>
      <Tabs.TabPanel id="one">This is tab 1 with key one</Tabs.TabPanel>
      <Tabs.TabPanel id="two">This is tab 2 with key two</Tabs.TabPanel>
      <Tabs.TabPanel id="three">This is tab 3 with key three</Tabs.TabPanel>
    </Tabs>
  );
};
export const Default = Template.bind({});
Default.args = {
  orientation: "horizontal",
  kind: "default",
  isDisabled: false,
  className: "",
  onTabChange: () => {},
  defaultSelectedKey: "one",
  disabledKeys: [],
  underline: false,
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  ...Default.args,
  orientation: "vertical",
};

export const DisabledTabs = Template.bind({});
DisabledTabs.args = {
  underline: false,
  isDisabled: true,
};
export const TabWithOutline = Template.bind({});
TabWithOutline.args = {
  underline: true,
};
