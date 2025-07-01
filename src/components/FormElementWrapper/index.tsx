import { twMerge } from "tailwind-merge";

type TFormElementWrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const FormElementWrapper = ({
  className,
  children,
  ...restProps
}: TFormElementWrapperProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", className)} {...restProps}>
      {children}
    </div>
  );
};

export default FormElementWrapper;
