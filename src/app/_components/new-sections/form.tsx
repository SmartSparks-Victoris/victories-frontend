'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import ResultsHead from '../shared-ui/results-head';
import TextInput from '../shared-ui/text-input';
import newSchema from '@/app/_schemas/new';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from '@/app/_data/base';
import { formatPhoneNumber } from '@/app/_utils/helpers';
import toast from 'react-hot-toast';
import { useState, useTransition } from 'react';

const NewForm = ({ token }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof newSchema>>({
    resolver: zodResolver(newSchema),
  });

  const [isPending, startTransition] = useTransition();

  async function handleSuccess(data) {
    startTransition(async () => {
      try {
        const newPhoneNumber = formatPhoneNumber(data.number);
        const sentData = {
          FirstName: data.fname,
          LastName: data.lname,
          UserName: data.username,
          Email: data.email,
          Password: data.password,
          PhoneNumber: newPhoneNumber,
        };
        console.log(sentData);
        const res = await fetch(`${API_URL}/api/admin`, {
          method: 'POST',
          body: JSON.stringify(sentData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Check if content-type is JSON
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await res.json();

          reset();
          toast.success('Admin added successfully');
          // await revalidateAdmins();
        } else {
          console.log('Response is not in JSON format or empty');
        }
      } catch (error) {
        toast.error('Error Adding the admin');
        console.error('Error:', error);
      }
    });
  }
  function handleError(errors) {
    console.error('Validation errors:', errors);
  }
  return (
    <section className="">
      <ResultsHead text="New Admin" />

      <form
        onSubmit={handleSubmit(handleSuccess, handleError)}
        className="bg-textNavBarPrimary ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            name="fname"
            label="First Name"
            placeholder="Enter Admin First Name"
            error={errors.fname}
            register={register}
            type="text"
            isPending={isPending}
          />
          <TextInput
            name="lname"
            label="Last Name"
            placeholder="Enter Admin First Name"
            error={errors.lname}
            register={register}
            type="text"
            isPending={isPending}
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter Admin Email"
            error={errors.email}
            register={register}
            type="email"
            isPending={isPending}
          />
          <TextInput
            name="username"
            label="UserName"
            placeholder="Enter Admin Username"
            error={errors.username}
            register={register}
            type="text"
            isPending={isPending}
          />
          <TextInput
            name="number"
            label="Phone Number"
            placeholder="Enter Admin Phone number"
            error={errors.number}
            register={register}
            type="text"
            isPending={isPending}
          />

          <TextInput
            name="password"
            label="Password"
            placeholder="Enter Admin Password"
            error={errors.password}
            register={register}
            type="password"
            isPending={isPending}
          />
        </div>

        <Button
          type="submit"
          className="mt-[108px] w-[100%]"
          isPending={isPending}></Button>
      </form>
    </section>
  );
};

export default NewForm;

