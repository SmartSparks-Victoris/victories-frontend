/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { FC } from 'react';

import Button from '../shared-ui/button';
import { CreatePasswordProps } from '@/app/_types/guest.types';
import TextInput from '../shared-ui/text-input';
import createPasswordSchema from '@/app/_schemas/create-password';
import { motion } from 'framer-motion';
import useAnimation from '@/app/_hooks/useAnimation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CreatePassword: FC<CreatePasswordProps> = ({
  setStep,
  username,
  mobile,
}) => {
  console.log(username);
  console.log(mobile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createPasswordSchema>>({
    resolver: zodResolver(createPasswordSchema),
  });

  function handleLoginSuccess(data) {
    // TODO: Redirect to reset password page
    setIsStepTransitionComplete(false);
    setStep(-1);
  }

  function handleLoginFailure() {}

  const { setIsStepTransitionComplete, animationVariants } = useAnimation();

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-4">
      <div className="container rounded-[20px] bg-backgroundColor">
        <motion.div
          variants={animationVariants}
          initial="hiddenRight"
          animate="visible"
          exit="hiddenRight"
          className="flex flex-col justify-center gap-4 lg:gap-5 items-center py-4 px-5 mx-2 lg:flex-row">
          <div className="w-[100%] flex items-center justify-center">
            <img src="/images/new-password.png" alt="" />
          </div>
          <div className="w-[100%]">
            <h2 className="font-semibold text-[30px] font-roboto">
              Create New Password
            </h2>
            <p className="text-[16px] mt-2 mb-3">
              The password must contain a mix of uppercase and lowercase letters
              numbers, and special symbols. Minimum length is 8 characters
            </p>

            <form
              onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
              className="flex flex-col justify-center">
              <div className="flex flex-col gap-2 mb-8">
                <TextInput
                  label="New Password"
                  type="password"
                  name="newPassword"
                  error={errors.newPassword}
                  register={register}
                  placeholder={'Enter your New password'}
                />
                <TextInput
                  label="Confirm New Password"
                  type="password"
                  name="confirm"
                  error={errors.confirm}
                  register={register}
                  placeholder={'Confirm your New password'}
                />
              </div>
              <Button type="submit" value="Confirm" className="w-[100%]" />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatePassword;

