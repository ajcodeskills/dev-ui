import React from "react";
import { Option } from ".";
import Select from "../Select";
import { twMerge } from "tailwind-merge";
const defaultOptions = [
  {
    label: "10/page",
    value: 10,
  },
  {
    label: "20/page",
    value: 20,
  },
  {
    label: "50/page",
    value: 50,
  },
  {
    label: "100/page",
    value: 100,
  },
];

interface PageSizeSelectProps {
  onPageChange: (page: number, size?: number) => void;
  size?: number;
  options?: Option[];
  className?: string;
}

const PageSizeSelect: React.FC<PageSizeSelectProps> = ({
  onPageChange,
  size,
  options = defaultOptions,
  className,
}) => {
  return (
    <Select
      options={options}
      onChange={(option) => onPageChange(1, option?.value)}
      value={options.find((option: Option) => option.value === size)}
      className={twMerge("px-1", className)}
    />
  );
};

export default PageSizeSelect;
