'use client';

import React from 'react';
import { useRouter } from 'nextjs-toploader/app';

const CustomLink = ({ children, href }) => {
  const router = useRouter();
  function handleClick() {
    router.push(href);
  }
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default CustomLink;

