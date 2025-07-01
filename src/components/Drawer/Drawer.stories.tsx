import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Drawer from ".";
import Button from "../Button";

export default {
  component: Drawer,
  title: "Drawer",
} as Meta;

const Template: StoryFn<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <div className="mt-5 text-sm text-primary">
        <p>
          Drawer has 4 Sub Components use this components to wrap the contents
          of the Drawer
        </p>
        <ul className="list-inside list-disc">
          <li>Drawer.Header </li>
          <li>Drawer.Body</li>
          <li>Drawer.Footer</li>
          <li>Drawer.Title</li>
        </ul>
      </div>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Simple Drawer"
      >
        <Drawer.Body>
          <h3 className="text-base font-semibold leading-6 text-primary">
            Information data
          </h3>
          <div className="mt-2">
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore.
            </p>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  clickOutsideToClose: true,
  overlay: "dark",
  className: "bg-primary",
  position: "right",
};

export const LeftDrawer = Template.bind({});
LeftDrawer.args = {
  clickOutsideToClose: true,
  className: "bg-primary",
  position: "left",
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  clickOutsideToClose: true,
  className: "bg-primary",
  position: "right",
  footer: (
    <Drawer.Footer className="flex justify-end gap-2">
      <Button variant="secondary">Cancel</Button>
      <Button>Save</Button>
    </Drawer.Footer>
  ),
};

export const WithCustomHeader = Template.bind({});
WithCustomHeader.args = {
  clickOutsideToClose: true,
  className: "bg-primary",
  position: "right",
  overlay: "medium",
  header: (
    <Drawer.Header>
      <div>
        <Drawer.Title>Drawer with header</Drawer.Title>
        <p className="text-sm text-secondary">Sub title</p>
      </div>
    </Drawer.Header>
  ),
};

export const WithOverlayChange = Template.bind({});

WithOverlayChange.args = {
  clickOutsideToClose: true,
  className: "bg-primary",
  position: "right",
  overlay: "light",
};
