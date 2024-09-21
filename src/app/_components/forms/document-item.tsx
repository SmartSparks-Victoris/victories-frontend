import React, { FC } from 'react';

import { DocumentItemProps } from '@/app/_types/guest.types';

const DocumentItem: FC<DocumentItemProps> = ({ head, text }) => {
  return (
    <div className="flex flex-col gap-[8px] w-[100%]">
      <h3 className="text-[#1A1A1A] font-medium text-[22px]">{head}</h3>
      <p className="text-[#666666] font-medium text-[20px]">{text}</p>
    </div>
  );
};

export default DocumentItem;

