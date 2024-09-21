import React, { FC } from 'react';

import CreditSVG from '../svg/credit';
import { ResultsHeadProps } from '@/app/_types/shared-ui.types';

const ResultsHead: FC<ResultsHeadProps> = ({
  text,
  results = null,
  icon = 'none',
  result = null,
}) => {
  return (
    <div className="flex justify-between items-center mb-[24px] gap-[40px] flex-wrap">
      <div className="text-[#452033] text-[16px] font-medium px-[48px] py-[14px] border-[1px] border-solid border-[#999999] rounded-[16px] flex gap-[10px] flex-wrap items-center justify-center">
        {icon && icon === 'credit' && <CreditSVG />}
        <p className="text-center">{text}</p>
      </div>
      {result && (
        <p className="text-[#452033] text-[16px] font-medium">
          Total Amount: {result}
        </p>
      )}
      {!result && results && (
        <p className="text-[#452033] text-[16px] font-medium">
          Total Result: {results.length}
        </p>
      )}
    </div>
  );
};

export default ResultsHead;

