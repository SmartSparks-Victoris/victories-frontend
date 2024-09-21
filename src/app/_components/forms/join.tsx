/* eslint-disable @next/next/no-img-element */
'use client';

import * as z from 'zod';

import { AnimatePresence, motion } from 'framer-motion';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  communicate,
  employees,
  plan,
  size,
  solution,
  type,
} from '@/app/_dropdowns/join';

import Button from '../shared-ui/button';
import DocumentItem from './document-item';
import DropDown from '../shared-ui/dropdown';
import FileUpload from '../shared-ui/file-upload';
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
    if (step < 3) {
      setIsStepTransitionComplete(false); // Disable rendering next step until transition completes
      setStep((step) => step + 1);
    }
  }

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof joinSchema>>({
    resolver: zodResolver(joinSchema),
  });

  function handleSuccess() {
    console.log('SUCCESS');
    setStep(-1);
  }

  function handleFailure(errors: FieldErrors) {
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
          {step === 3 && 'Accepted documents'}
          {step !== 3 && 'Tell Us About Your Business'}
        </h2>
        <p className="font-semibold text-[20px] text-[#999294] text-center">
          {step === 3 &&
            "Upload one of these documents to verify your business's address and phone number"}
          {step !== 3 && 'Get a personalized trial subscription'}
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
                className="flex justify-between gap-[44px] flex-col xl:flex-row items-start w-[100%]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[40px] gap-y-[32px] w-[100%]">
                  <TextInput
                    placeholder="Enter Business Name"
                    type="text"
                    name="name"
                    label="Business Name"
                    error={errors.name}
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
                  <TextInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    label="Email"
                    error={errors.email}
                    register={register}
                  />
                  <TextInput
                    placeholder="City"
                    type="text"
                    name="city"
                    label="City"
                    error={errors.city}
                    register={register}
                  />

                  <TextInput
                    placeholder="Street Address"
                    type="text"
                    name="address"
                    label="Street Address"
                    error={errors.address}
                    register={register}
                  />
                  <TextInput
                    placeholder="Street Address 2"
                    type="text"
                    name="address2"
                    label="Street Address 2"
                    error={errors.address2}
                    register={register}
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
                className="grid grid-cols-1 xl:grid-cols-2 gap-x-[40px] gap-y-[32px] w-[100%]">
                <TextInput
                  placeholder="State"
                  type="text"
                  name="state"
                  label="State"
                  error={errors.state}
                  register={register}
                />
                <TextInput
                  placeholder="Postal Code"
                  type="text"
                  name="postal"
                  label="Postal Code"
                  error={errors.postal}
                  register={register}
                />

                <TextInput
                  placeholder="Link"
                  type="text"
                  name="link"
                  label="Link"
                  error={errors.link}
                  register={register}
                />

                <TextInput
                  placeholder="Country"
                  type="text"
                  name="country"
                  label="Country"
                  error={errors.country}
                  register={register}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {step === 2 && isStepTransitionComplete && (
              <motion.div
                variants={animationVariants}
                initial="hiddenRight"
                animate="visible"
                exit="hiddenRight"
                className="grid grid-cols-1 xl:grid-cols-2 gap-x-[40px] gap-y-[32px] w-[100%]">
                <Controller
                  name="type"
                  control={control}
                  render={() => (
                    <DropDown
                      name="type"
                      label="Business Type"
                      control={control}
                      array={type}
                      error={errors.type}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'type'}
                    />
                  )}
                />

                <Controller
                  name="communicate"
                  control={control}
                  render={() => (
                    <DropDown
                      name="communicate"
                      label="How do you communicate with customers today?"
                      control={control}
                      array={communicate}
                      error={errors.communicate}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'communicate'}
                    />
                  )}
                />

                <Controller
                  name="size"
                  control={control}
                  render={() => (
                    <DropDown
                      name="size"
                      label="Company Size"
                      control={control}
                      array={size}
                      error={errors.size}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'size'}
                    />
                  )}
                />

                <Controller
                  name="plan"
                  control={control}
                  render={() => (
                    <DropDown
                      name="plan"
                      label="When do you plan to launch"
                      control={control}
                      array={plan}
                      error={errors.plan}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'plan'}
                    />
                  )}
                />

                <Controller
                  name="solution"
                  control={control}
                  render={() => (
                    <DropDown
                      name="solution"
                      label="Have you ever set up a customer support solution?"
                      control={control}
                      array={solution}
                      error={errors.solution}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'solution'}
                    />
                  )}
                />

                <Controller
                  name="employees"
                  control={control}
                  render={() => (
                    <DropDown
                      name="employees"
                      label="How many employees will use InstaHub ?"
                      control={control}
                      array={employees}
                      error={errors.employees}
                      setSelectedDropDown={(name: string) =>
                        setOpenDropdown(name)
                      }
                      isOpen={openDropdown === 'employees'}
                    />
                  )}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
            {step === 3 && isStepTransitionComplete && (
              <motion.div
                variants={animationVariants}
                initial="hiddenRight"
                animate="visible"
                exit="hiddenRight"
                className="grid grid-cols-1 gap-x-[40px] gap-y-[32px] w-[100%]">
                <div className="flex flex-col gap-[24px]">
                  <DocumentItem
                    head="Utility bill"
                    text="A document proving that services are being provided for you to run your business (gas, water, electricity, etc...)."
                  />
                  <DocumentItem
                    head="Bank statement"
                    text="A printed or electronic record of the balance in a bank account and the transactions therein."
                  />
                  <DocumentItem
                    head="Business license"
                    text="A permit issued by a government agency that allows you to conduct business within a geographical jurisdiction."
                  />
                </div>
                <FileUpload setValue={setValue} />
                {errors.file && (
                  <p className="text-red-600">{errors.file.message}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {step === 0 && (
            <Button onClick={getNext} className="w-[100%] xl:w-[50%] mt-[80px]">
              Next
            </Button>
          )}
          {step === 1 && (
            <div className="flex gap-[16px] flex-wrap md:flex-nowrap justify-center w-[100%] xl:w-[50%] mt-[80px]">
              <Button
                onClick={getPrevious}
                className="w-[100%]"
                variant="outline"
                variantColor="dark">
                Previous
              </Button>
              <Button onClick={getNext} className="w-[100%]">
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="flex gap-[16px] flex-wrap md:flex-nowrap justify-center w-[100%] xl:w-[50%] mt-[80px]">
              <Button
                onClick={getPrevious}
                className="w-[100%]"
                variant="outline"
                variantColor="dark">
                Previous
              </Button>
              <Button onClick={getNext} className="w-[100%]">
                Next
              </Button>
            </div>
          )}
          {step === 3 && (
            <div className="flex gap-[16px] flex-wrap md:flex-nowrap justify-center w-[100%] xl:w-[50%] mt-[80px]">
              <Button
                onClick={getPrevious}
                className="w-[100%]"
                variant="outline"
                variantColor="dark">
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

// <Controller
// name="industry"
// control={control}
// defaultValue=""
// render={({ field }) => (
//   <DropDown
//     name="industry"
//     label="Company Industry"
//     control={control}
//     array={industry}
//     error={errors.industry}
//     value={field.value}
//     selectedDropDown={openDropdown}
//     setSelectedDropDown={(name) => setOpenDropdown(name)}
//     isOpen={openDropdown === 'industry'}
//   />
// )}
// />

export default JoinForm;

