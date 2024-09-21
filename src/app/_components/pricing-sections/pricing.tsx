'use client';

import React, { useEffect, useState } from 'react';

import MessageAndRedirect from '../shared-ui/temp-component';
import Payment from './payment';
import PricingItem from './pricing-item';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const Pricing = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState<string | number | null>(null);

  const [duration, setDuration] = useState(
    searchParams.get('duration') || 'monthly',
  );
  const [plan, setPlan] = useState(searchParams.get('plan') || 'free');
  console.log(plan);

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

  function handleDurationChange(value: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('duration', value);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
  }

  function handlePlanChange(value: string, price: string | number) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('plan', value);
    router.push(`${window.location.pathname}?${searchParams.toString()}`);
    setPrice(price);
    setStep((step) => step + 1);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  return (
    <>
      {step === 1 && (
        <div>
          <h2 className="text-[#231318] text-[20px] font-bold font-roboto text-center">
            Choose the Plan That Fits Your Business Needs
          </h2>
          <p className="text-[16px] font-medium text-center mt-[16px]">
            Whether you are a small business or a large enterprise, we have a
            plan that suits your customer service requirements.
          </p>
          <div className='flex bg-[url("/images/service-background.png")] bg-cover py-[14px] px-[22px] rounded-[16px] gap-[46px] w-fit flex-wrap mx-auto mt-[40px] mb-[32px]'>
            <button
              onClick={() => handleDurationChange('monthly')}
              className={`${
                duration === 'monthly'
                  ? 'bg-textWhite py-[16px] px-[14px] rounded-[16px] text-[20px] font-medium'
                  : 'text-textWhite font-bold text-[20px]'
              } `}>
              Monthly
            </button>
            <button
              onClick={() => handleDurationChange('annual')}
              className={`${
                duration === 'annual'
                  ? 'bg-textWhite py-[16px] px-[14px] rounded-[16px]'
                  : 'text-textWhite font-bold text-[20px]'
              } flex gap-[10px] items-center`}>
              <span className="text-[20px] flex">Annual</span>
              <span className="text-[16px] flex">30% Offer</span>
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-[40px]">
            <PricingItem
              handlePlanChange={handlePlanChange}
              type={'Free'}
              price={'0'}
              description={'Per user/month , billed annualy :'}
              features={[
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
              ]}
            />
            <PricingItem
              handlePlanChange={handlePlanChange}
              type={'Pro'}
              price={'400'}
              description={'Great For Medium business :'}
              features={[
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
              ]}
            />
            <PricingItem
              handlePlanChange={handlePlanChange}
              type={'Enterprise'}
              price={'Custom'}
              description={'For multiple items :'}
              features={[
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
                'Lorem ipsum dolor sit amet, ',
              ]}
            />
          </div>

          <div className="flex justify-between mt-[55px] flex-wrap gap-[24px] items-center">
            <p className="text-[#452033] text-[20px] font-medium">
              Your current plan is set to auto-renew on a regular basis.
            </p>
            <button className="text-[#452033] text-[16px] font-bold border-[1px] border-solid border-[#7E4556] p-[14px] rounded-[16px]">
              Cancel your subscription
            </button>
          </div>
        </div>
      )}
      {step === 2 && <Payment total={price} handleNext={handleNext} />}
      {step === 3 && (
        <MessageAndRedirect
          nextPage="/"
          src="/images/payment-success.png"
          text="Thank you for your payment"
          text2="Your transaction has been successfully completed"
        />
      )}
    </>
  );
};

export default Pricing;

