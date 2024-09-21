'use client';

import React, { FC, useEffect, useState } from 'react';

import DropDown from '../shared-ui/dropdown';
import FilterSVG from '../svg/filter';
import { FiltersProps } from '@/app/_types/admin.types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Filters: FC<FiltersProps> = ({ categories, status, numberOfResults }) => {
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

  function handleCategoryChange(selectedValue: number) {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedValue === -1) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', String(selectedValue));
    }

    setSelectedCategory(selectedValue);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handleStatusChange(selectedValue: number) {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedValue === -1) {
      searchParams.delete('status');
    } else {
      searchParams.set('status', String(selectedValue));
    }
    setSelectedStatus(selectedValue);

    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <section className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <FilterSVG />

        <div className="w-fit">
          <DropDown
            name="category"
            label=""
            control={control}
            defaultValue={selectedCategory}
            array={categories}
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

