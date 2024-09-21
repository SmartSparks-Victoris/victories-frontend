import * as z from 'zod';

import React, { FC } from 'react';

import Button from '../shared-ui/button';
import { PaymentProps } from '@/app/_types/admin.types';
import ResultsHead from '../shared-ui/results-head';
import TextInput from '../shared-ui/text-input';
import paymentSchema from '@/app/_schemas/payment';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Payment: FC<PaymentProps> = ({ total, handleNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  function handleSuccessSubmit() {
    handleNext();
  }
  function handleFailureSubmit() {}

  return (
    <div className="flex border-1 border-surfaceTertiary rounded-[32px] py-[44px] px-4">
      <div className="w-[100%]">
        <ResultsHead text="Credit Card" icon="credit" result={`$${total}`} />
        <form
          action=""
          onSubmit={handleSubmit(handleSuccessSubmit, handleFailureSubmit)}
          className="w-[100%] flex items-center flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-[100%]">
            <TextInput
              name="name"
              label="Cardholder's Name"
              register={register}
              error={errors.name}
              type="text"
            />
            <TextInput
              name="number"
              label="Card Number"
              register={register}
              error={errors.number}
              type="text"
            />
            <TextInput
              name="expiry"
              label="Expiry"
              register={register}
              error={errors.expiry}
              type="text"
            />
            <TextInput
              name="cvc"
              label="CVC"
              register={register}
              error={errors.cvc}
              type="text"
            />
            <div>
              <label className="flex items-center gap-1 flex-wrap">
                <input
                  type="checkbox"
                  {...register('saveCard')}
                  onClick={(e) => {
                    e.stopPropagation(); // Optional: prevent any parent click events
                  }}
                />
                <span className="custom-checkbox flex-shrink-0"></span>
                <span className="text-lg">Remember bank card</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            value="Pay now"
            className="px-[0] md:px-5 w-[100%] lg:w-fit"
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;

