'use client';

import * as z from 'zod';

import React from 'react';
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
      <div>
        <label htmlFor="fname">First Name</label>
        <input
          id="fname"
          type="text"
          placeholder="Name"
          className="flex-grow"
          {...register('fname', { required: true })}
        />
        {errors.fname && <p className="fieldError">{errors.fname.message}</p>}
      </div>
      <div>
        <label htmlFor="lname">Last Name</label>
        <input
          id="lname"
          type="text"
          placeholder="Name"
          className="flex-grow"
          {...register('lname', { required: true })}
        />
        {errors.lname && <p className="fieldError">{errors.lname.message}</p>}
      </div>
      <div>
        <label htmlFor="lname">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Name"
          className="flex-grow"
          {...register('email', { required: true })}
        />
        {errors.email && <p className="fieldError">{errors.email.message}</p>}
      </div>

      <input type="submit" value="Update" />
    </form>
  );
};

export default PersonalInfoForm;

