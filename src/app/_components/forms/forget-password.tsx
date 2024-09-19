/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import Button from '../shared-ui/button';
import React from 'react';
import TextInput from '../shared-ui/text-input';
import mobileSchema from '@/app/_schemas/forget-password';
import { motion } from 'framer-motion';
import useAnimation from '@/app/_hooks/useAnimation';
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

  const { setIsStepTransitionComplete, animationVariants } = useAnimation();

  function handleLoginSuccess(data) {
    // TODO: Redirect to reset password page
    setUsername(data.username);
    setMobile(data.mobile);
    setIsStepTransitionComplete(false);
    setStep(2); // Move to step 2
  }

  function handleLoginFailure() {}

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-[32px]">
      <div className="container bg-backgroundColor rounded-[20px] ">
        <motion.div
          variants={animationVariants}
          initial="hiddenLeft"
          animate="visible"
          exit="hiddenLeft"
          className="flex flex-col justify-center gap-[32px] lg:gap-[40px] items-center py-[32px] px-[40px] mx-[16px] lg:flex-row">
          <div className="w-[100%] flex items-center justify-center">
            <img src="/images/reset.png" alt="" />
          </div>
          <div className="w-[100%]">
            <h2 className="font-semibold text-[30px] text-textColor text-center lg:text-start font-roboto">
              Find your account
            </h2>

            <form
              onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
              className="flex flex-col justify-center ">
              <div className="mt-[24px] mb-[64px] flex flex-col gap-[16px]">
                <TextInput
                  label="Email"
                  type="email"
                  name="email"
                  error={errors.email}
                  register={register}
                  placeholder={'Enter your email'}
                />
                <TextInput
                  label="Mobile"
                  type="text"
                  name="mobile"
                  error={errors.mobile}
                  register={register}
                  placeholder={'Enter your Mobile Number'}
                />
                <p>
                  You may receive Mobile notifications for security and login
                  purposes
                </p>
              </div>
              <Button
                type="submit"
                value="Send"
                className={'w-[100%]'}></Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgetPassword;

