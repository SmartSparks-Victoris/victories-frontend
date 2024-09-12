'use client';

import * as z from 'zod';

import React from 'react';
import TextInput from '../shared-ui/text-input';
import contactSchema from '@/app/_schemas/contact';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function handleLoginSuccess() {}

  function handleLoginFailure() {}

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex justify-center gap-8 flex-wrap items-center">
        <div className="h-[200px] w-[200px] bg-gray-500"></div>
        <form onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}>
          <TextInput
            placeholder="Enter Your Name"
            type="text"
            name="name"
            label=""
            error={errors.name}
            register={register}
          />
          <TextInput
            placeholder="Enter Your Email"
            type="email"
            name="email"
            label=""
            error={errors.email}
            register={register}
          />
          <div>
            <textarea
              {...register('message')}
              className="resize-none"
              placeholder="Enter Your Message"></textarea>
            {errors.message && (
              <p className="fieldError">{errors.message.message}</p>
            )}
          </div>
          <input type="submit" value="join" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

