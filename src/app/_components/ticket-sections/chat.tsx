'use client';

import * as z from 'zod';

import React, { useState } from 'react';

import messageSchema from '@/app/_schemas/message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
    <section className="w-[100%] rounded-[24px] overflow-hidden border-[1px] border-solid border-[#7E4556] shadow-[0px_4px_8px_2px_#999999] xl:order-2 order-1">
      <div className="flex justify-between py-[20px] px-[32px] bg-[#745865] text-textWhite text-[20px] font-medium">
        <p>{ticket.user_number}</p>
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
        <div className="px-[32px] py-[24px] flex flex-col gap-[40px] max-h-[600px] overflow-y-auto overflow-x-hidden">
          {ticket.messages.map((message) => {
            return (
              <div key={message.id} className="flex flex-col gap-[8px]">
                <div
                  className={`flex w-fit gap-2 items-end ${
                    message.type === 'customer' ? 'mr-auto' : 'ml-auto'
                  }`}>
                  <div
                    className={`w-[48px] h-[48px] bg-[#7E4556] rounded-full overflow-hidden flex-shrink-0 ${
                      message.type === 'customer'
                        ? 'mr-auto'
                        : 'ml-auto order-2'
                    }`}></div>
                  <div
                    className={`${
                      message.type === 'customer'
                        ? 'mr-auto rounded-bl-none'
                        : 'ml-auto rounded-br-none'
                    } w-fit p-[24px] rounded-[16px] border-[1px] border-solid border-[#7E4556] text-[14px]`}>
                    {message.content}
                  </div>
                </div>
                <p
                  className={`${
                    message.type === 'customer' ? 'mr-auto' : 'ml-auto'
                  } w-fit text-[#666666] text-[12px]`}>
                  {message.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleSuccessMessage, handleErrorMessage)}
        className="py-[20px] px-[32px] bg-[#745865] flex gap-[8px] md:gap-[80px]">
        <textarea
          id="chatMessage"
          {...register('message')}
          placeholder="Enter Your Message"
          className="resize-none w-[100%] h-[55px] overflow-y-auto rounded-[8px] p-[14px]"></textarea>
        {errors.message && (
          <p className="fieldError">{errors.message.message}</p>
        )}
        <button type="submit">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.9244 10.8577L6.16875 1.8671C5.83656 1.68101 5.45558 1.60048 5.0765 1.6362C4.69741 1.67193 4.33819 1.82222 4.04661 2.06709C3.75502 2.31195 3.5449 2.63979 3.44419 3.007C3.34348 3.3742 3.35695 3.76336 3.48282 4.12272L6.31219 12.5002L3.48282 20.8777C3.38334 21.1603 3.35305 21.4627 3.39447 21.7594C3.43589 22.0562 3.54782 22.3387 3.72088 22.5832C3.89394 22.8278 4.12309 23.0274 4.38914 23.1652C4.65519 23.303 4.95039 23.375 5.25 23.3752C5.5722 23.3745 5.88885 23.2913 6.16969 23.1333L6.17813 23.1277L21.9281 14.1212C22.2169 13.9577 22.4571 13.7205 22.6243 13.4338C22.7914 13.1472 22.8795 12.8213 22.8795 12.4894C22.8795 12.1576 22.7914 11.8317 22.6243 11.545C22.4571 11.2584 22.2169 11.0212 21.9281 10.8577H21.9244ZM5.92407 20.6808L8.30719 13.6252H13.5C13.7984 13.6252 14.0845 13.5067 14.2955 13.2957C14.5065 13.0847 14.625 12.7986 14.625 12.5002C14.625 12.2019 14.5065 11.9157 14.2955 11.7047C14.0845 11.4937 13.7984 11.3752 13.5 11.3752H8.30719L5.92313 4.31772L20.2444 12.4899L5.92407 20.6808Z"
              fill="#FFF7FA"
            />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default Chat;

