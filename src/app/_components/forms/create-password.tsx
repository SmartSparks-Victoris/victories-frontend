'use client';

import * as z from 'zod';

import React from 'react';
import createPasswordSchema from '@/app/_schemas/craete-password';
import mobileSchema from '@/app/_schemas/forget-password';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CreatePassword = ({ setStep, username, mobile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createPasswordSchema>>({
    resolver: zodResolver(createPasswordSchema),
  });

  function handleLoginSuccess(data) {
    // TODO: Redirect to reset password page
    setStep(-1);
  }

  function handleLoginFailure() {}

  return (
    <section className="h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <div>
          <h2>Create New Password</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <form
            onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
            className="flex flex-col justify-center">
            <div>
              <label htmlFor="newPassword"></label>
              <input
                type="password"
                id="newPassword"
                {...register('newPassword')}
                placeholder="******"
              />
              {errors.newPassword && <p>{errors.newPassword.message}</p>}
            </div>

            <div>
              <label htmlFor="newPassword"></label>
              <input
                type="password"
                id="confirm"
                {...register('confirm')}
                placeholder="******"
              />
              {errors.confirm && <p>{errors.confirm.message}</p>}
            </div>
            <input type="submit" value="Confirm" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePassword;

