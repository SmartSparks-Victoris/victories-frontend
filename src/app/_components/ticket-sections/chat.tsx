'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import SendSVG from '../svg/send';
import messageSchema from '@/app/_schemas/message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { convertToChatTime } from '@/app/_utils/helpers';

const Chat = ({ ticket, sentiment = true }) => {
  const [sentimentValue, setSentimentValue] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  function handleSuccessMessage() {}

  function handleErrorMessage() {}

  function handleSentimentCheck() {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    setSentimentValue(randomValue);
  }

  return (
    <section className="w-[100%] rounded-lg overflow-hidden border-1 border-surfaceTertiary shadow-[0px_4px_8px_2px_#999999] xl:order-2 order-1">
      <div className="flex justify-between py-[20px] px-4 bg-surfaceTertiary text-textNavBarPrimary text-[20px] font-medium">
        <p>{ticket.Mobile}</p>
        {sentiment && (
          <button
            onClick={handleSentimentCheck}
            className={`${
              sentimentValue
                ? sentimentValue > 7
                  ? 'bg-green-300'
                  : sentimentValue > 3
                  ? 'bg-yellow-400'
                  : 'bg-red-500'
                : 'bg-slate-500'
            }`}>
            {!sentimentValue && <p>Check for sentiment</p>}
            {sentimentValue && <p>{sentimentValue} Recheck for sentiment</p>}
          </button>
        )}
      </div>
      <div>
        <div className="px-4 py-[24px] flex flex-col gap-5 max-h-[600px] overflow-y-auto overflow-x-hidden">
          {ticket.Messages.map((message) => {
            return (
              <div key={message.id} className="flex flex-col gap-1">
                <div
                  className={`flex w-fit gap-2 items-end ${
                    message.type === 'customer' ? 'mr-auto' : 'ml-auto'
                  }`}>
                  <div
                    className={`w-[48px] h-[48px] bg-surfaceTertiary rounded-full overflow-hidden flex-shrink-0 ${
                      message.type === 'customer'
                        ? 'mr-auto'
                        : 'ml-auto order-2'
                    }`}></div>
                  <div
                    className={`${
                      message.type === 'customer'
                        ? 'mr-auto rounded-bl-none'
                        : 'ml-auto rounded-br-none'
                    } w-fit p-[24px] rounded-md border-1 border-surfaceTertiary text-[14px]`}>
                    {message.content}
                  </div>
                </div>
                <p
                  className={`${
                    message.type === 'customer' ? 'mr-auto' : 'ml-auto'
                  } w-fit text-textBodyPrimary text-[12px]`}>
                  {convertToChatTime(message.time)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSuccessMessage, handleErrorMessage)}
        className="py-[20px] px-4 bg-surfaceTertiary flex gap-1 md:gap-10">
        <textarea
          id="chatMessage"
          {...register('message')}
          placeholder="Enter Your Message"
          className="resize-none w-[100%] h-[55px] overflow-y-auto rounded-sm p-[14px]"></textarea>
        {errors.message && (
          <p className="fieldError">{errors.message.message}</p>
        )}
        <button type="submit">
          <SendSVG />
        </button>
      </form>
    </section>
  );
};

export default Chat;

