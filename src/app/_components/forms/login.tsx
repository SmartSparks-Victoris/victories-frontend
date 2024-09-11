'use client';

import * as z from 'zod';

import React from 'react';
import TextInput from '../shared-ui/text-input';
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
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <h2>Welcome Back!</h2>
        <p>Please log in to access your personalized dashboard.</p>

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center">
          <TextInput
            placeholder="Enter Your User Name"
            type="text"
            name="username"
            label="Username"
            error={errors.username}
            register={register}
          />
          <TextInput
            placeholder="Enter Your Password"
            type="password"
            name="password"
            label="Password"
            error={errors.password}
            register={register}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

