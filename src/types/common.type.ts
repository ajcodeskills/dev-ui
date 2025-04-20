export type TCommonElementSize = 'xs' | 'sm' | 'md' | 'lg';

export type TCommonVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success';

export type TCommonInputElementProps = {
  label?: React.ReactNode;
  error?: React.ReactNode;
  helper?: React.ReactNode;
  size?: TCommonElementSize;
  wrapperClassName?: string;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
};
