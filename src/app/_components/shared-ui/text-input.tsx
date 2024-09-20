import React, { FC } from 'react';

import { TextInputProps } from '@/app/_types/text-input.types';

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
    <div className="flex flex-col gap-[16px] w-[100%]">
      {label && (
        <label
          htmlFor={name}
          className={`text-[22px] font-medium ${
            labelColor === 'white' && 'text-textWhite'
          }`}>
          {label}
        </label>
      )}
      <div
        className={`border-[2px] border-solid rounded-[16px] px-[16px] w-[100%] bg-backgroundColor text-black flex gap-[10px] items-center ${
          error ? 'border-errorColor' : 'border-borderColor'
        }`}>
        {icon && icon === 'search' && iconSubmit === false && (
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.9399 19.2108L15.4877 14.7567C16.8226 13.0171 17.4458 10.8349 17.2309 8.65278C17.0161 6.4706 15.9792 4.45187 14.3306 3.00607C12.6821 1.56028 10.5453 0.795694 8.35376 0.867419C6.16221 0.939143 4.07999 1.84181 2.5295 3.3923C0.979013 4.94279 0.0763502 7.025 0.00462578 9.21655C-0.0670986 11.4081 0.697486 13.5449 2.14328 15.1934C3.58907 16.842 5.60781 17.8789 7.78998 18.0937C9.97216 18.3086 12.1544 17.6854 13.8939 16.3505L18.3499 20.8073C18.4545 20.912 18.5787 20.995 18.7155 21.0516C18.8522 21.1083 18.9987 21.1374 19.1467 21.1374C19.2947 21.1374 19.4413 21.1083 19.578 21.0516C19.7147 20.995 19.839 20.912 19.9436 20.8073C20.0482 20.7027 20.1313 20.5785 20.1879 20.4417C20.2445 20.305 20.2737 20.1584 20.2737 20.0105C20.2737 19.8625 20.2445 19.7159 20.1879 19.5792C20.1313 19.4425 20.0482 19.3182 19.9436 19.2136L19.9399 19.2108ZM2.26891 9.50671C2.26891 8.24585 2.6428 7.01331 3.3433 5.96495C4.04379 4.91658 5.03943 4.09948 6.20431 3.61698C7.36919 3.13447 8.65099 3.00822 9.88762 3.2542C11.1242 3.50018 12.2602 4.10734 13.1517 4.9989C14.0433 5.89046 14.6504 7.02638 14.8964 8.26301C15.1424 9.49964 15.0162 10.7814 14.5336 11.9463C14.0511 13.1112 13.234 14.1068 12.1857 14.8073C11.1373 15.5078 9.90477 15.8817 8.64392 15.8817C6.95369 15.88 5.3332 15.2078 4.13803 14.0126C2.94286 12.8174 2.27065 11.1969 2.26891 9.50671Z"
              fill="#7E4556"
            />
          </svg>
        )}

        {icon && icon === 'search' && iconSubmit === true && (
          <button type="submit">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.9399 19.2108L15.4877 14.7567C16.8226 13.0171 17.4458 10.8349 17.2309 8.65278C17.0161 6.4706 15.9792 4.45187 14.3306 3.00607C12.6821 1.56028 10.5453 0.795694 8.35376 0.867419C6.16221 0.939143 4.07999 1.84181 2.5295 3.3923C0.979013 4.94279 0.0763502 7.025 0.00462578 9.21655C-0.0670986 11.4081 0.697486 13.5449 2.14328 15.1934C3.58907 16.842 5.60781 17.8789 7.78998 18.0937C9.97216 18.3086 12.1544 17.6854 13.8939 16.3505L18.3499 20.8073C18.4545 20.912 18.5787 20.995 18.7155 21.0516C18.8522 21.1083 18.9987 21.1374 19.1467 21.1374C19.2947 21.1374 19.4413 21.1083 19.578 21.0516C19.7147 20.995 19.839 20.912 19.9436 20.8073C20.0482 20.7027 20.1313 20.5785 20.1879 20.4417C20.2445 20.305 20.2737 20.1584 20.2737 20.0105C20.2737 19.8625 20.2445 19.7159 20.1879 19.5792C20.1313 19.4425 20.0482 19.3182 19.9436 19.2136L19.9399 19.2108ZM2.26891 9.50671C2.26891 8.24585 2.6428 7.01331 3.3433 5.96495C4.04379 4.91658 5.03943 4.09948 6.20431 3.61698C7.36919 3.13447 8.65099 3.00822 9.88762 3.2542C11.1242 3.50018 12.2602 4.10734 13.1517 4.9989C14.0433 5.89046 14.6504 7.02638 14.8964 8.26301C15.1424 9.49964 15.0162 10.7814 14.5336 11.9463C14.0511 13.1112 13.234 14.1068 12.1857 14.8073C11.1373 15.5078 9.90477 15.8817 8.64392 15.8817C6.95369 15.88 5.3332 15.2078 4.13803 14.0126C2.94286 12.8174 2.27065 11.1969 2.26891 9.50671Z"
                fill="#7E4556"
              />
            </svg>
          </button>
        )}

        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder={placeholder && placeholder}
          className="bg-transparent py-[16px] px-[4px] border-none outline-none w-[100%]"
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

