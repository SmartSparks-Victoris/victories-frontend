'use client';

import React, { useState } from 'react';

import CreatePassword from '@/app/_components/forms/create-password';
import ForgetPassword from '@/app/_components/forms/forget-password';
import MessageAndRedirect from '@/app/_components/shared-ui/temp-component';
import VerificationForm from '@/app/_components/forms/verification-form';

const Page = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState(null);
  const [mobile, setMobile] = useState(null);

  return (
    <>
      {step === 1 && (
        <ForgetPassword
          setStep={setStep}
          setUsername={setUsername}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <VerificationForm
          setStep={setStep}
          username={username}
          mobile={mobile}
        />
      )}
      {step === 3 && (
        <CreatePassword setStep={setStep} username={username} mobile={mobile} />
      )}
      {step === -1 && <MessageAndRedirect nextPage={'/login'} />}
    </>
  );
};

export default Page;

