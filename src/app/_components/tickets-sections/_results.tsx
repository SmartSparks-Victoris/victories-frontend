'use client';

import React, { useEffect, useState } from 'react';

import ResultsTableHead from './results-table-head';
import SortingSVG from '../svg/sorting';
import Status from '../shared-ui/status';
import Urgent from './urgent';
import { revalidateLogin } from '@/app/_actions/login';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Results = ({ results, setLength }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOrderView, setSortOrderView] = useState(
    searchParams.get('order') || 'desc',
  );
  const [sortKeyView, setSortKeyView] = useState(
    searchParams.get('key') || 'urgent',
  );

  useEffect(() => {
    const category = Number(searchParams.get('category'));
    const status = Number(searchParams.get('status'));

    let myFilteredResults = results;

    // Apply category filter
    if (category) {
      myFilteredResults = myFilteredResults.filter(
        (result) => result.category_id === category,
      );
    }

    // Apply status filter
    if (status) {
      myFilteredResults = myFilteredResults.filter(
        (result) => result.status_id === status,
      );
    }

    // Sort based on selected key and order
    myFilteredResults = myFilteredResults.sort((a, b) => {
      if (a[sortKeyView] < b[sortKeyView])
        return sortOrderView === 'asc' ? -1 : 1;
      if (a[sortKeyView] > b[sortKeyView])
        return sortOrderView === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredResults(myFilteredResults);
    setLength(myFilteredResults.length);
  }, [results, sortKeyView, sortOrderView, searchParams]); // Updated dependencies

  function handleRowClick(e, id) {
    e.stopPropagation();
    router.push(`/tickets/${id}`);
  }

  return (
    <section className="flex items-start">
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr className="border-y-[1px] border-b-solid border-y-[#7E4556] results">
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

