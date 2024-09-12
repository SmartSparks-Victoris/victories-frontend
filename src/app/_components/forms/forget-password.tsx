'use client';

import * as z from 'zod';

import React from 'react';
import mobileSchema from '@/app/_schemas/forget-password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ForgetPassword = ({ setStep, setUsername, setMobile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof mobileSchema>>({
    resolver: zodResolver(mobileSchema),
  });

  function handleLoginSuccess(data) {
    // TODO: Redirect to reset password page
    setUsername(data.username);
    setMobile(data.mobile);
    setStep(2); // Move to step 2
  }

  function handleLoginFailure() {}

  return (
    <section className="h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <div>
          <h2>Find Your Account</h2>
          <p>Please log in to access your personalized dashboard.</p>

          <form
            onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
            className="flex flex-col justify-center">
            <div>
              <label htmlFor="username"></label>
              <input
                type="text"
                id="mobile"
                {...register('username')}
                placeholder="Enter Your User Name"
              />
              {errors.mobile && (
                <p className="fieldError">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="mobile"></label>
              <input
                type="text"
                id="mobile"
                {...register('mobile')}
                placeholder="Enter Your Mobile Number"
              />
              {errors.mobile && (
                <p className="fieldError">{errors.mobile.message}</p>
              )}
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

