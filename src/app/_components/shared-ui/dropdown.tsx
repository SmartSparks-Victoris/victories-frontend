import React, { FC } from 'react';

import { DropDownProps } from '@/app/_types/dropdown.types';

const DropDown: FC<DropDownProps> = ({
  name,
  label,
  register,
  array,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select {...register(name)} id={name}>
        {array.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <p className="fieldError">{error.message}</p>}
    </div>
  );
};

export default DropDown;

