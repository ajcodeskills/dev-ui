import { twMerge } from "tailwind-merge";

interface ShimmerProps {
  circle?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  withRing?: boolean;
  children?: React.ReactNode;
  light?: boolean;
}

const Shimmer: React.FC<ShimmerProps> = ({
  variant = "primary",
  className,
  withRing = false,
  circle = false,
  children,
  light = true,
}) => {
  return (
    <div
      className={twMerge(
        "min-h-1 relative isolate w-full animate-pulse overflow-hidden",
        variant === "primary" ? "bg-primary" : "bg-secondary",
        withRing && "border border-secondary",
        circle && "rounded-full",
        className,
      )}
    >
      {light && (
        <div className="absolute inset-0 h-full w-full -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-grey to-transparent"></div>
      )}
      {children}
    </div>
  );
};

export default Shimmer;
