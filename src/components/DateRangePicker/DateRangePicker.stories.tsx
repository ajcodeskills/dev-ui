import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import DateRangePicker from ".";
import { QUICK_RANGE_OPTIONS } from "./quickRange.constants";
import { TDateRange, TDateRangePickerProps } from "./dateRangePicker.types";

export default {
  title: "DateRangePicker",
  component: DateRangePicker,
} as Meta;

const Template: StoryFn<TDateRangePickerProps> = (args) => {
  const [dateRange, setDateRange] = useState<TDateRange | undefined>();

  return (
    <div className="h-96 gap-3 bg-primary">
      <DateRangePicker
        {...args}
        value={dateRange}
        onChange={setDateRange}
        label="Date Range"
        placeholder="Select Date Range"
        wrapperClassName="w-96"
      />
      {!!dateRange && (
        <div className="mt-4 text-secondary">
          Selected Range:
          {dateRange?.from}
          {" - "}
          {dateRange?.to}
        </div>
      )}
    </div>
  );
};

export const DefaultDateRangePicker = Template.bind({});
DefaultDateRangePicker.args = {};

export const DateRangePickerNumberOfMonths = Template.bind({});
DateRangePickerNumberOfMonths.args = {
  numberOfMonths: 3,
};

export const DateRangePickerRequired = Template.bind({});
DateRangePickerRequired.args = {
  required: true,
};

export const DateRangePickerClearable = Template.bind({});
DateRangePickerClearable.args = {
  clearable: true,
};

export const DateRangePickerWithMaxDate = Template.bind({});
DateRangePickerWithMaxDate.args = {
  disabled: {
    after: new Date(),
  },
};

export const DateRangePickerWithMinDate = Template.bind({});
DateRangePickerWithMinDate.args = {
  disabled: {
    before: new Date(),
  },
};

export const DateRangePickerWithDisabledDayOfWeek = Template.bind({});
DateRangePickerWithDisabledDayOfWeek.args = {
  disabled: {
    dayOfWeek: [0, 6],
  },
};

export const DateRangePickerInline = Template.bind({});
DateRangePickerInline.args = {
  inline: true,
  wrapperClassName: "w-full",
};

export const DateRangePickerDisabled = Template.bind({});
DateRangePickerDisabled.args = {
  disabled: true,
  wrapperClassName: "w-full",
};

export const DateRangePickerWithQuickRange = Template.bind({});
DateRangePickerWithQuickRange.args = {
  quickRangeOptions: QUICK_RANGE_OPTIONS,
};

export const DateRangeWithFixedNumberOfDays = Template.bind({});
DateRangeWithFixedNumberOfDays.args = {
  label: "Fixed 14 Days",
  fixedDays: 14,
};

export const DateRangePickerCustomFormatter = Template.bind({});
DateRangePickerCustomFormatter.args = {
  formatterFn: (date: string) => date,
};

export const DateRangePickerWithTimezone = Template.bind({});
DateRangePickerWithTimezone.args = {
  placeholder: "Timezone: America/Los_Angeles",
  timeZone: "America/Los_Angeles",
};

export const DateRangeWithMonthYearPicker = Template.bind({});
DateRangeWithMonthYearPicker.args = {
  label: "Month Year Picker",
  captionLayout: "dropdown",
};

export const DateRangePickerWithError = Template.bind({});
DateRangePickerWithError.args = {
  label: "Error",
  error: "This is an error",
};
