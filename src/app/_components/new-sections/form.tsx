'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import ResultsHead from '../shared-ui/results-head';
import TextInput from '../shared-ui/text-input';
import newSchema from '@/app/_schemas/new';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const NewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof newSchema>>({
    resolver: zodResolver(newSchema),
  });

  function handleSuccess(data) {}
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
          />
          <TextInput
            name="lname"
            label="Last Name"
            placeholder="Enter Admin First Name"
            error={errors.lname}
            register={register}
            type="text"
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter Admin Email"
            error={errors.email}
            register={register}
            type="email"
          />
          <TextInput
            name="username"
            label="UserName"
            placeholder="Enter Admin Username"
            error={errors.username}
            register={register}
            type="text"
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Enter Admin Password"
            error={errors.password}
            register={register}
            type="password"
          />
        </div>

        <Button type="submit" className="mt-[108px] w-[100%]"></Button>
      </form>
    </section>
  );
};

export default NewForm;

