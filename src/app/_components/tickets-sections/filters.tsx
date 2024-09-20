'use client';

import { Controller, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

import DropDown from '../shared-ui/dropdown';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Filters = ({ categories, status, numberOfResults }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    Number(searchParams.get('category')) || -1,
  );
  const [selectedStatus, setSelectedStatus] = useState(
    Number(searchParams.get('status')) || -1,
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { control } = useForm();

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

  function handleCategoryChange(selectedValue) {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedValue === -1) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedValue);
    }

    setSelectedCategory(selectedValue);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handleStatusChange(selectedValue) {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedValue === -1) {
      searchParams.delete('status');
    } else {
      searchParams.set('status', selectedValue);
    }
    setSelectedStatus(selectedValue);

    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
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

        <div className="w-fit">
          <DropDown
            name="category"
            label=""
            control={control}
            defaultValue={selectedCategory}
            array={categories}
            value={selectedCategory}
            selectedDropDown={openDropdown}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'category'}
            all={true}
            handleChange={handleCategoryChange}
          />
        </div>
        <div className="w-fit">
          <DropDown
            name="status"
            label=""
            control={control}
            defaultValue={selectedStatus}
            array={status}
            value={selectedStatus}
            selectedDropDown={openDropdown}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'status'}
            all={true}
            handleChange={handleStatusChange}
          />
        </div>
      </div>
      <p>Total Results: {numberOfResults}</p>
    </section>
  );
};

export default Filters;

