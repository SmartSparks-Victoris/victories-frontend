import React, { FC } from 'react';

import { StatisticsItemProps } from '@/app/_types/guest.types';

const StatisticsItem: FC<StatisticsItemProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h2 className="font-roboto text-[48px] font-bold">{number}</h2>
      <p className="text-[24px] font-medium">{text}</p>
    </div>
  );
};

export default StatisticsItem;

