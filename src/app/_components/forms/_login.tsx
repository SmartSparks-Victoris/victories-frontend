'use client';

import * as z from 'zod';

import React from 'react';
import loginSchema from '@/app/_schemas/login';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  function handleLoginSuccess() {}

  function handleLoginFailure() {}

  return (
    <section className="h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <h2>Welcome Back!</h2>
        <p>Please log in to access your personalized dashboard.</p>

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center">
          <div>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              {...register('username')}
              placeholder="Enter Your User Name"
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              id=""
              type="password"
              {...register('password')}
              placeholder="Enter Your Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

