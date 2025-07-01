import Select, {
  CSSObjectWithLabel,
  GroupBase,
  StylesConfig,
} from "react-select";
import AsyncSelect from "react-select/async";
import { AsyncProps } from "react-select/async";
import { twMerge } from "tailwind-merge";
import AsyncCreatable from "react-select/async-creatable";
import Creatable from "react-select/creatable";
import { TCommonElementSize } from "../../types/common.type";
import { formElementTextSizeClasses } from "../../constants/common.constants";

const controlStyles = {
  base: "border border-primary shadow-sm rounded-md bg-transparent !cursor-pointer focus-within:ring-2 focus-within:ring-brand-primary-medium",
  focus: "border-brand-primary",
};
const container = "!min-h-7 !pointer-events-auto";
const placeholderStyles = "text-secondary bg-transparent text-sm";
const selectInputStyles = "bg-transparent text-primary text-sm";
const valueContainerStyles =
  "bg-transparent gap-1 px-2.5 py-0.5 overflow-hidden";
const singleValueStyles = "p1 bg-transparent text-sm text-primary";
const multiValueStyles =
  "p1 text-sm text-primary bg-secondary hover:bg-secondary-hover pl-1 rounded max-w-[95%] items-center";
const multiValueLabelStyles = "";
const multiValueRemoveStyles =
  " w-5 h-5 bg-transparent hover:text-error text-secondary m-auto flex justify-center items-center";
const indicatorsContainerStyles = "p-0 gap-0";
const clearIndicatorStyles =
  "text-secondary p-0 rounded-md hover:bg-primary-hover hover:text-error mr-0.5";
const indicatorSeparatorStyles = "bg-grey";
const dropdownIndicatorStyles =
  "px-1 hover:bg-primary-hover text-secondary hover:text-secondary-hover rounded-tr-md rounded-br-md h-full items-center";
const menuStyles =
  "mt-2 border text-sm border-primary bg-primary rounded-lg overflow-auto cursor-pointer shadow-2";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-primary text-sm";
const optionStyles = {
  base: "!cursor-pointer py-2 px-2.5 text-sm text-primary bg-primary mb-1",
  focus: "bg-primary-hover text-primary active:bg-primary-hover",
  selected:
    "bg-secondary-hover active:bg-secondary-hover hover:bg-primary-hover",
};
const noOptionsMessageStyles =
  "text-secondary p-2 bg-secondary border border-tertiary rounded-sm";

const heightClasses: Record<TCommonElementSize, string> = {
  xs: "1.75rem",
  sm: "2rem",
  md: "2.25rem",
  lg: "2.5rem",
};

const menuSizeClasses: Record<TCommonElementSize, string> = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};
type TBaseSelectProps = {
  error?: boolean;
  strategy?: "default" | "fixed";
  isCreatable?: boolean;
  size: TCommonElementSize;
};
const BaseSelect = <
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>({
  error,
  isDisabled,
  isCreatable = false,
  strategy = "fixed",
  options,
  size,
  id,
  ...rest
}: AsyncProps<OptionType, IsMulti, GroupType> & TBaseSelectProps) => {
  let Parent = Select;

  if (isCreatable) {
    Parent = Creatable;
  }

  if (rest.loadOptions) {
    Parent = isCreatable ? AsyncCreatable : AsyncSelect;
  }

  const isStrategyFixed = strategy === "fixed";
  const portalProps = isStrategyFixed && {
    menuPortalTarget: document.body,
    menuPosition: "fixed" as const,
  };

  return (
    <Parent
      hideSelectedOptions={false}
      unstyled
      isDisabled={isDisabled}
      id={id}
      inputId={id}
      menuPlacement="auto"
      styles={
        {
          input: (base) =>
            ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }) as CSSObjectWithLabel,
          control: (base) =>
            ({
              ...base,
              "min-height": heightClasses[size],
              transition: "none",
            }) as CSSObjectWithLabel,
          menu: (base) =>
            ({
              ...base,
              width: "max-content",
              minWidth: "100%",
              maxWidth: "50vw",
            }) as CSSObjectWithLabel,
          ...(isStrategyFixed && {
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }),
        } as StylesConfig<OptionType, IsMulti, GroupType>
      }
      classNames={{
        container: () => twMerge(container),
        control: ({ isFocused }) =>
          twMerge(
            controlStyles.base,
            isFocused && controlStyles.focus,
            error && "border-error",
            isDisabled && "border-secondary bg-secondary !cursor-not-allowed",
            formElementTextSizeClasses[size],
          ),
        placeholder: () =>
          twMerge(placeholderStyles, formElementTextSizeClasses[size]),
        input: () =>
          twMerge(selectInputStyles, formElementTextSizeClasses[size]),
        valueContainer: () =>
          twMerge(valueContainerStyles, formElementTextSizeClasses[size]),
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () =>
          twMerge(multiValueLabelStyles, formElementTextSizeClasses[size]),
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () =>
          twMerge(dropdownIndicatorStyles, isDisabled && "hover:bg-secondary"),
        menu: () => twMerge(menuStyles, formElementTextSizeClasses[size]),
        groupHeading: () =>
          twMerge(groupHeadingStyles, formElementTextSizeClasses[size]),
        option: ({ isFocused, isSelected }) =>
          twMerge(
            optionStyles.base,
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            formElementTextSizeClasses[size],
            menuSizeClasses[size],
          ),
        noOptionsMessage: () =>
          twMerge(noOptionsMessageStyles, formElementTextSizeClasses[size]),
      }}
      options={options}
      {...rest}
      {...portalProps}
    />
  );
};

export default BaseSelect;
