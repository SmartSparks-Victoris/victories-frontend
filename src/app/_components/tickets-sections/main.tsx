'use client';

import React, { FC, useState } from 'react';

import Filters from './filters';
import Results from './results';
import { TicketsMainProps } from '@/app/_types/admin.types';

const TicketsMain: FC<TicketsMainProps> = ({ categories, state, results }) => {
  const [length, setLength] = useState(results.length);
  return (
    <div className="flex flex-col gap-3">
      <Filters categories={categories} state={state} numberOfResults={length} />
      <Results results={results} setLength={setLength} />
    </div>
  );
};

export default TicketsMain;

