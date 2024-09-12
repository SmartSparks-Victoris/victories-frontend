'use client';

import * as z from 'zod';

import React from 'react';
import messageSchema from '@/app/_schemas/message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Chat = ({ ticket }) => {
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
      <div>
        <p>{ticket.title}</p>
      </div>
      <div>
        <div>
          <p>{ticket.customer_img}</p>
          <p>{ticket.customer_number}</p>
          <p>{ticket.start_date}</p>
        </div>
        <div>
          {ticket.messages.map((message) => {
            return (
              <div
                className={`${
                  message.type === 'customer' ? 'bg-stone-400' : 'bg-slate-700'
                }`}
                key={message.id}>
                {message.content}
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSuccessMessage, handleErrorMessage)}>
        <textarea id="chatMessage" {...register('message')}></textarea>
        {errors.message && <p>{errors.message.message}</p>}
        <input type="submit" />
      </form>
    </section>
  );
};

export default Chat;

