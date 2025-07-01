import { twMerge } from "tailwind-merge";
import { TStepCircle } from "./stepper.type";

type TCircleWrapperProps = TStepCircle & {
  children: React.ReactNode;
  className?: string;
};
const CircleWrapper = ({
  children,
  isDesktop,
  className,
  handleClick,
  id,
  disabled,
}: TCircleWrapperProps) => {
  return (
    <div
      className={twMerge(
        className,
        "flex flex-shrink-0 items-center justify-center rounded-full",
        isDesktop ? "h-5 w-5" : "h-4 w-4",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
      )}
      onClick={() => handleClick(id, disabled)}
    >
      {children}
    </div>
  );
};

export default CircleWrapper;
