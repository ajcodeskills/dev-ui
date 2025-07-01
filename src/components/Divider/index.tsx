import { twMerge } from "tailwind-merge";

interface IDividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  variant?: "horizontal" | "vertical";
}

const Divider: React.FC<IDividerProps> = ({
  className,
  variant = "horizontal",
  ...rest
}) => {
  const variantClasses = {
    horizontal: "w-full border-t",
    vertical: "h-full border-r",
  };

  return (
    <div
      {...rest}
      className={twMerge(
        variantClasses[variant],
        "border-secondary",
        className,
      )}
    />
  );
};

export default Divider;
