import { Meta, StoryFn } from "@storybook/react";
import { Toaster, showToast } from ".";
import Button from "../Button";
import React from "react";

export default {
  title: "Toaster",
  component: Toaster,
} as Meta;

const Custom = () => {
  return (
    <div className="flex gap-2 rounded-md bg-brand-primary p-2">
      <p className="text-white">Custom Toast</p>
    </div>
  );
};
const CustomWithControl = (t) => {
  return (
    <div className="px-2">
      <p className="mb-2 text-primary">Lets confirm!</p>
      <div className="flex gap-2">
        <Button onClick={() => showToast.dismiss(t.id)}>Yes</Button>
        <Button variant="secondary" onClick={() => showToast.dismiss(t.id)}>
          No
        </Button>
      </div>
    </div>
  );
};

const promiseSuccess = () =>
  new Promise((resolve) => setTimeout(resolve, 5000));
const promiseError = () =>
  new Promise((resolve, reject) => setTimeout(reject, 5000));

const Template: StoryFn<typeof Toaster> = () => (
  <div className="flex h-80 flex-col items-start gap-2">
    <Toaster />
    <Button
      variant="secondary"
      onClick={() => showToast.success("Success")}
      className="text-success hover:text-success-hover"
    >
      Show Success Toast
    </Button>
    <Button
      onClick={() => showToast.error()}
      variant="secondary"
      className="text-error hover:text-error-hover"
    >
      Show Error Toast
    </Button>
    <Button
      onClick={() => showToast.warn("Warning")}
      variant="secondary"
      className="text-warning hover:text-warning-hover"
    >
      Show Warning Toast
    </Button>
    <Button
      onClick={() => showToast.custom(<Custom />)}
      className="bg-brand-primary"
    >
      Show Custom Toast
    </Button>
    <Button
      onClick={() => showToast.promise(promiseSuccess())}
      className="bg-brand-primary"
    >
      Show Promise success Toast
    </Button>
    <Button
      onClick={() => showToast.promise(promiseError())}
      className="bg-brand-primary"
    >
      Show Promise error Toast
    </Button>
    <Button
      onClick={() =>
        showToast(CustomWithControl, {
          duration: Infinity,
          position: "bottom-right",
        })
      }
      className="bg-brand-primary"
    >
      Show Custom With Control Toast
    </Button>
    <Button onClick={() => showToast.dismiss()} className="bg-brand-primary">
      Dismiss All Toast
    </Button>
    <Button onClick={() => showToast.remove()} className="bg-brand-primary">
      Remove All Toast
    </Button>
  </div>
);

export const Default = Template.bind({});
