'use client';

import Button from '../shared-ui/button';
import React from 'react';
import { useRouter } from 'nextjs-toploader/app';

const CustomLink = ({
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

