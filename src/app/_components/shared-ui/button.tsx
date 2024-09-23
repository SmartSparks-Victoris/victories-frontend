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
  isPending = false,
}) => {
  const defaultClasses =
    'cursor-pointer py-[12px] px-5 sm:px-[104px] rounded-md text-[24px]';
  let extraClasses = '';

  if (variant === 'solid') {
    if (variantColor === 'none') {
      extraClasses =
        'bg-textNavBarPrimary text-textButtonSecondary font-semibold';
    } else {
      extraClasses =
        'bg-textNavBarPrimary text-textButtonSecondary font-semibold';
    }
  } else if (variant === 'outline') {
    if (variantColor === 'none') {
      extraClasses = 'border-1 border-white text-white font-semibold';
    } else if (variantColor === 'dark') {
      extraClasses =
        'border-1 border-surfaceTertiary text-surfaceTertiary font-semibold';
    }
  } else {
    extraClasses = `bg-[url("/images/service-background.png")] bg-cover font-medium text-textNavBarPrimary`;
  }

  const combinedClasses = classNames(defaultClasses, extraClasses, className);

  if (type === 'submit') {
    return (
      <input
        type="submit"
        value={isPending ? 'Loading...' : value}
        className={combinedClasses}
      />
    );
  }
  return (
    <button onClick={onClick} className={combinedClasses} disabled={isPending}>
      {isPending ? 'Loading...' : children}
    </button>
  );
};

export default Button;

