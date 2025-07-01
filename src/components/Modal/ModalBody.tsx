import { twMerge } from "tailwind-merge";

type TModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const ModalBody = ({ children, className }: TModalBodyProps) => {
  return (
    <div
      className={twMerge(
        "styled-scrollbar flex-grow overflow-auto py-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ModalBody;
