import { Meta, StoryFn } from "@storybook/react";
import DatePicker from ".";
import React, { useState } from "react";
import { TDatePickerProps } from "./datePicker.types";

export default {
  title: "DatePicker",
  component: DatePicker,
} as Meta;

const Template: StoryFn<TDatePickerProps> = (args: TDatePickerProps) => {
  const [date, setDate] = useState<string | undefined>();

  return (
    <div className="flex h-96 w-fit flex-col gap-3">
      <DatePicker
        {...args}
        wrapperClassName="w-96"
        value={date}
        onChange={setDate}
        label="Select Date"
        placeholder="Select Date"
      />
      {!!date && <div className="text-secondary">Selected Date: {date}</div>}
    </div>
  );
};

export const DatePickerDefault = Template.bind({});
DatePickerDefault.args = {};

export const DatePickerRequired = Template.bind({});
DatePickerRequired.args = {
  required: true,
};

export const DatePickerClearable = Template.bind({});
DatePickerClearable.args = {
  clearable: true,
};

export const DatePickerWithMaxDate = Template.bind({});
DatePickerWithMaxDate.args = {
  disabled: {
    after: new Date(),
  },
};

export const DatePickerWithMinDate = Template.bind({});
DatePickerWithMinDate.args = {
  disabled: {
    before: new Date(),
  },
};

export const DatePickerWithDisabledDayOfWeek = Template.bind({});
DatePickerWithDisabledDayOfWeek.args = {
  disabled: {
    dayOfWeek: [0, 6],
  },
};

export const DatePickerInline = Template.bind({});
DatePickerInline.args = {
  inline: true,
};

export const DatePickerDisabled = Template.bind({});
DatePickerDisabled.args = {
  disabled: true,
  isDisabled: true,
};

export const DatePickerCustomFormatter = Template.bind({});
DatePickerCustomFormatter.args = {
  formatterFn: (date: string) => date,
};

export const DatePickerWithTimezone = Template.bind({});
DatePickerWithTimezone.args = {
  placeholder: "Timezone: America/Los_Angeles",
  timeZone: "America/Los_Angeles",
};

export const WithMonthYearPicker = Template.bind({});
WithMonthYearPicker.args = {
  captionLayout: "dropdown",
};

export const DatePickerWithError = Template.bind({});
DatePickerWithError.args = {
  label: "Error",
  error: "Please select a date",
};
