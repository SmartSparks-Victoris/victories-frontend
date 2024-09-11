'use client';

import * as z from 'zod';

import React from 'react';
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
    <section className="h-[calc(100vh-var(--guestNav))] bg-green-800 flex  justify-center items-center">
      <div className="container mx-auto flex justify-center gap-8 flex-wrap items-center">
        <div className="h-[200px] w-[200px] bg-gray-500"></div>
        <form onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}>
          <div>
            <input
              type="text"
              {...register('name')}
              placeholder="Enter Your Name"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register('email')}
              placeholder="Enter Your Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              {...register('message')}
              className="resize-none"></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <input type="submit" value="join" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

