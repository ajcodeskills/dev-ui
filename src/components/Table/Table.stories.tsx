import { Meta, StoryFn } from "@storybook/react";
import { RowSelectionState, SortingState } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import BaseTable from ".";

const sortByKey = (array, key, sortOrder = "asc") => {
  const order = sortOrder === "desc" ? -1 : 1;

  return [...array].sort((a, b) =>
    a[key] < b[key] ? -1 * order : a[key] > b[key] ? 1 * order : 0,
  );
};

const COLUMNS = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (row) => {
      return (
        <span className="font-semibold text-primary">{row.getValue()}</span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "action",
    header: "",
    cell: () => {
      return (
        <button className="text-sm text-brand-primary hover:text-brand-primary-hover">
          Edit
        </button>
      );
    },
  },
];

const STICKY_COLUMNS = [
  {
    accessorKey: "name",
    header: "Name",
    columnClassName: "sticky left-0 z-2",
    size: 100,
    cell: (row) => {
      return (
        <span className="font-semibold text-primary">{row.getValue()}</span>
      );
    },
  },
  {
    accessorKey: "email",
    columnClassName: "sticky left-[100px] z-2",
    size: 200,
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "home",
    header: "Code",
  },
  {
    accessorKey: "visit",
    header: "Visit",
  },
  {
    accessorKey: "profileProgress",
    header: "Profile Progress",
  },

  {
    accessorKey: "action",
    columnClassName: "w-2 sticky right-0 z-2",
    size: 100,
    header: "Action",
    cell: () => {
      return (
        <button className="text-sm text-brand-primary hover:text-brand-primary-hover">
          Edit
        </button>
      );
    },
  },
];
const NESTED_COLUMNS = [
  {
    accessorKey: "name",
    header: "Name",
    columnClassName: "sticky left-0 z-2",
    size: 100,
    cell: (row) => {
      return (
        <span className="font-semibold text-primary">{row.getValue()}</span>
      );
    },
  },
  {
    accessorKey: "email",
    columnClassName: "sticky left-[100px] z-2",
    size: 200,
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    header: "Contact Details",
    accessorKey: "contact",
    columns: [
      {
        accessorKey: "phone",
        header: "Phone",
      },
      {
        accessorKey: "home",
        header: "Code",
      },
    ],
  },
  {
    accessorKey: "visit",
    header: "Visit",
  },
  {
    accessorKey: "profileProgress",
    header: "Profile Progress",
  },

  {
    accessorKey: "action",
    columnClassName: "w-2 sticky right-0 z-2",
    size: 100,
    header: "Action",
    cell: () => {
      return (
        <button className="text-sm text-brand-primary hover:text-brand-primary-hover">
          Edit
        </button>
      );
    },
  },
];

const STICKY_COLUMNS_WITH_SELECTION = [
  {
    accessorKey: "name",
    header: "Name",
    columnClassName: "sticky left-[50px] z-2",
    size: 100,
    cell: (row) => {
      return (
        <span className="font-semibold text-primary">{row.getValue()}</span>
      );
    },
  },
  {
    accessorKey: "email",
    columnClassName: "sticky left-[150px] z-2",
    size: 200,
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "home",
    header: "Code",
  },
  {
    accessorKey: "visit",
    header: "Visit",
  },
  {
    accessorKey: "profileProgress",
    header: "Profile Progress",
  },

  {
    accessorKey: "action",
    columnClassName: "w-2 sticky right-0 z-2",
    size: 100,
    header: "Action",
    cell: () => {
      return (
        <button className="text-sm text-brand-primary hover:text-brand-primary-hover">
          Edit
        </button>
      );
    },
  },
];

// Given object
const templateObject = {
  id: 1,
  name: "John Doe",
  email: "john@gmail.com",
  gender: "male",
  phone: 9745597425,
  home: "+91",
  age: 23,
  visit: 100,
  profileProgress: 50,
};

// Generate an array with 20 items of the above object
const DATA = Array.from({ length: 20 }, (_, index) => ({
  ...templateObject,
  age: templateObject.age + index,
  phone: templateObject.phone + index,
  gender: templateObject.gender + index,
  id: index + 1,
}));
export default {
  component: BaseTable,
  title: "Table",
} as Meta;

const Template: StoryFn<typeof BaseTable> = (args) => <BaseTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "max-h-[calc(100vh-200px)]",
  columns: COLUMNS,
  data: DATA,
  enableColumnBorder: true,
  tableRowClass: "",
};

export const WithSelection = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <BaseTable
      className="max-h-[calc(100vh-200px)]"
      columns={COLUMNS}
      data={DATA}
      enableRowSelection={true}
      onRowSelectionChange={setRowSelection}
      state={{ rowSelection }}
    />
  );
};

export const StickColumn = Template.bind({});
StickColumn.args = {
  className: "max-h-[calc(100vh-200px)] w-[800px] min-w-0",
  columns: STICKY_COLUMNS,
  data: DATA,
};

export const StickColumnWithSelection = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <BaseTable
      className="max-h-[calc(100vh-200px)] w-[800px] min-w-0 items-center justify-center"
      columns={STICKY_COLUMNS_WITH_SELECTION}
      data={DATA}
      enableRowSelection={true}
      onRowSelectionChange={setRowSelection}
      state={{ rowSelection }}
      selectColumnClassName="sticky left-0 z-2"
    />
  );
};

export const WithLoadingBody = Template.bind({});
WithLoadingBody.args = {
  columns: COLUMNS,
  data: DATA,
  isBodyLoading: true,
  loadingRowsCount: 7,
};
export const LoadingWithoutLight = Template.bind({});
LoadingWithoutLight.args = {
  columns: COLUMNS,
  data: DATA,
  isBodyLoading: true,
  loadingRowsCount: 7,
  loadingLight: false,
};
export const WithLoadingHeader = Template.bind({});
WithLoadingHeader.args = {
  columns: COLUMNS,
  data: DATA,
  isHeaderLoading: true,
  isBodyLoading: true,
};
export const WithLoadingCustomStyle = Template.bind({});
WithLoadingCustomStyle.args = {
  columns: COLUMNS,
  data: DATA,
  isHeaderLoading: true,
  isBodyLoading: true,
  loadingHeaderClassName: "h-8 bg-brand-primary",
  loadingBodyClassName: "h-12",
};

export const ManualSorting = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [tableData, setTableData] = useState(DATA);

  useEffect(() => {
    if (sorting.length !== 0) {
      // Call the api and get the sorted data
      // sorting state will contain the sorting info in the format [{id: string, desc: boolean}]
      // For now, we are sorting the data locally
      const newData = sortByKey(
        DATA,
        sorting[0].id,
        sorting[0].desc ? "desc" : "asc",
      );
      setTableData(newData);
    }
  }, [sorting]);

  return (
    <BaseTable
      className="max-h-[calc(100vh-200px)]"
      columns={COLUMNS}
      data={tableData}
      enableRowSelection={true}
      manualSorting={true}
      state={{ sorting }}
      onSortingChange={setSorting}
    />
  );
};
export const WithNestedColumns = Template.bind({});
WithNestedColumns.args = {
  columns: NESTED_COLUMNS,
  data: DATA,
  headerBorders: true,
};
