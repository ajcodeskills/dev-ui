import {
  ColumnDef,
  SortingState,
  TableState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  TableOptions,
} from "@tanstack/react-table";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Shimmer from "../Shimmer";
import Checkbox from "../Checkbox";
import { ChevronDownIcon } from "../../icons";

export type CustomColumnDef<TData> = ColumnDef<TData> & {
  columnClassName?: string;
};

interface TableProps<TData> extends Partial<TableOptions<TData>> {
  data: TData[];
  columns: CustomColumnDef<TData>[];
  className?: string;
  enableRowSelection?: boolean;
  state?: Partial<TableState>;
  noDataMessage?: React.ReactNode;
  isBodyLoading?: boolean;
  isHeaderLoading?: boolean;
  loadingRowsCount?: number;
  loadingHeaderClassName?: string;
  loadingBodyClassName?: string;
  loadingLight?: boolean;
  enableColumnBorder?: boolean;
  tableRowClass?: string;
  selectColumnClassName?: string;
  tableRowClassCallback?: (row: TData) => string;
}

const Table = <TData extends object>({
  data = [],
  columns = [],
  className = "",
  enableRowSelection = false,
  state,
  noDataMessage,
  isBodyLoading,
  isHeaderLoading,
  loadingRowsCount = 5,
  loadingHeaderClassName,
  loadingBodyClassName,
  loadingLight = true,
  enableColumnBorder = false,
  tableRowClass,
  selectColumnClassName,
  tableRowClassCallback,
  ...rest
}: TableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const internalColumns = [...columns];
  const isDataEmpty = data.length === 0;

  // Add checkbox to columns if row selection is enabled
  if (enableRowSelection && !isDataEmpty) {
    internalColumns.unshift({
      id: "select",
      size: 50,
      columnClassName: selectColumnClassName,
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    });
  }

  const table = useReactTable({
    data,
    columns: internalColumns,
    state: {
      sorting,
      ...state,
    },
    enableRowSelection: enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    ...rest,
  });

  return (
    <div
      className={twMerge(
        "shadow max-h-auto relative min-w-full overflow-y-auto border border-secondary sm:rounded-lg",
        className,
      )}
    >
      {isHeaderLoading && (
        <Shimmer
          className={twMerge(
            "h-10 w-full border-b border-secondary",
            loadingHeaderClassName,
          )}
          variant="secondary"
          light={loadingLight}
        />
      )}
      <table className="w-full table-fixed divide-y divide-grey overflow-y-auto">
        {!isHeaderLoading && (
          <thead
            className={twMerge(
              "sticky top-0 z-3 w-full bg-tertiary",
              enableColumnBorder && "divide-y divide-grey",
            )}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className={twMerge(
                  enableColumnBorder && "divide-x divide-grey",
                )}
              >
                {headerGroup.headers.map((header) => {
                  const sortOrder = header.column.getIsSorted() as string;
                  const { columnDef }: { columnDef: CustomColumnDef<TData> } =
                    header.column;
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      className={twMerge(
                        "bg-secondary py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-primary first-of-type:rounded-ss-lg last-of-type:rounded-se-lg sm:pl-6",
                        columnDef?.columnClassName,
                      )}
                      style={{ width: header.getSize() }}
                      colSpan={header.column.columns.length || 1}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          onClick={header.column.getToggleSortingHandler()}
                          className={twMerge(
                            header.column.getCanSort() &&
                              "flex cursor-pointer select-none items-center gap-1",
                          )}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {sortOrder ? (
                            <ChevronDownIcon
                              className={twMerge(
                                "h-4 w-4 flex-shrink-0 rotate-0 transform transition-transform duration-150 ease-in-out",
                                sortOrder === "desc" && "rotate-180",
                              )}
                            />
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
        )}
        {!isBodyLoading && (
          <tbody className="w-full divide-y divide-grey overflow-y-auto">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={twMerge(
                  "bg-primary",
                  enableColumnBorder && "divide-x divide-grey",
                  tableRowClassCallback && tableRowClassCallback(row.original),
                  tableRowClass,
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  const { columnDef }: { columnDef: CustomColumnDef<TData> } =
                    cell.column;
                  return (
                    <td
                      key={cell.id}
                      className={twMerge(
                        "bg-inherit py-4 pl-4 pr-3 text-sm text-secondary sm:pl-6",
                        columnDef?.columnClassName,
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {isBodyLoading && (
        <>
          {new Array(loadingRowsCount).fill(0).map((_, index) => (
            <Shimmer
              key={index}
              className={twMerge(
                "h-10 w-full border-b border-secondary",
                loadingBodyClassName,
              )}
              light={loadingLight}
            />
          ))}
        </>
      )}
      {data.length === 0 && !isBodyLoading && (
        <p className="block w-full py-12 text-center text-sm text-secondary">
          {noDataMessage || "No data to display"}
        </p>
      )}
    </div>
  );
};

export default Table;
export type TTableSortingState = SortingState;
