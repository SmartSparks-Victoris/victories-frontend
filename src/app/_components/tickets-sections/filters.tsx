'use client';

import React, { FC, useEffect, useState } from 'react';

import DropDown from '../shared-ui/dropdown';
import FilterSVG from '../svg/filter';
import { FiltersProps } from '@/app/_types/admin.types';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Filters: FC<FiltersProps> = ({ categories, state, numberOfResults }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(
    Number(searchParams.get('category')) || -1,
  );
  const [selectedState, setSelectedState] = useState(
    Number(searchParams.get('state')) || -1,
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  console.log('STATE: ', state);

  const { control } = useForm();

  useEffect(() => {
    const category = Number(searchParams.get('category'));
    const state = Number(searchParams.get('state'));

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(-1);
    }

    if (state) {
      setSelectedState(state);
    } else {
      setSelectedState(-1);
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

  function handleStateChange(selectedValue: number) {
    const searchParams = new URLSearchParams(window.location.search);

    if (selectedValue === -1) {
      searchParams.delete('state');
    } else {
      searchParams.set('state', String(selectedValue));
    }
    setSelectedState(selectedValue);

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
            name="state"
            label=""
            control={control}
            defaultValue={selectedState}
            array={state}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'state'}
            all={true}
            handleChange={handleStateChange}
          />
        </div>
      </div>
      <p>Total Results: {numberOfResults}</p>
    </section>
  );
};

export default Filters;

