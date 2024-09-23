/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { FC, useTransition } from 'react';

import Button from '../shared-ui/button';
import { ForgetPasswordProps } from '@/app/_types/guest.types';
import TextInput from '../shared-ui/text-input';
import mobileSchema from '@/app/_schemas/forget-password';
import { motion } from 'framer-motion';
import useAnimation from '@/app/_hooks/useAnimation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const ForgetPassword: FC<ForgetPasswordProps> = ({
  setStep,
  setEmail,
  setMobile,
  setId,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof mobileSchema>>({
    resolver: zodResolver(mobileSchema),
  });

  const type = 'success';
  // const response = {
  //   message: 'Invalid Email or Mobile Number',
  // };
  const response = {
    id: 6,
  };

  const { setIsStepTransitionComplete, animationVariants } = useAnimation();

  function handleLoginSuccess(data) {
    // TODO: Redirect to reset password page
    startTransition(() => {
      if (type === 'error') {
        toast.error(response.message);
      } else {
        setId(response.id);
        setEmail(data.email);
        setMobile(data.mobile);
        setIsStepTransitionComplete(false);
        setStep(2); // Move to step 2
      }
    });
  }

  function handleLoginFailure() {}

  const [isPending, startTransition] = useTransition();

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-4">
      <div className="container bg-backgroundColor rounded-[20px] ">
        <motion.div
          variants={animationVariants}
          initial="hiddenLeft"
          animate="visible"
          exit="hiddenLeft"
          className="flex flex-col justify-center gap-4 lg:gap-5 items-center py-4 px-5 mx-2 lg:flex-row">
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
              <div className="mt-3 mb-8 flex flex-col gap-2">
                <TextInput
                  label="Email"
                  type="email"
                  name="email"
                  error={errors.email}
                  register={register}
                  placeholder={'Enter your email'}
                  isPending={isPending}
                />
                <TextInput
                  label="Mobile"
                  type="text"
                  name="mobile"
                  error={errors.mobile}
                  register={register}
                  placeholder={'Enter your Mobile Number'}
                  isPending={isPending}
                />
                <p>
                  You may receive Mobile notifications for security and login
                  purposes
                </p>
              </div>
              <Button
                type="submit"
                value="Send"
                isPending={isPending}
                className={'w-[100%]'}></Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgetPassword;

