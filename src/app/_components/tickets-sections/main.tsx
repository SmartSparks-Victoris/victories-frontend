'use client';

import React, { useState } from 'react';

import Filters from './filters';
import Results from './results';

const TicketsMain = ({ categories, status, results }) => {
  const [length, setLength] = useState(results.length);
  return (
    <div className="flex flex-col gap-[24px]">
      <Filters
        categories={categories}
        status={status}
        numberOfResults={length}
      />
      <Results results={results} setLength={setLength} />
    </div>
  );
};

export default TicketsMain;

