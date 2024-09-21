import React, { FC } from 'react';

import { ActionButtonProps } from '@/app/_types/shared-ui.types';
import classNames from 'classnames';

const ActionButton: FC<ActionButtonProps> = ({ onClick, type = 'delete' }) => {
  const mainClass =
    'text-[16px] text-bold px-[20px] py-[7px] rounded-[8px] border-[1px] border-solid';
  let className;
  let text;
  if (type === 'delete') {
    className = 'text-openStroke bg-openColor border-openStroke';
    text = 'Delete';
  } else if (type === 'inProgress') {
    className =
      'text-inProgressStroke bg-inProgressColor border-inProgressStroke';
    text = 'In Progress';
  } else if (type === 'completed') {
    className =
      'text-completedStroke bg-completedColor  border-completedStroke';
    text = 'Completed';
  }

  return (
    <div onClick={onClick} className={classNames(mainClass, className)}>
      {text}
    </div>
  );
};

export default ActionButton;

