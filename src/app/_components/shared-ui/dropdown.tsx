import React, { FC } from 'react';

import ArrowDownSVG from '../svg/arrow-down';
import ArrowUpSVG from '../svg/arrow-up';
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
    <div className="flex flex-col w-[100%] gap-2">
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
                  {isOpen ? <ArrowUpSVG /> : <ArrowDownSVG />}
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

