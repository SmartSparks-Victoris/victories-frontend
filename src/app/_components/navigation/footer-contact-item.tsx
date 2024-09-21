import React, { FC } from 'react';

import { FooterContactItemProps } from '@/app/_types/navigation.types';

const FooterContactItem: FC<FooterContactItemProps> = ({ children, text }) => {
  return (
    <div className="flex gap-[8px] items-center">
      <span>{children}</span>
      <p>{text}</p>
    </div>
  );
};

export default FooterContactItem;

