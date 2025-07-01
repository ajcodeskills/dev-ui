import { twMerge } from "tailwind-merge";
import { TStepCircle } from "./stepper.type";
import CircleWrapper from "./CircleWrapper";
import { CheckIcon, CloseIcon } from "../../icons";

const StepCircle = (props: TStepCircle) => {
  const { error, completed, active, disabled, isDesktop } = props;
  if (active) {
    return (
      <CircleWrapper {...props} className="border border-brand-primary">
        <div
          className={twMerge(
            "rounded-full bg-brand-primary",
            isDesktop ? "h-2.5 w-2.5" : "h-1 w-1",
          )}
        />
      </CircleWrapper>
    );
  }
  if (error || completed) {
    return (
      <CircleWrapper
        {...props}
        className={twMerge(error ? "bg-error-dark" : "bg-brand-primary")}
      >
        {error ? (
          <CloseIcon
            className={twMerge("text-white", isDesktop ? "h-4 w-4" : "h-3 w-3")}
          />
        ) : (
          <CheckIcon
            className={twMerge("text-white", isDesktop ? "h-4 w-4" : "h-3 w-3")}
          />
        )}
      </CircleWrapper>
    );
  }
  return (
    <CircleWrapper
      {...props}
      className={twMerge(disabled ? "bg-tertiary" : "bg-secondary")}
    >
      <div />
    </CircleWrapper>
  );
};

export default StepCircle;
