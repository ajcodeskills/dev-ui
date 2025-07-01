import { twMerge } from "tailwind-merge";

interface DrawerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children, className }) => {
  return (
    <div className={twMerge("border-b border-b-secondary p-2", className)}>
      {children}
    </div>
  );
};

export default DrawerHeader;
