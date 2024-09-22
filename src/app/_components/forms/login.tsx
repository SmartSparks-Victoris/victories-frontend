/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { FC } from 'react';

import Button from '../shared-ui/button';
import CustomLink from '../navigation/custom-link';
import Link from 'next/link';
import TextInput from '../shared-ui/text-input';
import loginSchema from '@/app/_schemas/login';
import { revalidateLogin } from '@/app/_actions/login';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRouter } from 'nextjs-toploader/app';
import { useSocket } from '@/app/_contexts/socket-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { API_URL } from '@/app/_data/base';

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
    // try {
    //   const res = await fetch('http://localhost:3001/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: data.username,
    //       password: data.password,
    //     }),
    //     credentials: 'include',
    //   });
    //   const result = await res.json();
    //   const user = result.user;
    //   console.log(user);
    //   connectSocket(user.id);
    //   await revalidateLogin();
    //   router.push(redirect);
    //   toast.success('Logged In Successfully');
    // } catch (error) {
    //   console.error('Error:', error);
    //   // alert('Error submitting form.');
    // }

    console.log(data);
    console.log('OK??');

    const res = await fetch(`${API_URL}/`);
    const result = await res.json();
    console.log(result);
  }

  function handleLoginFailure() {
    console.log('???');
  }

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-4">
      <div className="container flex flex-col justify-center items-center bg-backgroundColor py-4 px-5 mx-2 rounded-[20px]">
        <div className="w-[232px] flex justify-center items-center overflow-hidden">
          <img src="/images/login.png" alt="" />
        </div>
        <h2 className="font-semibold text-[30px] text-textColor mt-5 mb-2 text-center font-roboto">
          Welcome back !
        </h2>
        <p className="font-semibold text-[20px] text-[#999294] text-center">
          Please log in to access your personalized dashboard.
        </p>

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center w-[100%] md:w-[65%] lg:w-[50%]">
          <div className="mt-5 mb-[60px] flex flex-col gap-4">
            <TextInput
              placeholder="Enter Your User Name"
              type="text"
              name="username"
              label="Username"
              error={errors.username}
              register={register}
            />
            <div>
              <TextInput
                placeholder="Enter Your Password"
                type="password"
                name="password"
                label="Password"
                error={errors.password}
                register={register}
              />
              <CustomLink
                href="/forget-password"
                className="ml-auto flex text-[20px] font-medium text-[#321e28]">
                Forget Password
              </CustomLink>
            </div>
          </div>
          <Button type="submit" value="Login" className="w-[100%]" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

