/* eslint-disable @next/next/no-img-element */
'use client';

import CustomLink from '../_components/navigation/custom-link';
import React from 'react';

const error = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <img src="/images/error.png" alt="" />
      </div>
      <p className="text-textButtonSecondary font-bold text-[32px] font-roboto text-center mt-[10px] mb-5">
        Something went wrong
      </p>
      <CustomLink href="/" type="button" className="w-fit mx-auto">
        Back to home
      </CustomLink>
    </div>
  );
};

export default error;

