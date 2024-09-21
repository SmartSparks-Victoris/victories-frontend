import React, { FC } from 'react';

import { AdminNavbarItemProps } from '@/app/_types/navigation.types';
import CustomLink from './custom-link';
import { isActive } from '@/app/_utils/navigation';
import { usePathname } from 'next/navigation';

const activeListClass =
  'pl-2 after:content-[""] relative after:absolute after:left-0 after:top-0 after:w-[8px] after:h-[100%] after:bg-backgroundOpacity after:rounded-r-lg';
const inActiveListClass = 'pl-4';
const activeLinkClass = 'pl-2 rounded-l-full bg-backgroundOpacity py-[12px]';

const AdminNavbarItem: FC<AdminNavbarItemProps> = ({
  href,
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
  name,
}) => {
  const pathname = usePathname();
  const isActiveItem = isActive(href, pathname);

  return (
    <li
      title={name}
      className={`${isActiveItem ? activeListClass : inActiveListClass}`}>
      <CustomLink
        href={href}
        className={`flex gap-1 w-[100%] ${
          isActiveItem ? activeLinkClass : ''
        }`}>
        {isActiveItem ? <OpenIcon /> : <CloseIcon />}
        <p className="caption-16 md:flex hidden">{name}</p>
      </CustomLink>
    </li>
  );
};

export default AdminNavbarItem;

