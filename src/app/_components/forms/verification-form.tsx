/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import Button from '../shared-ui/button';
import { VerificationFormProps } from '@/app/_types/guest.types';
import { motion } from 'framer-motion';
import useAnimation from '@/app/_hooks/useAnimation';
import { useForm } from 'react-hook-form';
import verificationSchema from '@/app/_schemas/verification';
import { zodResolver } from '@hookform/resolvers/zod';

const VerificationForm: React.FC<VerificationFormProps> = ({
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
    setValue,
  } = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
  });

  const [code, setCode] = useState<string[]>(Array(6).fill(''));

  const handleLoginSuccess = () => {
    // TODO: Handle successful verification
    setIsStepTransitionComplete(false);
    setStep(3);
  };

  const handleLoginFailure = () => {
    // TODO: Handle failure case
  };

  const resendCode = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: Trigger code resend logic
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;

    // Handle adding numbers
    if (value.length === 1) {
      setCode((prev) => {
        const newCode = [...prev];
        newCode[index] = value;
        return newCode;
      });
      setValue(`n${index + 1}`, value);

      // Move to the next input if it's not the last one
      if (index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput?.focus();
      }
    }

    // Handle deletion of numbers
    if (value === '') {
      setCode((prev) => {
        const newCode = [...prev];
        newCode[index] = ''; // Clear the current input
        return newCode;
      });
      setValue(`n${index + 1}`, ''); // Reset the form value

      // Move to the previous input when deleting
      if (index > 0) {
        const prevInput = document.getElementById(`code-input-${index - 1}`);
        prevInput?.focus();
      }
    }
  };
  const { setIsStepTransitionComplete, animationVariants } = useAnimation();

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-4">
      <div className="container rounded-[20px] bg-backgroundColor">
        <motion.div
          variants={animationVariants}
          initial="hiddenRight"
          animate="visible"
          exit="hiddenLeft"
          className="flex flex-col justify-center gap-4 lg:gap-5 items-center  py-4 px-5 mx-2 lg:flex-row">
          <div className="w-[100%] flex items-center justify-center">
            <img src="/images/otp.png" alt="" />
          </div>
          <div className="w-[100%]">
            <h2 className="font-semibold text-[30px] font-roboto">
              Code Verification
            </h2>

            <form
              onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}>
              <p className="text-[22px] font-medium mt-4 mb-3">
                Enter your code
              </p>

              <div className="code-inputs  flex-wrap flex gap-2 mb-6">
                {[1, 2, 3, 4, 5, 6].map((num, index) => (
                  <div key={num} className="">
                    <input
                      type="text"
                      id={`code-input-${index}`}
                      {...register(`n${num}`)}
                      value={code[index]}
                      className={`border-2 border-solid border-black text-center w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] xl:w-[86px] xl:h-[86px] rounded-[15px] text-[30px] font-medium  ${
                        errors[`n${num}`] ? 'border-errorColor' : ''
                      }`}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    {errors[`n${num}`] && (
                      <p className="text-red-500 text-sm">
                        {errors[`n${num}`]?.message}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  value="Send"
                  className="w-[100%]"></Button>

                <button
                  onClick={resendCode}
                  className="mt-2 text-[20px] font-bold text-black underline">
                  Resend Code
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationForm;

