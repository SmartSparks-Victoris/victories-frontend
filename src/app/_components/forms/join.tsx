'use client';

import * as z from 'zod';

import React, { useState } from 'react';
import {
  communicate,
  customers,
  industry,
  people,
  plan,
  size,
  solution,
} from '@/app/_dropdowns/join';

import DropDown from '../shared-ui/dropdown';
import TextInput from '../shared-ui/text-input';
import joinSchema from '@/app/_schemas/join';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const JoinForm = () => {
  const [step, setStep] = useState(0);

  function getPrevious() {
    if (step > 0) {
      setStep((step) => step - 1);
    }
  }

  function getNext() {
    if (step < 1) {
      setStep((step) => step + 1);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof joinSchema>>({
    resolver: zodResolver(joinSchema),
  });

  function handleLoginSuccess() {}

  function handleLoginFailure() {}

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <h2>Tell Us About Your Business</h2>
        <p>Get a personalized trial subscription</p>

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center">
          {step === 0 && (
            <div className="flex justify-between gap-16 flex-col lg:flex-row items-center">
              <div className="flex flex-col gap-4">
                <TextInput
                  placeholder="Enter Company Name"
                  type="text"
                  name="name"
                  label="Company Name"
                  error={errors.name}
                  register={register}
                />
                <div className="flex gap-4">
                  <DropDown
                    name="industry"
                    label="Company Industry"
                    register={register}
                    array={industry}
                    error={errors.industry}
                  />
                  <DropDown
                    name="size"
                    label="Company Size"
                    register={register}
                    array={size}
                    error={errors.size}
                  />
                </div>
                <DropDown
                  name="communicate"
                  label="How do you communicate with customers today?"
                  register={register}
                  array={communicate}
                  error={errors.communicate}
                />
              </div>
              <div className="flex flex-col gap-4">
                <DropDown
                  name="solution"
                  label="Have you ever set up a customer support solution?"
                  register={register}
                  array={solution}
                  error={errors.solution}
                />
                <DropDown
                  name="customers"
                  label="How many customers will use our project?"
                  register={register}
                  array={customers}
                  error={errors.customers}
                />

                <DropDown
                  name="plan"
                  label="When do you plan to launch?"
                  register={register}
                  array={plan}
                  error={errors.plan}
                />
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <DropDown
                name="people"
                label="How do you want people to reach you?"
                register={register}
                array={people}
                error={errors.people}
              />

              <TextInput
                placeholder="Email"
                type="email"
                name="email"
                label="Email"
                error={errors.email}
                register={register}
              />
              <TextInput
                placeholder="Phone Number"
                type="text"
                name="phone"
                label="Phone Number"
                error={errors.phone}
                register={register}
              />
            </div>
          )}
          {step === 0 && <button onClick={getNext}>Next</button>}
          {step === 1 && (
            <>
              <button onClick={getPrevious}>Previous</button>
              <input type="submit" value="Login" />
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default JoinForm;

