'use client';

import React, { FC } from 'react';

import Button from '../shared-ui/button';
import { CustomLinkProps } from '@/app/_types/navigation.types';
import { useRouter } from 'nextjs-toploader/app';

const CustomLink: FC<CustomLinkProps> = ({
  children,
  href,
  className = '',
  type = 'link',
  variant = 'default',
  variantColor = 'none',
}) => {
  const router = useRouter();
  function handleClick() {
    router.push(href);
  }

  if (type === 'button') {
    return (
      <Button
        onClick={handleClick}
        className={className}
        variant={variant}
        variantColor={variantColor}>
        {children}
      </Button>
    );
  }
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default CustomLink;

