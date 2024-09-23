import {
  Control,
  FieldError,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  value?: string;
  className?: string;
  variant?: string;
  variantColor?: string;
  isPending?: boolean;
};

export type TextInputProps = {
  label: string;
  type: string;
  name: string;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  placeholder?: string;
  labelColor?: string;
  icon?: string;
  iconSubmit?: boolean;
  isPending?: boolean;
};

export type DropDownProps = {
  name?: string;
  label?: string;
  array?: readonly string[] | { id: string | number; name: string };
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  setSelectedDropDown?: (name: string) => void;
  handleChange?: (value: number) => void;
  all?: boolean;
  defaultValue?: null | string | number;
  isOpen?: boolean;
};

export type ActionButtonProps = {
  onClick: () => void;
  type?: string;
};

export type LabelProps = {
  children: ReactNode;
  type?: string;
};

export type ChartProps = {
  labels: string[];
  values: number[];
  colors: string[];
  head: string;
};

export type FileUploadProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
};

export type ResultsHeadProps = {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results?: null | Array<any>;
  icon?: string;
  result?: string;
};

export type RowViewProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  data: {
    tickets?: string | number;
    date?: string;
    id?: string | number;
    img?: string;
    name?: string;
    number?: string;
  };
  type: string;
  href: string;
};

export type StatusProps = {
  status: string;
};

export type MessageAndRedirectProps = {
  nextPage: string;
  src: string;
  text: string;
  text2?: string;
};

export type TransitionProps = {
  from: string;
  children: ReactNode;
  delay?: number;
  className?: string;
};

