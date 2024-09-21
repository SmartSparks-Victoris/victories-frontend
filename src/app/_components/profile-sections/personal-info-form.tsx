'use client';

import * as z from 'zod';

import React, { FC } from 'react';

import Button from '../shared-ui/button';
import TextInput from '../shared-ui/text-input';
import { personalInfoProps } from '@/app/_types/admin.types';
import personalInfoSchema from '@/app/_schemas/personal-info';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalInfoForm: FC<personalInfoProps> = ({ data }) => {
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

  function handleInfoSuccess(data) {}

  function handleInfoFailure() {
    // Handle search failure
  }

  return (
    <form onSubmit={handleSubmit(handleInfoSuccess, handleInfoFailure)}>
      <div className="flex gap-5 w-[100%] flex-col lg:flex-row">
        <TextInput
          name="fname"
          label="First Name"
          register={register}
          error={errors.fname}
          type="text"
        />
        <TextInput
          name="lname"
          label="Last Name"
          register={register}
          error={errors.lname}
          type="text"
        />
        <TextInput
          name="email"
          label="Email"
          register={register}
          error={errors.email}
          type="email"
        />
      </div>
      <Button type="submit" value="Update" className="mt-4"></Button>
    </form>
  );
};

export default PersonalInfoForm;

