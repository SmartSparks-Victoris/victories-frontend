'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import React from 'react';
import TextInput from '../shared-ui/text-input';
import personalInfoSchema from '@/app/_schemas/personal-info';
import semanticSearchSchema from '@/app/_schemas/semantic-search';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalInfoForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fname: data?.fname || '',
      lname: data?.lname || '',
      email: data?.email || '',
    },
  });

  const router = useRouter();

  function handleInfoSuccess(data) {}

  function handleInfoFailure() {
    // Handle search failure
  }

  return (
    <form onSubmit={handleSubmit(handleInfoSuccess, handleInfoFailure)}>
      <div className="flex gap-[40px] w-[100%] flex-col lg:flex-row">
        <TextInput
          name="fname"
          label="First Name"
          register={register}
          type="text"
        />
        <TextInput
          name="lname"
          label="Last Name"
          register={register}
          type="text"
        />
        <TextInput
          name="email"
          label="Email"
          register={register}
          type="email"
        />
      </div>
      <Button type="submit" value="Update" className="mt-[32px]"></Button>
    </form>
  );
};

export default PersonalInfoForm;

