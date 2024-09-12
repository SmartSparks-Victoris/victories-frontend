import React, { FC } from 'react';

import { TextInputProps } from '@/app/_types/text-input.types';

const TextInput: FC<TextInputProps> = ({
  label,
  type,
  name,
  error,
  register,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder && placeholder}
      />
      {error && <p className="fieldError">{error.message}</p>}
    </div>
  );
};

export default TextInput;

