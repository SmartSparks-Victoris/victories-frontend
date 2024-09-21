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
    <div className="flex gap-4">
      <NotificationFingerSVG />
      <div className="flex w-[100%] gap-1 flex-col">
        <div className="flex justify-between items-center flex-wrap gap-1">
          <Label type={type}>{typeValue}</Label>
          <div className="flex gap-2 items-center">
            <TimeSVG />
            <p>{time}</p>
          </div>
        </div>
        <p className="text-[14px] font-semibold font-roboto text-textButtonSecondary">
          {head}
        </p>
        <p className="text-[12px] font-semibold text-textButtonSecondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;

