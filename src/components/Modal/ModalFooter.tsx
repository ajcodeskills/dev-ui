import { twMerge } from "tailwind-merge";

type TModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const ModalFooter = ({ children, className }: TModalFooterProps) => {
  return (
    <div className={twMerge("border-t border-t-secondary pt-2", className)}>
      {children}
    </div>
  );
};

export default ModalFooter;
