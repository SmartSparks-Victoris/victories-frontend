'use client';

import { ButtonProps } from '@/app/_types/shared-ui.types';
import React from 'react';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children = '',
  onClick = () => {},
  type = 'button',
  value = 'submit',
  className = '',
  variant = 'default',
  variantColor = 'none',
}) => {
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
    } else if (variantColor === 'dark') {
      extraClasses =
        'border-[1px] border-solid border-[#7E4556] text-[#7E4556] font-semibold';
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

