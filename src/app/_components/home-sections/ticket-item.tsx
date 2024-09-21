import React, { FC } from 'react';

import CompletedTicketSVG from '../svg/completed-ticket';
import CustomLink from '../navigation/custom-link';
import { HomeTicketItemProps } from '@/app/_types/admin.types';
import InprogressTicketSVG from '../svg/inprogress-ticket';
import OpenTicketSVG from '../svg/open-ticket';
import UrgentTicketSVG from '../svg/urgent-ticket';

const TicketItem: FC<HomeTicketItemProps> = ({
  type,
  text,
  number,
  percentage,
  href,
}) => {
  let svg;
  let color;

  if (type === 'inProgress') {
    svg = <InprogressTicketSVG />;
    color = 'var(--inProgressStroke)';
  } else if (type === 'open') {
    svg = <OpenTicketSVG />;
    color = 'var(--openStroke)';
  } else if (type === 'completed') {
    svg = <CompletedTicketSVG />;
    color = 'var(--completedStroke)';
  } else if (type === 'urgent') {
    svg = <UrgentTicketSVG />;
    color = 'var(--urgentStroke)';
  }

  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: `${color}`,
    height: '100%',
    borderRadius: '4px',
  };

  return (
    <CustomLink
      href={href}
      className="rounded-[16px] bg-[#745865] p-[24px] flex flex-col gap-[48px] text-textWhite w-[100%] text-start">
      <div className="flex flex-col gap-[8px]">
        {svg}
        <p className="text-[14px] text-roboto">{text}</p>
      </div>
      <div className="w-[100%] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] ">
          <p>{number} Tickets</p>
          <div>|</div>
          <p>{percentage}%</p>
        </div>
        <div className="w-[100%] bg-textWhite h-[5px] rounded-full">
          <div style={barStyle}></div>
        </div>
      </div>
    </CustomLink>
  );
};

export default TicketItem;

