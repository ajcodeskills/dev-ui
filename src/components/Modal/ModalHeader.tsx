import { twMerge } from "tailwind-merge";

type TModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const ModalHeader = ({ children, className }: TModalHeaderProps) => {
  return (
    <div className={twMerge("border-b border-b-secondary pb-2", className)}>
      {children}
    </div>
  );
};

export default ModalHeader;
