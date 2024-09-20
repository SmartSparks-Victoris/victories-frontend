'use client';

import * as z from 'zod';

import React from 'react';
import TextInput from '../shared-ui/text-input';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
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
      <TextInput
        name="query"
        type="text"
        label=""
        icon="search"
        iconSubmit={true}
        register={register}
        error={errors.query}
        placeholder="Search for similar Problems"
      />
    </form>
  );
};

export default SearchForm;

