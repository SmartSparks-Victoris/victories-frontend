'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

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

  function handleToggleSort() {
    let newValue;
    if (sortOrderView === 'desc') {
      newValue = 'asc';
      setSortOrderView('asc');
    } else {
      newValue = 'desc';
      setSortOrderView('desc');
    }
    console.log(newValue);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('order', newValue); // Set the selected status
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handleSetSortKey(value) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('key', value); // Set the selected status
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  useEffect(() => {
    const category = Number(searchParams.get('category'));
    const status = Number(searchParams.get('status'));
    const sortKey = searchParams.get('key') || 'urgent'; // Default sort key
    const sortOrder = searchParams.get('order') || 'desc'; // Default sort order

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
  }, [searchParams, results]);

  return (
    <section className="flex">
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => handleSetSortKey('urgent')}>Urgent</button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('status')}>Status</button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('title')}>Title</button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('category')}>
                Category
              </button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('admin')}>Admin</button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('date')}>Date</button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('sentiment')}>
                Sentiment
              </button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('degree')}>
                Degree Of Sentiment
              </button>
            </th>
            {/* <th>Urgent</th>
            <th>Status</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Sentiment</th>
            <th>Degree Of Sentiment</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredResults &&
            filteredResults.map((result) => (
              <tr key={result.id}>
                <td>{result.urgent}</td>
                <td>{result.status}</td>
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
      <button onClick={handleToggleSort}>Sort</button>
    </section>
  );
};

export default Results;

