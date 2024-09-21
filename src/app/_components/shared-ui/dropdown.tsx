import React, { FC } from 'react';

import { Controller } from 'react-hook-form';
import { DropDownProps } from '@/app/_types/shared-ui.types';

const DropDown: FC<DropDownProps> = ({
  name,
  label,
  control,
  array,
  error,
  setSelectedDropDown,
  isOpen,
  defaultValue = null,
  handleChange = (option) => {},
  all = false,
}) => {
  const handleDropDownClick = () => {
    if (isOpen) {
      setSelectedDropDown(null); // Close dropdown if it's already open
    } else {
      setSelectedDropDown(name); // Open this dropdown
    }
  };

  const handleSelect = (option: string) => {
    setSelectedDropDown(null);
    handleChange(option);
  };

  return (
    <div className="flex flex-col w-[100%] gap-[16px]">
      {label && (
        <label htmlFor={name} className="text-[22px] font-medium">
          {label}
        </label>
      )}
      <div className="relative ">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <div
                onClick={handleDropDownClick}
                className={`border-[2px] border-solid rounded-[16px] p-[16px] pr-[48px] w-[100%] cursor-pointer bg-backgroundColor ${
                  error ? 'border-errorColor' : 'border-borderColor'
                }`}
                onBlur={onBlur}
                ref={ref}>
                {array[0]?.id
                  ? value === -1
                    ? 'All' // Special case when value is -1
                    : array.find((option) => option.id === value)?.name || (
                        <p className="text-placeHolderColor">
                          Select an option
                        </p> // Fallback when no match is found
                      )
                  : value || (
                      <p className="text-placeHolderColor">Select an option</p>
                    )}

                <div className="absolute top-1/2 right-[16px] transform -translate-y-1/2 pointer-events-none">
                  {isOpen && (
                    <svg
                      width="19"
                      height="11"
                      viewBox="0 0 19 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.7813 9.625C18.7821 9.48928 18.7561 9.35474 18.7048 9.22909C18.6535 9.10345 18.5778 8.98917 18.4823 8.89281L10.2323 0.642811C10.1364 0.546153 10.0223 0.469434 9.89666 0.417079C9.771 0.364724 9.63621 0.337769 9.50007 0.337769C9.36393 0.337769 9.22914 0.364724 9.10347 0.417079C8.97781 0.469434 8.86375 0.546153 8.76788 0.642811L0.517882 8.89281C0.323693 9.087 0.2146 9.35037 0.2146 9.625C0.2146 9.89962 0.323693 10.163 0.517882 10.3572C0.71207 10.5514 0.975446 10.6605 1.25007 10.6605C1.52469 10.6605 1.78807 10.5514 1.98226 10.3572L9.50007 2.82906L17.0179 10.3572C17.1138 10.4538 17.2278 10.5306 17.3535 10.5829C17.4791 10.6353 17.6139 10.6622 17.7501 10.6622C17.8862 10.6622 18.021 10.6353 18.1467 10.5829C18.2723 10.5306 18.3864 10.4538 18.4823 10.3572C18.5778 10.2608 18.6535 10.1465 18.7048 10.0209C18.7561 9.89526 18.7821 9.76072 18.7813 9.625Z"
                        fill="var(--borderColor)"
                      />
                    </svg>
                  )}
                  {!isOpen && (
                    <svg
                      width="19"
                      height="11"
                      viewBox="0 0 19 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.7813 1.375C18.7821 1.51072 18.7561 1.64526 18.7048 1.77091C18.6535 1.89655 18.5778 2.01083 18.4823 2.10719L10.2323 10.3572C10.1364 10.4538 10.0223 10.5306 9.89666 10.5829C9.771 10.6353 9.63621 10.6622 9.50007 10.6622C9.36393 10.6622 9.22914 10.6353 9.10347 10.5829C8.97781 10.5306 8.86375 10.4538 8.76788 10.3572L0.517882 2.10719C0.323693 1.913 0.2146 1.64963 0.2146 1.375C0.2146 1.10038 0.323693 0.837004 0.517882 0.642816C0.71207 0.448627 0.975446 0.339533 1.25007 0.339533C1.52469 0.339533 1.78807 0.448627 1.98226 0.642816L9.50007 8.17094L17.0179 0.642816C17.1138 0.546158 17.2278 0.469437 17.3535 0.417082C17.4791 0.364727 17.6139 0.337772 17.7501 0.337772C17.8862 0.337772 18.021 0.364727 18.1467 0.417082C18.2723 0.469437 18.3864 0.546158 18.4823 0.642816C18.5778 0.739176 18.6535 0.853453 18.7048 0.979097C18.7561 1.10474 18.7821 1.23928 18.7813 1.375Z"
                        fill="var(--borderColor)"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border-[1px] border-mainColor border-solid rounded-[16px] shadow-lg overflow-hidden min-w-fit">
                  {all && (
                    <div
                      key={-1}
                      onClick={() => {
                        handleSelect(-1);
                        onChange(-1); // Set the form value
                      }}
                      className={`p-[16px] cursor-pointer hover:bg-listOptionHoverColor hover:text-textColor border-b-[1px] border-solid border-b-mainColor ${
                        value === -1 ? 'bg-mainColor text-white' : ''
                      }`}>
                      All
                    </div>
                  )}
                  {array[0]?.id
                    ? array.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => {
                            handleSelect(option.id);
                            onChange(option.id); // Set the form value
                          }}
                          className={`p-[16px] cursor-pointer hover:bg-listOptionHoverColor hover:text-textColor border-b-[1px] border-solid border-b-mainColor ${
                            value === option.id ? 'bg-mainColor text-white' : ''
                          }`}>
                          {option.name}
                        </div>
                      ))
                    : array.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            handleSelect(option);
                            onChange(option); // Set the form value
                          }}
                          className={`p-[16px] cursor-pointer ${
                            value === option
                              ? ''
                              : 'hover:bg-listOptionHoverColor hover:text-textColor'
                          }  border-b-[1px] border-solid border-b-mainColor ${
                            value === option ? 'bg-mainColor text-white' : ''
                          }`}>
                          {option}
                        </div>
                      ))}
                </div>
              )}
            </>
          )}
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

export default DropDown;

