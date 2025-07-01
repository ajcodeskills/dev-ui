import { twMerge } from "tailwind-merge";
import { DOTS, usePagination } from "./usePagination";
import PageSizeSelect from "./PageSizeSelect";
import PageJump from "./PageJump";
import PageInfo from "./PageInfo";

export type Option = {
  label: string;
  value: number;
};

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number, size?: number) => void;
  size?: number;
  siblingCount?: number;
  className?: string;
  pageSizeOptions?: Option[];
  totalRecords?: number;
  withPageSizeSelect?: boolean;
  withPageJump?: boolean;
  withPageInfo?: boolean;
};
type TPagination = React.FC<PaginationProps> & {
  Info: typeof PageInfo;
  Select: typeof PageSizeSelect;
  Jump: typeof PageJump;
};

const Pagination: TPagination = ({
  currentPage,
  totalPages,
  totalRecords,
  onPageChange,
  size = 10,
  siblingCount = 1,
  className,
  pageSizeOptions,
  withPageSizeSelect,
  withPageJump,
  withPageInfo,
}) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;
  const pageItems = usePagination({
    currentPage,
    totalPages,
    siblingCount,
  });

  return (
    <div
      className={twMerge(
        "flex items-center gap-1 text-sm font-medium text-primary",
        className,
      )}
    >
      {withPageInfo && (
        <PageInfo
          totalRecords={totalRecords || totalPages * size}
          currentPage={currentPage}
          size={size}
          className={className}
        />
      )}
      <button
        onClick={() => onPageChange(currentPage - 1, size)}
        disabled={!showPrevious}
        className="cursor-pointer rounded-md px-2 py-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {"<"}
      </button>
      {pageItems.map((page, i) =>
        page === DOTS ? (
          <span key={i} className="cursor-default px-1.5 py-0.5 opacity-50">
            &#8230;
          </span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(page, size)}
            className={twMerge(
              "rounded-md px-2 py-0.5 hover:bg-primary-hover",
              currentPage === page &&
                "text-brand-primary ring-1 ring-brand-primary",
            )}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1, size)}
        disabled={!showNext}
        className="cursor-pointer rounded-md px-2  py-0.5 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {">"}
      </button>
      {withPageSizeSelect && (
        <PageSizeSelect
          options={pageSizeOptions}
          onPageChange={onPageChange}
          size={size}
          className={className}
        />
      )}
      {withPageJump && (
        <PageJump
          onPageChange={onPageChange}
          size={size}
          className={className}
        />
      )}
    </div>
  );
};

Pagination.Info = PageInfo;
Pagination.Select = PageSizeSelect;
Pagination.Jump = PageJump;
export default Pagination;
