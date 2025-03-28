import React, { FC } from 'react';

import SearchInputSVG from '../svg/search-input';
import { TextInputProps } from '@/app/_types/shared-ui.types';

const TextInput: FC<TextInputProps> = ({
  label = '',
  labelColor = 'none',
  type,
  name,
  error,
  register,
  placeholder,
  icon = '',
  iconSubmit = false,
  isPending = false,
}) => {
  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className={`text-[22px] font-medium ${
            labelColor === 'white' && 'text-textNavBarPrimary'
          }`}>
          {label}
        </label>
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder && placeholder}
          disabled={isPending}
          className={`border-[2px] border-solid rounded-md p-[16px] w-[100%] bg-backgroundColor resize-none text-black ${
            error ? 'border-errorColor' : 'border-borderColor'
          } ${isPending && 'bg-gray-300'}`}
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
    <div className="flex flex-col gap-2 w-[100%]">
      {label && (
        <label
          htmlFor={name}
          className={`text-[22px] font-medium ${
            labelColor === 'white' && 'text-textNavBarPrimary'
          }`}>
          {label}
        </label>
      )}
      <div
        className={`border-[2px] border-solid rounded-md px-2 w-[100%] bg-backgroundColor text-black flex gap-[10px] items-center ${
          error ? 'border-errorColor' : 'border-borderColor'
        } ${isPending && 'bg-gray-300'}`}>
        {icon && icon === 'search' && iconSubmit === false && (
          <SearchInputSVG />
        )}

        {icon && icon === 'search' && iconSubmit === true && (
          <button type="submit">
            <SearchInputSVG />
          </button>
        )}

        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder={placeholder && placeholder}
          disabled={isPending}
          className={`bg-transparent py-2 px-[4px] border-none outline-none w-[100%]`}
        />
      </div>
      {error && (
        <p className="text-[14px] font-medium text-errorColor">
          * {error.message}
        </p>
      )}
    </div>
  );
};

export default TextInput;

