'use client';

import React from 'react';
import { useRouter } from 'nextjs-toploader/app';

const CustomLink = ({ children, href, className = '' }) => {
  const router = useRouter();
  function handleClick() {
    router.push(href);
  }
  return (
    <div>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default CustomLink;

