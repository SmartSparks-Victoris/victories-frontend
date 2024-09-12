'use client';

import * as z from 'zod';

import React, { FC } from 'react';

import Link from 'next/link';
import TextInput from '../shared-ui/text-input';
import loginSchema from '@/app/_schemas/login';
import { revalidateLogin } from '@/app/_actions/login';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSocket } from '@/app/_contexts/socket-context';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm: FC<{ redirect: string }> = ({ redirect }) => {
  const { connectSocket } = useSocket();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLoginSuccess(data) {
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        credentials: 'include',
      });
      const result = await res.json();
      const user = result.user;
      console.log(user);
      connectSocket(user.id);
      await revalidateLogin();
      router.push(redirect);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  }

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
          <Link href="/forget-password">Forget Password?</Link>
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

