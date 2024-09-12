'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import verificationSchema from '@/app/_schemas/verification';
import { zodResolver } from '@hookform/resolvers/zod';

interface VerificationFormProps {
  setStep: (step: number) => void;
  username: string;
  mobile: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({
  setStep,
  username,
  mobile,
}) => {
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

  return (
    <div className="verification-form min-h-[100vh] py-[16px] flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center">
        <h1>Code Verification</h1>

        <form onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}>
          <p>Please enter the verification code sent to {mobile}</p>

          <div className="code-inputs flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div key={num}>
                <input
                  type="number"
                  id={`code-input-${index}`}
                  {...register(`n${num}`)}
                  value={code[index]}
                  className={`border-2 border-solid border-green-200 text-center w-12 h-12 ${
                    errors[`n${num}`] ? 'border-red-500' : ''
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

          <input
            type="submit"
            value="Submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          />

          <button onClick={resendCode} className="mt-2">
            Resend Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationForm;

