/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';

import ResultsHead from '../shared-ui/results-head';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

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

  function handleSetSortKey(value) {
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

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('key', value); // Set the selected status
    searchParams.set('order', newValue); // Set the selected status

    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  useEffect(() => {
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
    <section className="flex flex-col">
      <div className="resultsDiv">
        <table className="results">
          <thead>
            <tr>
              <th>Customer</th>
              <th>
                <button
                  onClick={() => handleSetSortKey('contact')}
                  className="flex gap-[6px] w-[100%] items-center justify-center">
                  Contact
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5306 10.4695C11.6005 10.5392 11.656 10.6219 11.6938 10.7131C11.7317 10.8043 11.7512 10.902 11.7512 11.0007C11.7512 11.0994 11.7317 11.1972 11.6938 11.2883C11.656 11.3795 11.6005 11.4623 11.5306 11.532L8.5306 14.532C8.46092 14.6019 8.37813 14.6574 8.28696 14.6952C8.1958 14.7331 8.09806 14.7526 7.99935 14.7526C7.90064 14.7526 7.8029 14.7331 7.71173 14.6952C7.62057 14.6574 7.53778 14.6019 7.4681 14.532L4.4681 11.532C4.3272 11.3911 4.24805 11.2 4.24805 11.0007C4.24805 10.8015 4.3272 10.6104 4.4681 10.4695C4.60899 10.3286 4.80009 10.2494 4.99935 10.2494C5.19861 10.2494 5.3897 10.3286 5.5306 10.4695L7.99997 12.9376L10.4693 10.4676C10.5391 10.398 10.6219 10.3428 10.7131 10.3052C10.8042 10.2677 10.9018 10.2484 11.0004 10.2486C11.0989 10.2487 11.1965 10.2683 11.2875 10.3063C11.3784 10.3442 11.4611 10.3996 11.5306 10.4695ZM5.5306 5.53198L7.99997 3.0626L10.4693 5.5326C10.6102 5.6735 10.8013 5.75265 11.0006 5.75265C11.1999 5.75265 11.391 5.6735 11.5318 5.5326C11.6727 5.39171 11.7519 5.20061 11.7519 5.00135C11.7519 4.8021 11.6727 4.611 11.5318 4.4701L8.53185 1.4701C8.46217 1.40018 8.37938 1.34471 8.28821 1.30685C8.19705 1.269 8.09931 1.24951 8.0006 1.24951C7.90189 1.24951 7.80415 1.269 7.71298 1.30685C7.62182 1.34471 7.53903 1.40018 7.46935 1.4701L4.46935 4.4701C4.32845 4.611 4.2493 4.8021 4.2493 5.00135C4.2493 5.20061 4.32845 5.39171 4.46935 5.5326C4.61024 5.6735 4.80134 5.75265 5.0006 5.75265C5.19986 5.75265 5.39095 5.6735 5.53185 5.5326L5.5306 5.53198Z"
                      fill="#452033"
                    />
                  </svg>
                </button>
              </th>
              <th>
                <button
                  onClick={() => handleSetSortKey('time')}
                  className="flex gap-[6px] w-[100%] items-center justify-center">
                  Time
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5306 10.4695C11.6005 10.5392 11.656 10.6219 11.6938 10.7131C11.7317 10.8043 11.7512 10.902 11.7512 11.0007C11.7512 11.0994 11.7317 11.1972 11.6938 11.2883C11.656 11.3795 11.6005 11.4623 11.5306 11.532L8.5306 14.532C8.46092 14.6019 8.37813 14.6574 8.28696 14.6952C8.1958 14.7331 8.09806 14.7526 7.99935 14.7526C7.90064 14.7526 7.8029 14.7331 7.71173 14.6952C7.62057 14.6574 7.53778 14.6019 7.4681 14.532L4.4681 11.532C4.3272 11.3911 4.24805 11.2 4.24805 11.0007C4.24805 10.8015 4.3272 10.6104 4.4681 10.4695C4.60899 10.3286 4.80009 10.2494 4.99935 10.2494C5.19861 10.2494 5.3897 10.3286 5.5306 10.4695L7.99997 12.9376L10.4693 10.4676C10.5391 10.398 10.6219 10.3428 10.7131 10.3052C10.8042 10.2677 10.9018 10.2484 11.0004 10.2486C11.0989 10.2487 11.1965 10.2683 11.2875 10.3063C11.3784 10.3442 11.4611 10.3996 11.5306 10.4695ZM5.5306 5.53198L7.99997 3.0626L10.4693 5.5326C10.6102 5.6735 10.8013 5.75265 11.0006 5.75265C11.1999 5.75265 11.391 5.6735 11.5318 5.5326C11.6727 5.39171 11.7519 5.20061 11.7519 5.00135C11.7519 4.8021 11.6727 4.611 11.5318 4.4701L8.53185 1.4701C8.46217 1.40018 8.37938 1.34471 8.28821 1.30685C8.19705 1.269 8.09931 1.24951 8.0006 1.24951C7.90189 1.24951 7.80415 1.269 7.71298 1.30685C7.62182 1.34471 7.53903 1.40018 7.46935 1.4701L4.46935 4.4701C4.32845 4.611 4.2493 4.8021 4.2493 5.00135C4.2493 5.20061 4.32845 5.39171 4.46935 5.5326C4.61024 5.6735 4.80134 5.75265 5.0006 5.75265C5.19986 5.75265 5.39095 5.6735 5.53185 5.5326L5.5306 5.53198Z"
                      fill="#452033"
                    />
                  </svg>
                </button>
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
                        src={result.img}
                        className="w-[48px] h-[48px]"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{result.contact}</td>
                  <td>{result.time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Results;

