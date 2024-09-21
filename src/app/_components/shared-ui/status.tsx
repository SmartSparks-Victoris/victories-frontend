import React, { FC } from 'react';

import { StatusProps } from '@/app/_types/shared-ui.types';
import classNames from 'classnames';

const Status: FC<StatusProps> = ({ status }) => {
  const mainClass = 'text-[12px] px-[20px] py-[7px] rounded-md border-1';
  let className;
  if (status === 'open') {
    className = 'text-openStroke bg-openColor border-openStroke';
  } else if (status === 'inProgress') {
    className =
      'text-inProgressStroke bg-inProgressColor border-inProgressStroke';
  } else if (status === 'completed') {
    className =
      'text-completedStroke bg-completedColor  border-completedStroke';
  }

  return <div className={classNames(mainClass, className)}>{status}</div>;
};

export default Status;

