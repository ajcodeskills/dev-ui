import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Theme",
  component: () => <></>,
} as Meta;

const Template: StoryFn<unknown> = () => (
  <div className="styled-scrollbar flex h-[90vh] flex-col items-start gap-4 overflow-scroll bg-secondary p-2">
    <h1 className="text-primary">
      All the colors you need for the Application
    </h1>
    <p className="text-secondary">
      Click on show code to get the class name references
    </p>
    <div className="w-full cursor-pointer border-4 border-primary bg-primary p-5 text-primary hover:border-primary-hover hover:bg-primary-hover hover:text-primary-hover">
      Primary : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-secondary bg-secondary p-5 text-secondary hover:border-secondary-hover hover:bg-secondary-hover hover:text-secondary-hover">
      Secondary : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-tertiary bg-tertiary p-5 text-tertiary hover:border-tertiary-hover hover:bg-tertiary-hover hover:text-tertiary-hover">
      Tertiary : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-success bg-success p-5 text-success hover:border-success-hover hover:bg-success-hover hover:text-success-hover">
      Success : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-error bg-error p-5 text-error hover:border-error-hover hover:bg-error-hover hover:text-error-hover">
      Error : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-warning bg-warning p-5 text-warning hover:border-warning-hover hover:bg-warning-hover hover:text-warning-hover">
      Warning : Text, Background, hover, border
    </div>
    <h2 className="text-primary">Band : Main Application theme color </h2>
    <div className="w-full cursor-pointer border-4 border-brand-primary bg-brand-primary p-5 text-brand-primary-text hover:border-brand-primary-hover hover:bg-brand-primary-hover hover:text-brand-primary-text-hover">
      Brand-primary : Text, Background, hover, border
    </div>
    <div className="w-full cursor-pointer border-4 border-brand-primary bg-brand-primary/75 p-5 text-brand-primary-text hover:border-brand-primary-hover hover:bg-brand-primary-hover hover:text-brand-primary-text-hover">
      Brand-primary with bg-opacity : Text, Background, hover, border
    </div>

    <h2 className="text-primary">
      Ring : use it only when you need matching text and borders
    </h2>
    <div className="w-full cursor-pointer bg-primary p-5 text-primary ring-4 ring-primary hover:bg-primary-hover hover:text-primary-hover hover:ring-primary-hover">
      Primary : Text, Background, hover, ring
    </div>
    <div className="w-full cursor-pointer bg-secondary p-5 text-secondary ring-4 ring-secondary hover:bg-secondary-hover hover:text-secondary-hover hover:ring-secondary-hover">
      Secondary : Text, Background, hover, ring
    </div>
    <div className="w-full cursor-pointer bg-tertiary p-5 text-tertiary ring-4 ring-tertiary hover:bg-tertiary-hover hover:text-tertiary-hover hover:ring-tertiary-hover">
      Tertiary : Text, Background, hover, ring
    </div>
    <div className="flex flex-wrap gap-4 p-10 text-secondary">
      <div className="bg-secondary p-10 shadow-1 hover:bg-secondary-hover">
        shadow 1
      </div>
      <div className="bg-primary p-10 shadow-2 hover:bg-primary-hover">
        shadow 2
      </div>
      <div className="p-10 shadow-3">shadow 3</div>
      <div className="p-10 shadow-4">shadow 4</div>
      <div className="p-10 shadow-5">shadow 5</div>
      <div className="p-10 shadow-brand">shadow brand</div>
      <div className="p-10 shadow-2-light">shadow 2-light</div>
      <div className="p-10 shadow-3-light">shadow 3-light</div>
    </div>
  </div>
);

export const Default = Template.bind({});
