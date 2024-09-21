'use client';

import React, { useEffect, useState } from 'react';

import ResultsHead from '../shared-ui/results-head';
import ResultsTableHead from '../tickets-sections/results-table-head';
import Status from '../shared-ui/status';
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
    searchParams.get('key') || 'urgent',
  );

  useEffect(() => {
    const sortKey = searchParams.get('key') || 'urgent'; // Default sort key
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

  function handleRowClick(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    e.stopPropagation();
    router.push(`/tickets/${id}`);
  }

  return (
    <section className="flex flex-col">
      <ResultsHead text="Similar Problems" results={results} />
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr>
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
              <th>
                <ResultsTableHead
                  text="Similarity Ratio"
                  keyValue="similarity_ratio"
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
                    <Status status={result.status} />
                  </td>
                  <td>{result.title}</td>
                  <td>{result.category}</td>
                  <td>{result.admin}</td>
                  <td>{result.date}</td>
                  <td>{result.sentiment}</td>
                  <td>{result.degree_of_sentiment}</td>
                  <td>{result.similarity_ratio}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

