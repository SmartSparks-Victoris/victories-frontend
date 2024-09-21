import React, { FC } from 'react';

import { DocumentItemProps } from '@/app/_types/guest.types';

const DocumentItem: FC<DocumentItemProps> = ({ head, text }) => {
  return (
    <div className="flex flex-col gap-1 w-[100%]">
      <h3 className="text-textButtonSecondary font-medium text-[22px]">
        {head}
      </h3>
      <p className="text-textBodyPrimary font-medium text-[20px]">{text}</p>
    </div>
  );
};

export default DocumentItem;

