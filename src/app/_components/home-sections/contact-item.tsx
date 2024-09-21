import React, { FC } from 'react';

import { ContactItemProps } from '@/app/_types/guest.types';

const ContactItem: FC<ContactItemProps> = ({ children, text }) => {
  return (
    <div className="flex gap-[24px] items-center">
      {children}
      <p className="text-[24px]">{text}</p>
    </div>
  );
};

export default ContactItem;

