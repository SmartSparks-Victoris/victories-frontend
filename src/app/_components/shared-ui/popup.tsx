'use client';

import * as z from 'zod';

import React, { useEffect, useRef } from 'react';

import Button from './button';
import TextInput from './text-input';
import newSchema from '@/app/_schemas/new';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Popup = ({ onClose }) => {
  const popupRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof newSchema>>({
    resolver: zodResolver(newSchema),
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  function handleSuccess(data) {}
  function handleError(errors) {
    console.error('Validation errors:', errors);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSuccess, handleError)}
        className="relative left-[40px] md:left-[110px] bg-textWhite p-5 rounded shadow-md"
        ref={popupRef}>
        <div className="flex flex-col gap-[32px]">
          <TextInput
            name="fname"
            label="First Name"
            placeholder="Enter Admin First Name"
            error={errors.fname}
            register={register}
            type="text"
          />
          <TextInput
            name="lname"
            label="Last Name"
            placeholder="Enter Admin First Name"
            error={errors.lname}
            register={register}
            type="text"
          />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter Admin Email"
            error={errors.email}
            register={register}
            type="email"
          />
          <TextInput
            name="username"
            label="UserName"
            placeholder="Enter Admin Username"
            error={errors.username}
            register={register}
            type="text"
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Enter Admin Password"
            error={errors.password}
            register={register}
            type="password"
          />
        </div>

        <Button type="submit" className="mt-[108px]"></Button>

        <button
          onClick={onClose}
          className="bg-red-500 text-white absolute rounded-full w-[40px] h-[40px] text-center flex items-center justify-center top-0 left-0 translate-x-[-50%] translate-y-[-50%]">
          X
        </button>
      </form>
    </div>
  );
};

export default Popup;

