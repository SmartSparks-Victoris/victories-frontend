'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import SearchForm from './search-form';
import ticketUpdateSchema from '@/app/_schemas/ticket';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Form = ({ ticket, categories, status }) => {
  console.log(ticket);
  const {
    register,
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

  return (
    <section>
      <SearchForm />
      <form onSubmit={handleSubmit(handleSuccess, handleFailure)}>
        <div>
          <label htmlFor="category">Category</label>
          <select {...register('category')} id="category">
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.category && <p>errors.category.message</p>}
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select {...register('status')} id="status">
            {status.map((st) => {
              return (
                <option key={st.id} value={st.id}>
                  {st.name}
                </option>
              );
            })}
          </select>
          {errors.status && <p>errors.status.message</p>}
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input type="text" {...register('title')} id="title" />
          {errors.title && <p>errors.title.message</p>}
        </div>

        <div>
          <label htmlFor="summary"></label>
          <textarea id="summary" {...register('summary')}></textarea>
          {errors.summary && <p>errors.summary.message</p>}
        </div>

        <input type="submit" value="Update" />
      </form>
    </section>
  );
};

export default Form;

