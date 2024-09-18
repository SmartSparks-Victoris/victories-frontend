'use client';

import React from 'react';
import classNames from 'classnames';

const Button = ({
  children = '',
  onClick = () => {},
  type = 'button',
  value = 'submit',
  className = '',
  variant = 'default',
  variantColor = 'none',
}) => {
  // const defaultClasses =
  //   'px-4 py-2 border rounded-[16px] cursor-pointer bg-mainColor text-backgroundColor';
  // const defaultClasses =
  //   'bg-[url("/images/background.png")] bg-cover cursor-pointer py-[12px] px-[48px] sm:px-[0px] w-[100%] sm:w-[400px] bg-mainColor rounded-[16px] text-white text-[24px] font-medium ';
  const defaultClasses =
    'cursor-pointer py-[12px] px-[40px] rounded-[16px] text-white text-[24px] font-medium ';
  let extraClasses = '';

  if (variant === 'solid') {
    if (variantColor === 'none') {
      extraClasses = 'bg-white text-black';
    }
  } else if (variant === 'outline') {
    if (variantColor === 'none') {
      extraClasses = 'border-[1px] border-solid border-white text-white';
    }
  } else {
    extraClasses = 'bg-[url("/images/background.png")] bg-cover';
  }

  const combinedClasses = classNames(defaultClasses, extraClasses, className);

  if (type === 'submit') {
    return <input type="submit" value={value} className={combinedClasses} />;
  }
  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;

