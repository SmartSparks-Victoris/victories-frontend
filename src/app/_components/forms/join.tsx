/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import { AnimatePresence, motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  communicate,
  customers,
  employees,
  industry,
  people,
  plan,
  size,
  solution,
} from '@/app/_dropdowns/join';

import Button from '../shared-ui/button';
import DropDown from '../shared-ui/dropdown';
import MessageAndRedirect from '../shared-ui/temp-component';
import TextInput from '../shared-ui/text-input';
import joinSchema from '@/app/_schemas/join';
import useAnimation from '@/app/_hooks/useAnimation';
import { zodResolver } from '@hookform/resolvers/zod';

const JoinForm = () => {
  const [step, setStep] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const {
    isStepTransitionComplete,
    setIsStepTransitionComplete,
    handleExitComplete,
    animationVariants,
  } = useAnimation();

  function getPrevious() {
    if (step > 0) {
      setIsStepTransitionComplete(false); // Disable rendering next step until transition completes
      setStep((step) => step - 1);
    }
  }

  function getNext() {
    if (step < 1) {
      setIsStepTransitionComplete(false); // Disable rendering next step until transition completes
      setStep((step) => step + 1);
    }
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof joinSchema>>({
    resolver: zodResolver(joinSchema),
  });

  function handleSuccess() {
    console.log('SUCCESS');
    setStep(-1);
  }

  function handleFailure(errors: any) {
    console.error('Form submission failed due to errors:', errors);
    console.log('FAILURE');
  }

  if (step === -1) {
    return (
      <MessageAndRedirect
        src="/images/join-success.png"
        text="Your form has been sent successfully. We will contact you soon !"
        nextPage={'/'}
      />
    );
  }

  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-[32px]">
      <div className="container flex flex-col justify-center items-center bg-backgroundColor py-[32px] px-[40px] mx-[16px] rounded-[20px]">
        <div className="w-[232px] flex justify-center items-center overflow-hidden">
          <img src="/images/join.png" alt="" />
        </div>
        <h2 className="font-semibold text-[30px] text-textColor mt-[40px] mb-[16px] text-center font-roboto">
          Tell Us About Your Business
        </h2>
        <p className="font-semibold text-[20px] text-[#999294] text-center">
          Get a personalized trial subscription
        </p>

        <form
          onSubmit={handleSubmit(handleSuccess, handleFailure)}
          className="flex flex-col justify-center w-[100%] items-center gap-[32px] mt-[40px]">
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {step === 0 && isStepTransitionComplete && (
              <motion.div
                variants={animationVariants}
                initial="hiddenLeft"
                animate="visible"
                exit="hiddenLeft"
                className="flex justify-between gap-[44px] flex-col lg:flex-row items-start w-[100%]">
                <div className="flex flex-col gap-[16px] w-[100%]">
                  <TextInput
                    placeholder="Enter Company Name"
                    type="text"
                    name="name"
                    label="Company Name"
                    error={errors.name}
                    register={register}
                  />
                  <TextInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    label="Email"
                    error={errors.email}
                    register={register}
                  />

                  {/* <div className="flex gap-4 flex-grow sm:flex-row flex-col">
                </div> */}
                  <Controller
                    name="communicate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DropDown
                        name="communicate"
                        label="How do you communicate with customers today?"
                        control={control}
                        array={communicate}
                        error={errors.communicate}
                        value={field.value}
                        selectedDropDown={openDropdown}
                        setSelectedDropDown={(name) => setOpenDropdown(name)}
                        isOpen={openDropdown === 'communicate'}
                      />
                    )}
                  />
                </div>
                <div className="flex flex-col gap-[16px] w-[100%]">
                  <TextInput
                    placeholder="Phone Number"
                    type="text"
                    name="phone"
                    label="Phone Number"
                    error={errors.phone}
                    register={register}
                  />
                  <Controller
                    name="industry"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DropDown
                        name="industry"
                        label="Company Industry"
                        control={control}
                        array={industry}
                        error={errors.industry}
                        value={field.value}
                        selectedDropDown={openDropdown}
                        setSelectedDropDown={(name) => setOpenDropdown(name)}
                        isOpen={openDropdown === 'industry'}
                      />
                    )}
                  />
                  <Controller
                    name="size"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <DropDown
                        name="size"
                        label="Company Size"
                        control={control}
                        array={size}
                        error={errors.size}
                        value={field.value}
                        selectedDropDown={openDropdown}
                        setSelectedDropDown={(name) => setOpenDropdown(name)}
                        isOpen={openDropdown === 'size'}
                      />
                    )}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {step === 1 && isStepTransitionComplete && (
              <motion.div
                variants={animationVariants}
                initial="hiddenRight"
                animate="visible"
                exit="hiddenRight"
                className="flex flex-col gap-[16px] w-[100%] lg:w-[50%]">
                <Controller
                  name="plan"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropDown
                      name="plan"
                      label="When do you plan to launch"
                      control={control}
                      array={plan}
                      error={errors.plan}
                      value={field.value}
                      selectedDropDown={openDropdown}
                      setSelectedDropDown={(name) => setOpenDropdown(name)}
                      isOpen={openDropdown === 'plan'}
                    />
                  )}
                />

                <Controller
                  name="solution"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropDown
                      name="solution"
                      label="Have you ever set up a customer support solution?"
                      control={control}
                      array={solution}
                      error={errors.solution}
                      value={field.value}
                      selectedDropDown={openDropdown}
                      setSelectedDropDown={(name) => setOpenDropdown(name)}
                      isOpen={openDropdown === 'solution'}
                    />
                  )}
                />

                <Controller
                  name="employees"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <DropDown
                      name="employees"
                      label="How many employees will use InstaHub ?"
                      control={control}
                      array={employees}
                      error={errors.employees}
                      value={field.value}
                      selectedDropDown={openDropdown}
                      setSelectedDropDown={(name) => setOpenDropdown(name)}
                      isOpen={openDropdown === 'employees'}
                    />
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {step === 0 && (
            <Button onClick={getNext} className="w-[100%] md:w-[50%] mt-[80px]">
              Next
            </Button>
          )}
          {step === 1 && (
            <div className="flex gap-[16px] flex-wrap md:flex-nowrap justify-center w-[100%] lg:w-[50%] mt-[80px]">
              <Button onClick={getPrevious} className="w-[100%]">
                Previous
              </Button>
              <Button
                type="submit"
                value="Submit"
                className="w-[100%]"></Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default JoinForm;

