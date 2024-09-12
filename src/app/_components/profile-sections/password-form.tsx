'use client';

import * as z from 'zod';

import React from 'react';
import passwordSchema from '@/app/_schemas/password';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { zodResolver } from '@hookform/resolvers/zod';

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  // const router = useRouter();

  function handleInfoSuccess(data) {}

  function handleInfoFailure() {
    // Handle search failure
  }

  return (
    <form onSubmit={handleSubmit(handleInfoSuccess, handleInfoFailure)}>
      <div>
        <label htmlFor="old">Current Password</label>
        <input
          id="old"
          type="password"
          placeholder="******"
          className="flex-grow"
          {...register('old', { required: true })}
        />
        {errors.old && <p>{errors.old.message}</p>}
      </div>
      <div>
        <label htmlFor="new">New Password</label>
        <input
          id="new"
          type="password"
          placeholder="******"
          className="flex-grow"
          {...register('new', { required: true })}
        />
        {errors.old && <p>{errors.old.message}</p>}
      </div>
      <input type="submit" value="Update" />
    </form>
  );
};

export default PasswordForm;

