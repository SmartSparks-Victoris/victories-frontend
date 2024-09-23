'use client';

import React, { useEffect, useState } from 'react';

import ResultsTableHead from '../tickets-sections/results-table-head';
import Status from '../shared-ui/status';
import Urgent from '../tickets-sections/urgent';
import { revalidateLogin } from '@/app/_actions/login';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Results = ({ results }) => {
  console.log(results);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredResults, setFilteredResults] = useState(null);
  const [sortOrderView, setSortOrderView] = useState(
    searchParams.get('order') || 'desc',
  );
  const [sortKeyView, setSortKeyView] = useState(
    searchParams.get('key') || 'Urgent',
  );

  useEffect(() => {
    const sortKey = searchParams.get('key') || 'Urgent'; // Default sort key
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

  function handleRowClick(
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | number,
  ) {
    e.stopPropagation();
    router.push(`/tickets/${id}`);
  }

  return (
    <section className="flex items-start">
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr>
              <th>
                <ResultsTableHead
                  text="Urgent"
                  keyValue="Urgent"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="State"
                  keyValue="State"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Title"
                  keyValue="Title"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Category"
                  keyValue="Category"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Admin"
                  keyValue="Admin"
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
              <th>
                <ResultsTableHead
                  text="Sentiment"
                  keyValue="Sentiment"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Degree Of Sentiment"
                  keyValue="SentimentDegree"
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
                  onClick={(e) => handleRowClick(e, result.Id)}
                  className="cursor-pointer">
                  <td>
                    <Urgent result={result} />
                  </td>
                  <td>
                    <Status status={result.State} />
                  </td>
                  <td>{result.Title}</td>
                  <td>{result.Category}</td>
                  <td>{result.Admin}</td>
                  <td>{result.Date}</td>
                  <td>{result.Sentiment}</td>
                  <td>{result.SentimentDegree}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

