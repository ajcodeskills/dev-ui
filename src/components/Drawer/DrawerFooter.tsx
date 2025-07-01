import { twMerge } from "tailwind-merge";

interface DrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({ children, className }) => {
  return (
    <div className={twMerge("border-t border-t-secondary p-2", className)}>
      {children}
    </div>
  );
};

export default DrawerFooter;
