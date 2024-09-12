import React from 'react';
import SupportChat from '@/app/_components/support-sections/support-chat';

const chat = {
  messages: [
    {
      id: 1,
      type: 'admin',
      content: 'Hello',
    },
    {
      id: 2,
      type: 'stake',
      content: 'Hi',
    },
  ],
};

const page = () => {
  return (
    <>
      <SupportChat chat={chat} />
    </>
  );
};

export default page;

