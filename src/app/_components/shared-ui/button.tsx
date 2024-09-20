'use client';

import React from 'react';
import { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children?: string | ReactNode; // Accepts a string or any valid React node (including SVGs)
  onClick?: MouseEventHandler<HTMLButtonElement>; // Handles the onClick event for a button
  type?: 'button' | 'submit' | 'reset'; // Specifies the type of button
  value?: string; // Value can be a string like 'submit'
  className?: string; // Additional class names for styling
  variant?: 'default' | 'primary' | 'secondary'; // Variant of the button
  variantColor?: string; // Color variant for customization
}

const Button: React.FC<ButtonProps> = ({
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
    'cursor-pointer py-[12px] px-[40px] sm:px-[104px] rounded-[16px] text-[24px]';
  let extraClasses = '';

  if (variant === 'solid') {
    if (variantColor === 'none') {
      extraClasses = 'bg-textWhite text-[#1A1A1A] font-semibold';
    } else {
      extraClasses = 'bg-textWhite text-[#1A1A1A] font-semibold';
    }
  } else if (variant === 'outline') {
    if (variantColor === 'none') {
      extraClasses =
        'border-[1px] border-solid border-white text-white font-semibold';
    }
  } else {
    extraClasses =
      'bg-[url("/images/service-background.png")] bg-cover font-medium text-textWhite';
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

