import { useMemo } from "react";
import { TLayoutStepper } from "./stepper.type";
import { twMerge } from "tailwind-merge";
import StepCircle from "./StepCircle";
import Divider from "../Divider";

export type TStepperProps = TLayoutStepper & {
  isDesktop?: boolean;
  isVertical?: boolean;
};
const Stepper = ({
  isVertical,
  steps,
  className,
  followSequence,
  handleStepClick,
  isDesktop,
}: TStepperProps) => {
  const activeIndex = useMemo(() => {
    const index = steps.findIndex((step) => step?.active);
    return index !== -1 ? index : 0;
  }, [steps]);

  const handleClick = (id: string | number, isDisabled?: boolean) => {
    if (!isDisabled) {
      handleStepClick?.(id);
    }
  };
  return (
    <div
      className={twMerge(
        "flex justify-stretch",
        isVertical ? "h-full flex-col" : "w-full",
        className,
      )}
    >
      {steps.map((step, stepIndex) => {
        const isDisabled =
          (followSequence && activeIndex < stepIndex && !step.completed) ||
          step?.disabled;
        const circleProps = { ...step, disabled: isDisabled };
        return (
          <div
            className={twMerge(
              "flex flex-1",
              !isVertical && "flex-col",
              isVertical && "min-h-16",
            )}
            key={step.id}
          >
            <div
              className={twMerge("flex items-center", isVertical && "flex-col")}
            >
              <StepCircle
                {...circleProps}
                handleClick={handleClick}
                id={step.id}
                isDesktop={isDesktop}
              />
              {stepIndex !== steps.length - 1 && (
                <Divider
                  variant={isVertical ? "vertical" : "horizontal"}
                  className={twMerge(
                    "rounded-full",
                    isVertical ? "my-4" : "mx-4",
                    stepIndex < activeIndex ||
                      steps[stepIndex + 1]?.completed ||
                      steps[stepIndex + 1]?.error
                      ? "border-brand-primary"
                      : "border-secondary",
                  )}
                />
              )}
            </div>
            <div
              className={twMerge(
                "flex w-full flex-col",
                isVertical ? "ml-2 mt-0.5" : "mt-2",
                isDisabled ? "cursor-not-allowed" : "cursor-pointer",
              )}
              onClick={() => handleClick(step.id ?? stepIndex, isDisabled)}
            >
              <div
                className={twMerge(
                  "text-primary",
                  isDesktop ? "text-sm" : "text-3xs",
                  isDisabled && "text-secondary",
                  step?.active && "font-medium text-brand-primary",
                  step.className,
                )}
              >
                {step.title}
              </div>
              {step.subTitle && (
                <div className="text-wrap text-xs text-secondary">
                  {step.subTitle}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stepper;
