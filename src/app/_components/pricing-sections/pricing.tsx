'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Payment from './payment';

const Pricing = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);

  const [duration, setDuration] = useState(
    searchParams.get('duration') || 'monthly',
  );
  const [plan, setPlan] = useState(searchParams.get('plan') || 'free');

  useEffect(() => {
    const duration = searchParams.get('duration');
    const plan = searchParams.get('plan');

    if (duration) {
      setDuration(duration);
    }

    if (plan) {
      setPlan(plan);
    }
  }, [searchParams]);

  function handleDurationChange(value) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('duration', value);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handlePlanChange(value) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('plan', value);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  function handlePrevious() {
    setStep((step) => step - 1);
  }

  return (
    <>
      {step === 1 && (
        <div>
          <h2>Choose the Plan That Fits Your Business Needs</h2>
          <p>
            Whether you are a small business or a large enterprise, we have a
            plan that suits your customer service requirements.
          </p>
          <div>
            <button
              onClick={() => handleDurationChange('monthly')}
              className={`${
                duration === 'monthly' ? 'bg-green-300' : 'bg-white'
              }`}>
              Monthly
            </button>
            <button
              onClick={() => handleDurationChange('annual')}
              className={`${
                duration === 'annual' ? 'bg-green-300' : 'bg-white'
              }`}>
              Annual - 30% Offer
            </button>
          </div>
          <div>
            <button
              onClick={() => handlePlanChange('free')}
              className={`${plan === 'free' ? 'bg-orange-300' : 'bg-white'}`}>
              Free Plan
            </button>
            <button
              onClick={() => handlePlanChange('basic')}
              className={`${plan === 'basic' ? 'bg-orange-300' : 'bg-white'}`}>
              Basic Plan
            </button>
            <button
              onClick={() => handlePlanChange('premium')}
              className={`${
                plan === 'premium' ? 'bg-orange-300' : 'bg-white'
              }`}>
              Premium Plan
            </button>
          </div>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && <Payment />}
    </>
  );
};

export default Pricing;

