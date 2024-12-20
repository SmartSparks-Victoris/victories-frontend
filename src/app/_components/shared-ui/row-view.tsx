/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import ActionButton from './action';
import CustomLink from '../navigation/custom-link';
import { RowViewProps } from '@/app/_types/shared-ui.types';
import { convertToDateString } from '@/app/_utils/helpers';

const RowView: FC<RowViewProps> = ({
  onClick = () => {},
  data,
  type,
  href,
}) => {
  return (
    <CustomLink
      href={href}
      className={`grid py-[10px] px-4 border-1 border-[#231318] rounded-[10px] gap-2 w-[100%] ${
        type === 'admin'
          ? 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5'
          : 'grid-cols-1 sm:grid-cols-2'
      }`}>
      <div className="flex gap-[26px] items-center justify-center justify-self-center lg:justify-self-start flex-wrap">
        <div className="w-[52px] h-[52px] flex-shrink-0">
          <img
            src={data.img ? data.img : '/images/default.png'}
            className="w-[52px] h-[52px]"
            alt=""
          />
        </div>
        {type === 'admin' && <p>{data.userName}</p>}
        {type === 'customer' && <p>{data.Number}</p>}
      </div>
      {type === 'admin' && (
        <>
          <div className="text-center flex items-center justify-center h-[100%]">
            <p>{data.countOfTickets} Tickets</p>
          </div>
          <div className="text-center flex items-center justify-center h-[100%]">
            <p>{convertToDateString(data.registerationDate)}</p>
          </div>
          <div className="text-center flex items-center justify-center h-[100%]">
            <p>Id: {data.id}</p>
          </div>
          <div className="flex justify-center lg:justify-end items-center h-[100%]">
            <ActionButton onClick={onClick} type="delete" />
          </div>
        </>
      )}
      {type === 'customer' && (
        <div className="text-center flex items-center justify-center lg:justify-end h-[100%]">
          <p>{convertToDateString(data.Date)}</p>
        </div>
      )}
    </CustomLink>
  );
};

export default RowView;

