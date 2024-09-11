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
    <section className="h-[calc(100vh-var(--guestNav))]  flex  justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-[50px] bg-gray-500"></div>
        <h2>Tell Us About Your Business</h2>
        <p>Get a personalized trial subscription</p>

        {/* name: z.string().min(1),
  industry: z.enum(industry),
  size: z.enum(size),
  communicate: z.enum(communicate),
  solution: z.enum(solution),
  customers: z.enum(customers),
  plan: z.enum(plan),
  people: z.enum(people),
  email: z.string().email(),
  phone: z.string().min(1), */}

        <form
          onSubmit={handleSubmit(handleLoginSuccess, handleLoginFailure)}
          className="flex flex-col justify-center">
          {step === 0 && (
            <div className="flex justify-between gap-16">
              <div className="flex flex-col gap-4">
                <TextInput
                  placeholder="Enter Company Name"
                  type="text"
                  name="name"
                  label="Company Name"
                  error={errors.name}
                  register={register}
                />
                {/* <div>
                  <label htmlFor="name">Company Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder="Enter Company Name"
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div> */}
                <div className="flex gap-4">
                  <DropDown
                    name="industry"
                    label="Company Industry"
                    register={register}
                    array={industry}
                    error={errors.industry}
                  />
                  {/* <div>
                    <label htmlFor="industry">Company Industry</label>
                    <select {...register('industry')} id="industry">
                      {industry.map((ind) => {
                        return (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        );
                      })}
                    </select>
                    {errors.industry && <p>{errors.industry.message}</p>}
                  </div> */}
                  <DropDown
                    name="size"
                    label="Company Size"
                    register={register}
                    array={size}
                    error={errors.size}
                  />

                  {/* <div>
                    <label htmlFor="size">Company Size</label>
                    <select {...register('size')} id="size">
                      {size.map((s) => {
                        return (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        );
                      })}
                    </select>
                    {errors.size && <p>{errors.size.message}</p>}
                  </div> */}
                </div>
                <DropDown
                  name="communicate"
                  label="How do you communicate with customers today?"
                  register={register}
                  array={communicate}
                  error={errors.communicate}
                />

                {/* <div>
                  <label htmlFor="communicate">
                    How do you communicate with customers today?
                  </label>
                  <select {...register('communicate')} id="communicate">
                    {communicate.map((com) => {
                      return (
                        <option key={com} value={com}>
                          {com}
                        </option>
                      );
                    })}
                  </select>
                  {errors.communicate && <p>{errors.communicate.message}</p>}
                </div> */}
              </div>
              <div className="flex flex-col gap-4">
                <DropDown
                  name="solution"
                  label="Have you ever set up a customer support solution?"
                  register={register}
                  array={solution}
                  error={errors.solution}
                />

                {/* <div>
                  <label htmlFor="solution">
                    Have you ever set up a customer support solution?
                  </label>
                  <select {...register('solution')} id="solution">
                    {solution.map((sol) => {
                      return (
                        <option key={sol} value={sol}>
                          {sol}
                        </option>
                      );
                    })}
                  </select>
                  {errors.solution && <p>{errors.solution.message}</p>}
                </div> */}
                <DropDown
                  name="customers"
                  label="How many customers will use our project?"
                  register={register}
                  array={customers}
                  error={errors.customers}
                />

                {/* <div>
                  <label htmlFor="customers">
                    How many customers will use our project ?
                  </label>
                  <select {...register('customers')} id="customers">
                    {customers.map((cus) => {
                      return (
                        <option key={cus} value={cus}>
                          {cus}
                        </option>
                      );
                    })}
                  </select>
                  {errors.customers && <p>{errors.customers.message}</p>}
                </div> */}
                <DropDown
                  name="plan"
                  label="When do you plan to launch?"
                  register={register}
                  array={plan}
                  error={errors.plan}
                />

                {/* <div>
                  <label htmlFor="plan">When do you plan to launch?</label>
                  <select {...register('plan')} id="plan">
                    {plan.map((pl) => {
                      return (
                        <option key={pl} value={pl}>
                          {pl}
                        </option>
                      );
                    })}
                  </select>
                  {errors.plan && <p>{errors.plan.message}</p>}
                </div> */}
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
              {/* <div>
                <label htmlFor="people">
                  How do you want people to reach you?
                </label>
                <select {...register('people')} id="people">
                  {people.map((ppl) => {
                    return (
                      <option key={ppl} value={ppl}>
                        {ppl}
                      </option>
                    );
                  })}
                </select>
                {errors.people && <p>{errors.people.message}</p>}
              </div> */}
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

              {/* <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div> */}
              {/* <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone')}
                  placeholder="Enter Your Phone"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </div> */}
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

