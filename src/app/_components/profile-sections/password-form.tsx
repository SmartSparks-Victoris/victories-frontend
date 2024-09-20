'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import React from 'react';
import TextInput from '../shared-ui/text-input';
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
      <div className="flex gap-[40px] w-[100%] flex-col lg:flex-row">
        <TextInput
          name="old"
          label="Current Password"
          register={register}
          type="password"
        />
        <TextInput
          name="new"
          label="New Password"
          register={register}
          type="password"
        />
      </div>

      <Button type="submit" value="Update" className="mt-[32px]"></Button>
    </form>
  );
};

export default PasswordForm;

