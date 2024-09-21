'use client';

import React, { FC } from 'react';

import CustomLink from './custom-link';
import { GuestNavbarItemProps } from '@/app/_types/navigation.types';
import { isActive } from '@/app/_utils/navigation';
import { usePathname } from 'next/navigation';

const GuestNavbarItem: FC<GuestNavbarItemProps> = ({ href, text }) => {
  const pathname = usePathname();
  return (
    <li>
      <CustomLink
        href={href}
        className={`${
          isActive(href, pathname) ? 'font-bold text-white' : 'text-white/80'
        }`}>
        {text}
      </CustomLink>
    </li>
  );
};

export default GuestNavbarItem;

