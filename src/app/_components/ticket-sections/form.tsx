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

const Form = ({ ticket, categories, status }) => {
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
      category: ticket.category_id,
      status: ticket.status_id,
      summary: ticket.summary,
      title: ticket.title,
    },
  });

  function handleSuccess() {}
  function handleFailure() {}

  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(ticket.category_id);
  const [selectedStatus, setSelectedStatus] = useState(ticket.status_id);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function handleCategoryChange(selectedValue: string | number) {
    setSelectedCategory(selectedValue);
    router.refresh();
  }

  function handleStatusChange(selectedValue: string | number) {
    setSelectedStatus(selectedValue);
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
            name="category"
            label="Category"
            control={control}
            defaultValue={ticket.cateogry_id}
            array={categories}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'category'}
            handleChange={handleCategoryChange}
          />
          <DropDown
            name="status"
            label="Status"
            control={control}
            defaultValue={ticket.status_id}
            array={status}
            setSelectedDropDown={(name) => setOpenDropdown(name)}
            isOpen={openDropdown === 'status'}
            handleChange={handleStatusChange}
          />
          <TextInput
            name="title"
            register={register}
            label="Title"
            placeholder="Title"
            type="text"
          />
          <TextInput
            name="summary"
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

