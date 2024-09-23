'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import Button from '../shared-ui/button';
import DropDown from '../shared-ui/dropdown';
import SearchForm from './search-form';
import TextInput from '../shared-ui/text-input';
import ticketUpdateSchema from '@/app/_schemas/ticket';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const Form = ({ ticket, categories, state }) => {
  const [selectedDropDown, setSelectedDropDown] = useState(null);
  console.log(ticket);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ticketUpdateSchema>>({
    resolver: zodResolver(ticketUpdateSchema),
    defaultValues: {
      Category: ticket.CategoryId,
      State: ticket.StateId,
      Summary: ticket.Summary,
      Title: ticket.Title,
    },
  });

  function handleSuccess() {}
  function handleFailure() {}

  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(ticket.CategoryId);
  const [selectedState, setSelectedState] = useState(ticket.StateId);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function handleCategoryChange(selectedValue: string | number) {
    setSelectedCategory(selectedValue);
    router.refresh();
  }

  function handleStateChange(selectedValue: string | number) {
    setSelectedState(selectedValue);
    router.refresh();
  }

  console.log('TICKET: ', ticket);

  return (
    <section className="flex flex-col gap-3 xl:order-1 order-2">
      <SearchForm />
      <form
        onSubmit={handleSubmit(handleSuccess, handleFailure)}
        className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <DropDown
            name="Category"
            label="Category"
            control={control}
            defaultValue={ticket.CategoryId}
            array={categories}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'Category'}
            handleChange={handleCategoryChange}
          />
          <DropDown
            name="State"
            label="State"
            control={control}
            defaultValue={ticket.StateId}
            array={state}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'State'}
            handleChange={handleStateChange}
          />
          <TextInput
            name="Title"
            register={register}
            label="Title"
            placeholder="Title"
            type="text"
          />
          <TextInput
            name="Summary"
            register={register}
            label="Summary"
            placeholder="Summary"
            type="textarea"
          />
        </div>
        <Button type="submit" value="Update" />
      </form>
    </section>
  );
};

export default Form;

