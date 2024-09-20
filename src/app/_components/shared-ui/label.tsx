import React from 'react';

const Label = ({ type = 'danger', children }) => {
  if (type === 'danger') {
    return (
      <div className="text-openStroke bg-openColor text-[14px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-openStroke">
        {children}
      </div>
    );
  } else if (type === 'inProgress') {
    return (
      <div className="text-inProgressStroke bg-inProgressColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-inProgressStroke">
        {type}
      </div>
    );
  } else if (type === 'success') {
    return (
      <div className="text-completedStroke bg-completedColor text-[14px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-completedStroke">
        {children}
      </div>
    );
  }
};

export default Label;

