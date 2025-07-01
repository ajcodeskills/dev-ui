import React from "react";
import { twMerge } from "tailwind-merge";

interface PageInfoProps {
  totalRecords: number;
  currentPage: number;
  size: number;
  className?: string;
}

const PageInfo: React.FC<PageInfoProps> = ({
  totalRecords,
  currentPage,
  size,
  className,
}) => {
  return (
    <p className={twMerge("text-sm font-normal text-primary", className)}>
      Showing{" "}
      <span className=" font-semibold">{1 + (currentPage - 1) * size}</span> to{" "}
      <span className=" font-semibold">
        {Math.min(size * currentPage, totalRecords)}
      </span>{" "}
      of <span className=" font-semibold">{totalRecords}</span> results
    </p>
  );
};

export default PageInfo;
