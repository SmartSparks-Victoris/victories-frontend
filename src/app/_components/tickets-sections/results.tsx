'use client';

import React, { useEffect, useState } from 'react';

import ResultsTableHead from './results-table-head';
import Status from '../shared-ui/status';
import Urgent from './urgent';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Results = ({ results, setLength }) => {
  console.log(results);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredResults, setFilteredResults] = useState(null);
  const [sortOrderView, setSortOrderView] = useState(
    searchParams.get('order') || 'desc',
  );
  const [sortKeyView, setSortKeyView] = useState(
    searchParams.get('key') || 'urgent',
  );

  useEffect(() => {
    const category = Number(searchParams.get('category'));
    const status = Number(searchParams.get('status'));
    const sortKey = searchParams.get('key') || sortKeyView || 'urgent'; // Default sort key
    const sortOrder = searchParams.get('order') || sortOrderView || 'desc'; // Default sort order

    let myFilteredResults = results;

    if (category) {
      myFilteredResults = myFilteredResults.filter(
        (result) => result.category_id === category,
      );
    }

    if (status) {
      myFilteredResults = myFilteredResults.filter(
        (result) => result.status_id === status,
      );
    }

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
    setLength(myFilteredResults.length);
  }, [searchParams, results, sortKeyView, sortOrderView]);

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
                  keyValue="urgent"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Status"
                  keyValue="status"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Title"
                  keyValue="title"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Category"
                  keyValue="category"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Admin"
                  keyValue="admin"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Date"
                  keyValue="date"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Sentiment"
                  keyValue="sentiment"
                  sortKeyView={sortKeyView}
                  sortOrderView={sortOrderView}
                  setSortOrderView={setSortOrderView}
                  setSortKeyView={setSortKeyView}
                />
              </th>
              <th>
                <ResultsTableHead
                  text="Degree Of Sentiment"
                  keyValue="degree_of_sentiment"
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
                  onClick={(e) => handleRowClick(e, result.id)}
                  className="cursor-pointer">
                  <td>
                    <Urgent result={result} />
                  </td>
                  <td>
                    <Status status={result.status} />
                  </td>
                  <td>{result.title}</td>
                  <td>{result.category}</td>
                  <td>{result.admin}</td>
                  <td>{result.date}</td>
                  <td>{result.sentiment}</td>
                  <td>{result.degree_of_sentiment}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

