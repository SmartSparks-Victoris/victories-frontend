import React from 'react';

const Status = ({ status }) => {
  if (status === 'open') {
    return (
      <div className="text-openStroke bg-openColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-openStroke">
        {status}
      </div>
    );
  } else if (status === 'inProgress') {
    return (
      <div className="text-inProgressStroke bg-inProgressColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-inProgressStroke">
        {status}
      </div>
    );
  } else if (status === 'completed') {
    return (
      <div className="text-completedStroke bg-completedColor text-[12px] px-[20px] py-[7px] rounded-[16px] border-[1px] border-solid border-completedStroke">
        {status}
      </div>
    );
  }
};

export default Status;

