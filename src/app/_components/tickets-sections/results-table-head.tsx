'use client';

import React, { FC } from 'react';

import { ResultsTableHeadProps } from '@/app/_types/admin.types';
import SortingSVG from '../svg/sorting';
import { useRouter } from 'nextjs-toploader/app';

const ResultsTableHead: FC<ResultsTableHeadProps> = ({
  text,
  keyValue,
  sortKeyView,
  sortOrderView,
  setSortOrderView,
  setSortKeyView,
}) => {
  const router = useRouter();

  function handleSetSortKey(value: string) {
    let newValue = 'desc';
    if (value === sortKeyView) {
      if (sortOrderView === 'desc') {
        newValue = 'asc';
        setSortOrderView('asc');
      } else {
        newValue = 'desc';
        setSortOrderView('desc');
      }
    }

    setSortKeyView(value);
    console.log('CLICKED');
    console.log(sortKeyView);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('key', value);
    searchParams.set('order', newValue);

    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <button
      onClick={() => handleSetSortKey(keyValue)}
      className="flex gap-[6px] w-[100%] items-center justify-center">
      {text}
      <SortingSVG />
    </button>
  );
};

export default ResultsTableHead;

