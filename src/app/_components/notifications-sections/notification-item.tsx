import React, { FC } from 'react';

import Label from '../shared-ui/label';
import NotificationFingerSVG from '../svg/notification-finger';
import { NotificationItemProps } from '@/app/_types/admin.types';
import TimeSVG from '../svg/time';

const NotificationItem: FC<NotificationItemProps> = ({
  type,
  typeValue,
  time,
  head,
  description,
}) => {
  return (
    <div className="flex gap-[32px]">
      <NotificationFingerSVG />
      <div className="flex w-[100%] gap-[8px] flex-col">
        <div className="flex justify-between items-center flex-wrap gap-[8px]">
          <Label type={type}>{typeValue}</Label>
          <div className="flex gap-2 items-center">
            <TimeSVG />
            <p>{time}</p>
          </div>
        </div>
        <p className="text-[14px] font-semibold font-roboto text-[#1A1A1A]">
          {head}
        </p>
        <p className="text-[12px] font-semibold text-[#1A1A1A]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;

