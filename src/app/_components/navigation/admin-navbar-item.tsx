import React, { FC } from 'react';

import { AdminNavbarItemProps } from '@/app/_types/navigation.types';
import CustomLink from './custom-link';
import { isActive } from '@/app/_utils/navigation';
import { usePathname } from 'next/navigation';

const activeListClass =
  'pl-[16px] after:content-[""] relative after:absolute after:left-0 after:top-0 after:w-[8px] after:h-[100%] after:bg-backgroundOpacity after:rounded-r-[24px]';
const inActiveListClass = 'pl-[32px]';
const activeLinkClass =
  'pl-[16px] rounded-l-full bg-backgroundOpacity py-[12px]';

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
        className={`flex gap-[8px] w-[100%] ${
          isActiveItem ? activeLinkClass : ''
        }`}>
        {isActiveItem ? <OpenIcon /> : <CloseIcon />}
        <p className="font-medium text-[16px] md:flex hidden">{name}</p>
      </CustomLink>
    </li>
  );
};

export default AdminNavbarItem;

