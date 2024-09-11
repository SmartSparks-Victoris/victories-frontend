import { FieldError, UseFormRegister } from 'react-hook-form';

export interface TextInputProps {
  label: string;
  type: string; // Input type, e.g., 'text', 'password', 'email', etc.
  name: string; // Name of the input field
  error?: FieldError; // Optional error object
  register: UseFormRegister<any>; // Use appropriate form type if available
  placeholder?: string; // Optional placeholder text
}

