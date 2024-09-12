'use client';

import * as z from 'zod';

import React from 'react';
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

  function handleLoginSuccess() {}

  function handleLoginFailure() {}

  return (
    <section className="h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <h2>New Admin!</h2>
        <p>You are going to add a new admin.</p>

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center">
          <div>
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                {...register('fname')}
                placeholder="Enter Your First Name"
              />
              {errors.fname && (
                <p className="fieldError">{errors.fname.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="fname">Last Name</label>
              <input
                type="text"
                id="lname"
                {...register('lname')}
                placeholder="Enter Your Last Name"
              />
              {errors.fname && (
                <p className="fieldError">{errors.fname.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                {...register('email')}
                placeholder="Enter Your Email"
              />
              {errors.fname && (
                <p className="fieldError">{errors.fname.message}</p>
              )}
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...register('username')}
                placeholder="Enter Your User Name"
              />
              {errors.username && (
                <p className="fieldError">{errors.username.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                {...register('password')}
                placeholder="Enter Your Password"
              />
              {errors.password && (
                <p className="fieldError">{errors.password.message}</p>
              )}
            </div>
          </div>
          <input type="submit" value="Add New" />
        </form>
      </div>
    </section>
  );
};

export default NewForm;

