'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Results = ({ results }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredResults, setFilteredResults] = useState(null);
  const [sortOrderView, setSortOrderView] = useState(
    searchParams.get('order') || 'desc',
  );
  const [sortKeyView, setSortKeyView] = useState(
    searchParams.get('key') || 'time',
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
    const sortKey = searchParams.get('key') || 'time'; // Default sort key
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
    router.push(`/customers/${id}`);
  }

  return (
    <section className="flex">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>
              <button onClick={() => handleSetSortKey('contact')}>
                Contact
              </button>
            </th>
            <th>
              <button onClick={() => handleSetSortKey('time')}>Time</button>
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
                <td>{result.img}</td>
                <td>{result.contact}</td>
                <td>{result.time}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={handleToggleSort}>Sort</button>
    </section>
  );
};

export default Results;

