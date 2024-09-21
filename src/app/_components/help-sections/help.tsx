import React from 'react';

const Help = () => {
  return (
    <div className="h-[calc(100vh-var(--searchNav)-80px)] overflow-hidden">
      <h1 className="mb-[24px] text-[#1A1A1A] text-[20px] font-medium">
        A Comprehensive Visual Guide to Streamlining and Managing All Your
        Account Settings:
      </h1>
      <div className="">
        <video className="h-[100%]" loop controls>
          <source src="/images/help.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Help;

