import React from "react";
import { ClassNameValue } from "tailwind-merge";

export type TStep = {
  id: string | number;
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  event?: string;
  className?: string;
};
export type TStepCircle = TStep & {
  handleClick: (id: string | number, isDisabled?: boolean) => void;
  isDesktop?: boolean;
};
export type TLayoutStepper = {
  steps: TStep[];
  className?: ClassNameValue;
  showNumber?: boolean;
  followSequence?: boolean;
  handleStepClick?: (id: string | number) => void;
};
