'use client';

import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import CreatePassword from '@/app/_components/forms/create-password';
import ForgetPassword from '@/app/_components/forms/forget-password';
import MessageAndRedirect from '@/app/_components/shared-ui/temp-component';
import VerificationForm from '@/app/_components/forms/verification-form';
import useAnimation from '@/app/_hooks/useAnimation';

const Page = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState(null);
  const [mobile, setMobile] = useState(null);

  const { isStepTransitionComplete, handleExitComplete } = useAnimation();

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {step === 1 && isStepTransitionComplete && (
          <ForgetPassword
            setStep={setStep}
            setUsername={setUsername}
            setMobile={setMobile}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {step === 2 && isStepTransitionComplete && (
          <VerificationForm
            setStep={setStep}
            username={username}
            mobile={mobile}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {step === 3 && isStepTransitionComplete && (
          <CreatePassword
            setStep={setStep}
            username={username}
            mobile={mobile}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {step === -1 && isStepTransitionComplete && (
          <MessageAndRedirect
            src="/images/reset-success.png"
            text="Your password has been changed successfully"
            nextPage={'/login'}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;

