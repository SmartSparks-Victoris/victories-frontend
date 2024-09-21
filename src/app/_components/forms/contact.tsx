/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import React from 'react';
import TextInput from '../shared-ui/text-input';
import Transition from '../shared-ui/transition';
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
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center text-textNavBarPrimary py-[56px]">
      <div className="container bg-backgroundOpacity mx-auto flex flex-col lg:flex-row justify-center gap-8 items-center rounded-lg py-8 px-6">
        <div className="w-[100%] flex justify-center">
          <Transition from={'left'}>
            <img src="/images/contact.png" alt="" />
          </Transition>
        </div>
        <Transition from={'right'} className="w-[100%]">
          <h2 className="text-[40px] font-roboto font-semibold">Contact Us</h2>
          <p className="text-[16px] mb-4">
            Reach out to us for any inquiries or support.
          </p>
          <form
            onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
            className="flex flex-col gap-3 w-[100%]">
            <TextInput
              placeholder="Enter Your Name"
              type="text"
              name="name"
              label="Full Name"
              labelColor="white"
              error={errors.name}
              register={register}
            />
            <TextInput
              placeholder="Enter Your Email"
              type="email"
              name="email"
              label="Email"
              labelColor="white"
              error={errors.email}
              register={register}
            />
            <TextInput
              placeholder="Enter Your Message"
              type="textarea"
              name="message"
              label="Message"
              labelColor="white"
              error={errors.email}
              register={register}
            />

            <Button type="submit" value="Send" className="mt-5"></Button>
          </form>
        </Transition>
      </div>
    </section>
  );
};

export default ContactForm;

