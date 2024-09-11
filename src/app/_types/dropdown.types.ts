import { FieldError, UseFormRegister } from 'react-hook-form';

export interface DropDownProps {
  name: string;
  label: string;
  register: UseFormRegister<any>; // Use appropriate type if you have a specific form type
  array: readonly string[];
  error?: FieldError; // `error` is optional and is typed as FieldError
}

