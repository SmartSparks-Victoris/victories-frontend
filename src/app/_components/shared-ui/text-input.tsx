import React from 'react';

const TextInput = ({ label, type, name, error, register, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder && placeholder}
      />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default TextInput;

