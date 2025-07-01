import { iconSizeClasses } from "../../constants/common.constants";
import { TCommonElementSize } from "../../types/common.type";
import { twMerge } from "tailwind-merge";

type TButtonLoader = {
  className?: string;
  size: TCommonElementSize;
};
const ButtonLoader = ({ className, size }: TButtonLoader) => {
  return (
    <div
      className={twMerge(
        "border-current inline-block animate-spin rounded-full border-2 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        iconSizeClasses[size],
        className,
      )}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
    </div>
  );
};
export default ButtonLoader;
