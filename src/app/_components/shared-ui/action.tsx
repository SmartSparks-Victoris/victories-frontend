import React from 'react';

const ActionButton = ({ onClick, type = 'delete' }) => {
  if (type === 'delete') {
    return (
      <div
        onClick={onClick}
        className="text-openStroke bg-openColor text-[16px] text-bold px-[20px] py-[7px] rounded-[8px] border-[1px] border-solid border-openStroke">
        Delete
      </div>
    );
  } else if (type === 'inProgress') {
    return (
      <div
        onClick={onClick}
        className="text-inProgressStroke bg-inProgressColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-inProgressStroke">
        {type}
      </div>
    );
  } else if (type === 'completed') {
    return (
      <div
        onClick={onClick}
        className="text-completedStroke bg-completedColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-completedStroke">
        {type}
      </div>
    );
  }
};

export default ActionButton;

