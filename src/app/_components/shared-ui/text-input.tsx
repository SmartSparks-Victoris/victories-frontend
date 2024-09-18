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
    <div className="flex flex-col gap-[16px]">
      <label htmlFor={name} className="text-[22px] font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder && placeholder}
        className={`border-[2px] border-solid rounded-[16px] p-[16px] w-[100%] bg-backgroundColor ${
          error ? 'border-errorColor' : 'border-borderColor'
        }`}
      />
      {error && (
        <p className="text-[14px] font-medium text-errorColor">
          * {error.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;

