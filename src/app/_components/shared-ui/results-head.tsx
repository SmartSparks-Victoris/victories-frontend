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
    <div className="flex justify-between items-center mb-3 gap-5 flex-wrap">
      <div className="text-tertiaryButton text-[16px] font-medium px-6 py-[14px] border-1 border-strokeSecondary rounded-md flex gap-[10px] flex-wrap items-center justify-center">
        {icon && icon === 'credit' && <CreditSVG />}
        <p className="text-center">{text}</p>
      </div>
      {result && (
        <p className="text-tertiaryButton text-[16px] font-medium">
          Total Amount: {result}
        </p>
      )}
      {!result && results && (
        <p className="text-tertiaryButton text-[16px] font-medium">
          Total Result: {results.length}
        </p>
      )}
    </div>
  );
};

export default ResultsHead;

