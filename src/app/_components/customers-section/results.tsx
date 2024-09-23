/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';

import ResultsTableHead from '../tickets-sections/results-table-head';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';
import { convertToDateString } from '@/app/_utils/helpers';

const Results = ({ results }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredResults, setFilteredResults] = useState(null);
  const [sortOrderView, setSortOrderView] = useState(
    searchParams.get('order') || 'desc',
  );
  const [sortKeyView, setSortKeyView] = useState(
    searchParams.get('key') || 'Date',
  );

  useEffect(() => {
    const sortKey = searchParams.get('key') || 'Date'; // Default sort key
    const sortOrder = searchParams.get('order') || 'desc'; // Default sort order

    let myFilteredResults = results;

    console.log('MY');
    console.log(myFilteredResults);

    myFilteredResults = myFilteredResults.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    console.log('AFTER');
    console.log(myFilteredResults);

    setFilteredResults(myFilteredResults);
  }, [searchParams, results]);

  function handleCustomerClick(id: string | number) {
    // Navigate to customer page with selected customer id
    router.push(`/customers/${id}`);
  }

  // Id: 9,
  // Number: '01094774383',
  // Date: '2024-09-01T10:00:00Z',

  return (
    <section className="flex flex-col">
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr>
              <th>Customer</th>
              <th>
                <ResultsTableHead
                  text="Number"
                  keyValue="Number"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Date"
                  keyValue="Date"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredResults &&
              filteredResults.map((result) => (
                <tr
                  key={result.Id}
                  onClick={() => handleCustomerClick(result.Id)}
                  className="cursor-pointer">
                  <td>
                    <div className="w-[48px] h-[48px] overflow-hidden rounded-full mx-auto">
                      <img
                        src={'/images/default.png'}
                        className="w-[48px] h-[48px]"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{result.Number}</td>
                  <td>{convertToDateString(result.Date)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

