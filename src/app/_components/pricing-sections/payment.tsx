import * as z from 'zod';

import React from 'react';
import paymentSchema from '@/app/_schemas/payment';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  function handleSuccessSubmit() {}
  function handleFailureSubmit() {}

  return (
    <div>
      <div>Plan Details</div>
      <div>
        <form
          action=""
          onSubmit={handleSubmit(handleSuccessSubmit, handleFailureSubmit)}>
          <div>
            <label htmlFor="name">Cardholder Name</label>
            <input
              type="text"
              {...register('name')}
              id="name"
              placeholder="Enter Carholder name "
            />
            {errors.name && <p className="fieldError"> errors.name.message</p>}
          </div>
          <div>
            <label htmlFor="number">Card Number</label>
            <input
              type="text"
              {...register('number')}
              id="number"
              placeholder="Enter Card number "
            />
            {errors.number && (
              <p className="fieldError"> errors.number.message</p>
            )}
          </div>
          <div>
            <div>
              <label htmlFor="expiry">Expiry</label>
              <input
                type="text"
                {...register('expiry')}
                id="number"
                placeholder="Enter Card EXpiry "
              />
              {errors.expiry && (
                <p className="fieldError"> errors.expiry.message</p>
              )}
            </div>
            <div>
              <label htmlFor="cvc">cvc</label>
              <input
                type="text"
                {...register('cvc')}
                id="number"
                placeholder="Enter Card EXpiry "
              />
              {errors.cvc && <p className="fieldError"> errors.cvc.message</p>}
            </div>
          </div>

          <input type="submit" value="Pay now" />
        </form>
      </div>
    </div>
  );
};

export default Payment;

