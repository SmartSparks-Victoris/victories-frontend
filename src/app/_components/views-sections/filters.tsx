'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Filters = ({ categories, status, numberOfResults }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedStatus, setSelectedStatus] = useState(-1);

  useEffect(() => {
    const category = Number(searchParams.get('category'));
    const status = Number(searchParams.get('status'));

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(-1);
    }

    if (status) {
      setSelectedStatus(status);
    } else {
      setSelectedStatus(-1);
    }
  }, [searchParams]);

  function handleCategoryChange(e) {
    const newCategory = Number(e.target.value);
    const searchParams = new URLSearchParams(window.location.search);
    if (newCategory === -1) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newCategory);
    }
    setSelectedCategory(newCategory);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handleStatusChange(e) {
    const newStatus = Number(e.target.value);
    const searchParams = new URLSearchParams(window.location.search);

    if (newStatus === -1) {
      searchParams.delete('status');
    } else {
      searchParams.set('status', newStatus);
    }
    setSelectedStatus(newStatus);

    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <section>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.6174 20.8027 13.5075 20.8762 13.3865 20.9264C13.2655 20.9766 13.1359 21.0024 13.0049 21.0024C12.8739 21.0024 12.7442 20.9766 12.6233 20.9264C12.5023 20.8762 12.3924 20.8027 12.2999 20.71L10.2899 18.7C10.1809 18.5933 10.098 18.4629 10.0477 18.319C9.99739 18.175 9.98103 18.0213 9.99989 17.87V12H9.96989L4.20989 4.62C4.0475 4.41153 3.97422 4.14726 4.00607 3.88493C4.03793 3.6226 4.17232 3.38355 4.37989 3.22C4.56989 3.08 4.77989 3 4.99989 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C19.8275 3.38355 19.9618 3.6226 19.9937 3.88493C20.0256 4.14726 19.9523 4.41153 19.7899 4.62L14.0299 12H13.9999Z"
            fill="black"
          />
        </svg>

        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="-1">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select onChange={handleStatusChange} value={selectedStatus}>
          <option value="-1">All</option>
          {status.map((st) => (
            <option key={st.id} value={st.id}>
              {st.name}
            </option>
          ))}
        </select>
      </div>
      <p>Total Results: {numberOfResults}</p>
    </section>
  );
};

export default Filters;

