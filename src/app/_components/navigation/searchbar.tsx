'use client';

import * as z from 'zod';

import CustomLink from './custom-link';
import Link from 'next/link';
import React from 'react';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const SearchBar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof semanticSearchSchema>>({
    resolver: zodResolver(semanticSearchSchema),
  });

  function handleSearchSuccess(data) {
    // Navigate to search results page with query parameter
    router.push(`/search?query=${data.query}`);
  }

  function handleSearchFailure() {}

  return (
    <nav className="fixed top-0 left-[var(--adminNavSmall)] md:left-[var(--adminNav)] h-[var(--searchNav)] w-[calc(100%-var(--adminNavSmall))] md:w-[calc(100%-var(--adminNav))] bg-gray-400 p-2 flex justify-between">
      <form
        onSubmit={handleSubmit(handleSearchSuccess, handleSearchFailure)}
        action=""
        className="flex-grow flex">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow"
          {...register('query', { required: true })}
        />
        {errors.query && <p>{errors.query.message}</p>}
        <button type="submit">Search</button>
      </form>
      <CustomLink href="/profile">Profile</CustomLink>
    </nav>
  );
};

export default SearchBar;

