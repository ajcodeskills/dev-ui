import { TQuickRangeOption } from "./dateRangePicker.types";

export const QUICK_RANGE_OPTIONS: TQuickRangeOption[] = [
  { id: "TODAY", label: "Today", from: "2024-12-09", to: "2024-12-09" },
  {
    id: "LAST_7_DAYS",
    label: "Last 7 Days",
    from: "2024-12-03",
    to: "2024-12-09",
  },
  {
    id: "LAST_30_DAYS",
    label: "Last 30 Days",
    from: "2024-11-08",
    to: "2024-12-09",
  },
  {
    id: "LAST_365_DAYS",
    label: "Last 365 Days",
    from: "2023-12-08",
    to: "2024-12-09",
  },
  {
    id: "THIS_MONTH",
    label: "This Month",
    from: "2024-12-01",
    to: "2024-12-31",
  },
  {
    id: "THIS_QUARTER",
    label: "This Quarter",
    from: "2024-10-01",
    to: "2024-12-31",
  },
  { id: "THIS_YEAR", label: "This Year", from: "2024-01-01", to: "2024-12-31" },
];
