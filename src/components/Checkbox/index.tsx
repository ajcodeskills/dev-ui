import { forwardRef, ForwardedRef } from "react";

import SelectionInput, { TSelectionInputProps } from "../SelectionInput";

export type TCheckboxProps = Omit<TSelectionInputProps, "type">;

const Checkbox = forwardRef(
  (props: TCheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <SelectionInput {...props} type="checkbox" ref={ref} />;
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
