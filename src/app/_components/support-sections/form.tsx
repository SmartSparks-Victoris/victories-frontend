'use client';

import * as z from 'zod';

import React from 'react';
import messageSchema from '@/app/_schemas/message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const ChatForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  function handleSuccessMessage() {}

  function handleErrorMessage() {}

  return (
    <section>
      <form onSubmit={handleSubmit(handleSuccessMessage, handleErrorMessage)}>
        <textarea id="chatMessage" {...register('message')}></textarea>
        {errors.message && (
          <p className="fieldError">{errors.message.message}</p>
        )}
        <input type="submit" />
      </form>
    </section>
  );
};

export default ChatForm;

