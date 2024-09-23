'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import React, { useTransition } from 'react';
import TextInput from '../shared-ui/text-input';
import passwordSchema from '@/app/_schemas/password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from '@/app/_data/base';
import toast from 'react-hot-toast';

const PasswordForm = ({ user, token }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  const [isPending, startTransition] = useTransition();

  async function handleInfoSuccess(data) {
    startTransition(async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/admin/${Number(user.Id)}/password`,
          {
            next: { revalidate: 0 },
            method: 'PUT',
            body: JSON.stringify({
              oldPassword: data.old,
              newPassword: data.new,
            }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        toast.success('Password updated successfully');
        reset();
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to update password');
      }
    });
  }

  function handleInfoFailure() {
    // Handle search failure
  }

  return (
    <form onSubmit={handleSubmit(handleInfoSuccess, handleInfoFailure)}>
      <div className="flex gap-5 w-[100%] flex-col lg:flex-row">
        <TextInput
          name="old"
          label="Current Password"
          register={register}
          error={errors.old}
          type="password"
          isPending={isPending}
        />
        <TextInput
          name="new"
          label="New Password"
          register={register}
          error={errors.new}
          type="password"
          isPending={isPending}
        />
      </div>

      <Button
        type="submit"
        value="Update"
        className="mt-4"
        isPending={isPending}></Button>
    </form>
  );
};

export default PasswordForm;

