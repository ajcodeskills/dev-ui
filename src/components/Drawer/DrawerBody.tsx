import { twMerge } from "tailwind-merge";

interface DrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

const DrawerBody: React.FC<DrawerBodyProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "styled-scrollbar flex-grow overflow-auto p-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DrawerBody;
