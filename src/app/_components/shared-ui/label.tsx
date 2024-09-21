import React, { FC } from 'react';

import { LabelProps } from '@/app/_types/shared-ui.types';
import classNames from 'classnames';

const Label: FC<LabelProps> = ({ type = 'danger', children }) => {
  const mainClass =
    'text-[14px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid';
  let className;
  if (type === 'danger') {
    className = 'text-openStroke bg-openColor border-openStroke';
  } else if (type === 'warning') {
    className =
      'text-inProgressStroke bg-inProgressColor border-inProgressStroke';
  } else if (type === 'success') {
    className =
      'text-completedStroke bg-completedColor  border-completedStroke';
  }

  return <div className={classNames(mainClass, className)}>{children}</div>;
};

export default Label;

