import React, { FC } from 'react';

import Button from '../shared-ui/button';
import { PricingItemProps } from '@/app/_types/admin.types';
import { isNumber } from 'chart.js/helpers';

const PricingItem: FC<PricingItemProps> = ({
  type,
  price,
  description,
  features,
  handlePlanChange,
}) => {
  return (
    <div className="py-[40px] px-[32px] border-[1px] border-solid border-[#7E4556] rounded-[20px] h-fit justify-self-stretch self-center">
      <h2 className="text-[#452033] text-[26px] font-semibold">{type}</h2>
      <h3 className="text-[#452033] text-[26px] font-semibold mb-[8px] mt-[16px]">
        {isNumber(Number(price)) ? `$ ${Number(price)}` : price}
      </h3>
      <h4 className="text-[16px] font-medium text-[#666666]">
        Per user/month , billed annualy
      </h4>
      <div className="mb-[64px] flex flex-col gap-[24px] mt-[24px]">
        <p className="text-[#1A1A1A] text-[16px] font-medium">{description}</p>
        {features.map((feature) => {
          return (
            <div key={feature} className="flex gap-[12px] items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.62503 13.3013L4.87795 10.5542C4.72993 10.4062 4.52916 10.323 4.31983 10.323C4.11049 10.323 3.90972 10.4062 3.7617 10.5542C3.61368 10.7022 3.53052 10.903 3.53052 11.1123C3.53052 11.216 3.55093 11.3186 3.5906 11.4144C3.63027 11.5101 3.68841 11.5972 3.7617 11.6704L7.07087 14.9796C7.37962 15.2884 7.87837 15.2884 8.18712 14.9796L16.563 6.60378C16.711 6.45576 16.7941 6.25499 16.7941 6.04566C16.7941 5.83632 16.711 5.63555 16.563 5.48753C16.4149 5.33951 16.2142 5.25635 16.0048 5.25635C15.7955 5.25635 15.5947 5.33951 15.4467 5.48753L7.62503 13.3013Z"
                  fill="#7E4556"
                />
              </svg>
              <p>{feature}</p>
            </div>
          );
        })}
      </div>
      <Button
        className="sm:px-[40px] sm:w-[100%]"
        onClick={() => handlePlanChange(type, price)}>
        Get Started For {type}
      </Button>
    </div>
  );
};

export default PricingItem;

