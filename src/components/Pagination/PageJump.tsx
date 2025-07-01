import { useState } from "react";
import Input from "../Input";
import { twMerge } from "tailwind-merge";

interface PageJumpProps {
  onPageChange: (page: number, size?: number) => void;
  size?: number;
  className?: string;
}

const PageJump: React.FC<PageJumpProps> = ({
  onPageChange,
  size,
  className,
}) => {
  const [page, setPage] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPageChange(Number(page), size);
    setPage("");
  };
  return (
    <div
      className={twMerge(
        "flex items-center gap-1 px-1 text-sm font-medium text-primary",
        className,
      )}
    >
      <p>Go to</p>
      <form onSubmit={handleSubmit}>
        <Input
          className="w-16"
          type="number"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <button className="hidden" type="submit" />
      </form>
      <p>Page</p>
    </div>
  );
};

export default PageJump;
