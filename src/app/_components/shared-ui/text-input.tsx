import React, { FC } from 'react';

import { TextInputProps } from '@/app/_types/text-input.types';

const TextInput: FC<TextInputProps> = ({
  label,
  labelColor = 'none',
  type,
  name,
  error,
  register,
  placeholder,
}) => {
  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-[16px]">
        <label
          htmlFor={name}
          className={`text-[22px] font-medium ${
            labelColor === 'white' && 'text-textWhite'
          }`}>
          {label}
        </label>
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder && placeholder}
          className={`border-[2px] border-solid rounded-[16px] p-[16px] w-[100%] bg-backgroundColor resize-none text-black ${
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
  }
  return (
    <div className="flex flex-col gap-[16px]">
      <label
        htmlFor={name}
        className={`text-[22px] font-medium ${
          labelColor === 'white' && 'text-textWhite'
        }`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder && placeholder}
        className={`border-[2px] border-solid rounded-[16px] p-[16px] w-[100%] bg-backgroundColor text-black ${
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

