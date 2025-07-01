import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import { TCommonElementSize } from "../../types/common.type";

import Input from "../Input";
import RadioGroup from "../RadioGroup";
import Checkbox from "../Checkbox";
import Toggle from "../Toggle";
import Select from "../Select";
import TextArea from "../TextArea";
import DatePicker from "../DatePicker";
import DateRangePicker from "../DateRangePicker";
import InfoBanner from "../InfoBanner";
import Chip from "../Chip";
import Button from "../Button";

export default {
  title: "Form",
  component: () => <div></div>,
} as Meta;

const Template: StoryFn = () => {
  const [size, setSize] = useState<TCommonElementSize>("md");

  return (
    <div className="flex w-96 flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p>Common elements Size</p>
        <div className="flex items-start gap-4">
          <Button
            size="xs"
            variant={size === "xs" ? "primary" : "outlined"}
            onClick={() => setSize("xs")}
          >
            xs
          </Button>
          <Button
            size="sm"
            variant={size === "sm" ? "primary" : "outlined"}
            onClick={() => setSize("sm")}
          >
            sm
          </Button>
          <Button
            size="md"
            variant={size === "md" ? "primary" : "outlined"}
            onClick={() => setSize("md")}
          >
            md
          </Button>
          <Button
            size="lg"
            variant={size === "lg" ? "primary" : "outlined"}
            onClick={() => setSize("lg")}
          >
            lg
          </Button>
        </div>
      </div>

      <Input
        label="First Name"
        placeholder="Enter first name"
        required
        size={size}
      />
      <Input label="Last Name" placeholder="Enter last name" size={size} />

      <RadioGroup
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        name="dummy"
        label="Select Gender"
        helper="Please select gender"
        className="flex flex-row gap-2"
        size={size}
      />

      <div className="flex flex-col gap-2">
        <Checkbox label="This is first checkbox option" size={size} />
        <Checkbox label="Second checkbox option" size={size} />
        <Checkbox label="Third checkbox option" size={size} />
        <Checkbox label="Forth checkbox option" size={size} />
      </div>

      <div className="flex flex-col gap-2">
        <Toggle label="Can we turn on the toggle" size={size} />
        <Toggle label="Toggle the second option" size={size} />
        <Toggle label="Third option to be toggled" size={size} />
      </div>

      <Select
        required
        label="Select an option"
        size={size}
        options={[
          { label: "Option 1", value: "option_1" },
          { label: "Option 2", value: "option_2" },
          { label: "Option 3", value: "option_3" },
          { label: "Option 4", value: "option_4" },
        ]}
      />

      <Select
        label="Select multiple options"
        size={size}
        isMulti
        options={[
          { label: "Option 1", value: "option_1" },
          { label: "Option 2", value: "option_2" },
          { label: "Option 3", value: "option_3" },
          { label: "Option 4", value: "option_4" },
          { label: "Option 5", value: "option_5" },
          { label: "Option 6", value: "option_6" },
          { label: "Option 7", value: "option_7" },
          { label: "Option 8", value: "option_8" },
        ]}
        closeMenuOnSelect={false}
      />

      <TextArea
        label="Enter your comments"
        placeholder="Enter your comments"
        size={size}
      />

      <DatePicker
        label="DOB"
        placeholder="Please select a date"
        size={size}
        clearable
      />

      <DateRangePicker
        label="Select a date range"
        placeholder="Please select a range"
        size={size}
        clearable
      />

      <div className="flex flex-col gap-2">
        <InfoBanner content="This is an info banner" size={size} />
        <InfoBanner
          variant="secondary"
          content="This is an info banner"
          size={size}
        />
        <InfoBanner
          variant="warning"
          content="This is an info banner"
          size={size}
        />
        <InfoBanner
          variant="error"
          content="This is an info banner"
          size={size}
        />
        <InfoBanner
          variant="success"
          content="This is an info banner"
          size={size}
        />
      </div>

      <div className="flex gap-2">
        <Chip size={size}>Primary</Chip>
        <Chip size={size} variant="secondary">
          Secondary
        </Chip>
        <Chip size={size} variant="warning">
          Warning
        </Chip>
        <Chip size={size} variant="error">
          Error
        </Chip>
        <Chip size={size} variant="success">
          Success
        </Chip>
      </div>

      <div className="flex gap-2">
        <Chip size={size} type="badge">
          Primary
        </Chip>
        <Chip size={size} type="badge" variant="secondary">
          Secondary
        </Chip>
        <Chip size={size} type="badge" variant="warning">
          Warning
        </Chip>
        <Chip size={size} type="badge" variant="error">
          Error
        </Chip>
        <Chip size={size} type="badge" variant="error">
          Success
        </Chip>
      </div>
      <div className="flex gap-2">
        <Button variant="outlined" size={size}>
          Cancel
        </Button>
        <Button size={size}>Save</Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
