import { Meta, StoryFn } from "@storybook/react";
import BasePagination from ".";
import React, { useState } from "react";

export default {
  title: "Pagination",
  component: BasePagination,
} as Meta;

const Template: StoryFn<typeof BasePagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(10);
  const handle = (page: number, size?: number) => {
    setCurrentPage(page);
    setSize(size || 10);
  };

  return (
    <BasePagination
      {...args}
      totalPages={Math.ceil((args.totalRecords as number) / size)}
      size={size}
      currentPage={currentPage}
      onPageChange={handle}
      totalRecords={args.totalRecords}
    />
  );
};

export const Pagination = Template.bind({});
Pagination.args = {
  totalRecords: 200,
  siblingCount: 2,
};

export const WithPageSizeSelect = Template.bind({});
WithPageSizeSelect.args = {
  totalRecords: 500,
  siblingCount: 2,
  withPageSizeSelect: true,
};

export const WithPageJump = Template.bind({});
WithPageJump.args = {
  totalRecords: 500,
  siblingCount: 2,
  withPageJump: true,
};

export const WithPageSizeSelectAndPageJump = Template.bind({});
WithPageSizeSelectAndPageJump.args = {
  totalRecords: 500,
  siblingCount: 2,
  withPageSizeSelect: true,
  withPageJump: true,
};

export const WithCustomPageSizeOptions = Template.bind({});
WithCustomPageSizeOptions.args = {
  totalRecords: 500,
  siblingCount: 2,
  withPageSizeSelect: true,
  pageSizeOptions: [
    {
      label: "5/page",
      value: 5,
    },
    {
      label: "8/page",
      value: 8,
    },
    {
      label: "12/page",
      value: 12,
    },
    {
      label: "24/page",
      value: 24,
    },
  ],
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
  totalRecords: 500,
  siblingCount: 2,
  withPageSizeSelect: true,
  className: "text-xl font-bold text-purple",
};

export const PaginationWithPageInfo = Template.bind({});
PaginationWithPageInfo.args = {
  totalRecords: 47,
  siblingCount: 2,
  withPageInfo: true,
};

export const PaginationWithAll = Template.bind({});
PaginationWithAll.args = {
  totalRecords: 47,
  siblingCount: 2,
  withPageInfo: true,
  withPageSizeSelect: true,
  withPageJump: true,
};

export const PaginationComponents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(10);
  const handle = (page: number, size?: number) => {
    setCurrentPage(page);
    setSize(size || 10);
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-primary"> Pagination has sub components as below </p>
      <div className="flex w-fit flex-col gap-2 border border-secondary p-2">
        <p className=" text-xs text-primary">
          Component : <code>{"<Pagination/>"}</code>{" "}
        </p>
        <BasePagination
          totalPages={Math.floor(2000 / size)}
          size={size}
          currentPage={currentPage}
          onPageChange={handle}
        />
      </div>
      <div className="flex w-fit flex-col gap-2 border border-secondary p-2">
        <p className=" text-xs text-primary">
          Component : <code>{"<Pagination.Info/>"}</code>{" "}
        </p>
        <BasePagination.Info
          size={size}
          currentPage={currentPage}
          totalRecords={2000}
        />
      </div>
      <div className="flex w-fit flex-col gap-2 border border-secondary p-2">
        <p className=" text-xs text-primary">
          Component : <code>{"<Pagination.Select/>"}</code>{" "}
        </p>
        <div className="w-40">
          <BasePagination.Select size={size} onPageChange={handle} />
        </div>
      </div>
      <div className="flex w-fit flex-col gap-2 border border-secondary p-2">
        <p className=" text-xs text-primary">
          Component : <code>{"<Pagination.Jump/>"}</code>{" "}
        </p>
        <BasePagination.Jump size={size} onPageChange={handle} />
      </div>
    </div>
  );
};
