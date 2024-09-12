'use client';

import * as z from 'zod';

import React from 'react';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof semanticSearchSchema>>({
    resolver: zodResolver(semanticSearchSchema),
  });

  const router = useRouter();

  function handleSearchSuccess(data) {
    router.push(`/search?query=${data.query}`);
  }

  function handleSearchFailure() {
    // Handle search failure
  }

  return (
    <form onSubmit={handleSubmit(handleSearchSuccess, handleSearchFailure)}>
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow"
        {...register('query', { required: true })}
      />
      {errors.query && <p>{errors.query.message}</p>}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

