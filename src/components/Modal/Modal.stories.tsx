import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Modal from ".";
import Button from "../Button";

export default {
  component: Modal,
  title: "Modal",
} as Meta;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Modal header</Modal.Header>
        <Modal.Body>
          <h3 className="text-base font-semibold leading-6 text-primary">
            Information data
          </h3>
          <div className="mt-2">
            <p className="text-sm text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur amet labore.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  clickOutsideToClose: true,
  className: "h-fit",
  overlay: "dark",
};

export const WithCloseIcon = Template.bind({});

WithCloseIcon.args = {
  clickOutsideToClose: true,
  className: "h-fit",
  showCloseIcon: true,
  overlay: "medium",
};

export const WithOverlayChange = Template.bind({});
WithOverlayChange.args = {
  clickOutsideToClose: true,
  className: "h-fit",
  overlay: "light",
};

export const FromTop = Template.bind({});
FromTop.args = {
  transitionStyle: "fromTop",
};

export const FromBottom = Template.bind({});
FromBottom.args = {
  transitionStyle: "fromBottom",
};

export const FromLeft = Template.bind({});
FromLeft.args = {
  transitionStyle: "fromLeft",
};

export const FromRight = Template.bind({});
FromRight.args = {
  transitionStyle: "fromRight",
};
