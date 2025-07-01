import { forwardRef, ForwardedRef } from "react";

import SelectionInput, { TSelectionInputProps } from "../SelectionInput";

export type TRadioProps = Omit<TSelectionInputProps, "type">;

const Radio = forwardRef(
  (props: TRadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <SelectionInput {...props} type="radio" ref={ref} />;
  },
);

Radio.displayName = "Radio";

export default Radio;
