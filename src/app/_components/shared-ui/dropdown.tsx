import React from 'react';

const DropDown = ({ name, label, register, array, error }) => {
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
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default DropDown;

