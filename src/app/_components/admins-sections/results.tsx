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
    searchParams.get('key') || 'date',
  );

  useEffect(() => {
    const sortKey = searchParams.get('key') || 'date'; // Default sort key
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

  function handleCustomerClick(id) {
    // Navigate to customer page with selected customer id
    router.push(`/admins/${id}`);
  }

  return (
    <section className="flex flex-col">
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr>
              <th>Admin</th>
              <th>
                <ResultsTableHead
                  text="Name"
                  keyValue="userName"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Id"
                  keyValue="id"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Tickets"
                  keyValue="countOfTickets"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Date"
                  keyValue="registerationDate"
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
                  key={result.id}
                  onClick={() => handleCustomerClick(result.id)}
                  className="cursor-pointer">
                  <td>
                    <div className="w-[48px] h-[48px] overflow-hidden rounded-full mx-auto">
                      <img
                        src={result.img ? result.img : '/images/default.png'}
                        className="w-[48px] h-[48px]"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{result.userName}</td>
                  <td>{result.id}</td>
                  <td>{result.countOfTickets}</td>
                  <td>{convertToDateString(result.registerationDate)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

