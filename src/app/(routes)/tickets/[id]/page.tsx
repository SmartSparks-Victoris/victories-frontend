import React, { FC } from 'react';

import Chat from '@/app/_components/ticket-sections/chat';
import Form from '@/app/_components/ticket-sections/form';
import { ParamsProps } from '@/app/_types/params.types';
import Status from '@/app/_components/shared-ui/status';

const messages = [
  {
    id: 1,
    type: 'customer',
    content: 'Hello!',
    time: '2024-09-19T08:00:00Z',
  },
  {
    id: 2,
    type: 'admin',
    content: 'Hi there!',
    time: '2024-09-19T08:01:30Z',
  },
  {
    id: 3,
    type: 'customer',
    content: 'I need help with my order.',
    time: '2024-09-19T08:05:00Z',
  },
  {
    id: 4,
    type: 'admin',
    content: 'Sure, I can assist you with that.',
    time: '2024-09-19T08:07:15Z',
  },
  {
    id: 5,
    type: 'customer',
    content: 'Can you provide the status of my order?',
    time: '2024-09-19T08:10:00Z',
  },
  {
    id: 6,
    type: 'admin',
    content: 'Let me check that for you.',
    time: '2024-09-19T08:12:30Z',
  },
  {
    id: 7,
    type: 'customer',
    content: 'Thank you!',
    time: '2024-09-19T08:15:00Z',
  },
  {
    id: 8,
    type: 'admin',
    content: 'Your order is currently being processed.',
    time: '2024-09-19T08:17:45Z',
  },
  {
    id: 9,
    type: 'customer',
    content: 'When will it be shipped?',
    time: '2024-09-19T08:20:00Z',
  },
  {
    id: 10,
    type: 'admin',
    content: 'It should be shipped by the end of the day.',
    time: '2024-09-19T08:22:30Z',
  },
  {
    id: 11,
    type: 'customer',
    content: 'Great, I appreciate the help!',
    time: '2024-09-19T08:25:00Z',
  },
];

const results = [
  {
    id: 1,
    urgent: 1,
    status: 'inProgress', // "open", "inProgress", "completed"
    status_id: 2,
    title: 'Order #1234',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'John Doe',
    date: '2024-09-11',
    sentiment: 'positive',
    degree_of_sentiment: 85,
    messages: messages,
    summary: 'This is a summary for ticket #1',
    user_number: '(+20) 01594774383',
  },
  {
    id: 2,
    urgent: 0,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Feedback #5678',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Jane Smith',
    date: '2024-09-10',
    sentiment: 'neutral',
    degree_of_sentiment: 50,
    messages: messages,
    summary: 'This is a summary for ticket #2',
    user_number: '(+20) 01394774383',
  },
  {
    id: 3,
    urgent: 0,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Person Update #2345',
    category: 'persons', // "orders", "feedbacks", "persons"
    category_id: 3,
    admin: 'Alice Johnson',
    date: '2024-09-09',
    sentiment: 'negative',
    degree_of_sentiment: 20,
    messages: messages,
    summary: 'This is a summary for ticket #3',
    user_number: '(+20) 01294774383',
  },
  {
    id: 4,
    urgent: 1,
    status: 'completed', // "open", "inProgress", "completed"
    status_id: 3,
    title: 'Order #4321',
    category: 'orders', // "orders", "feedbacks", "persons"
    category_id: 1,
    admin: 'Bob Brown',
    date: '2024-09-08',
    sentiment: 'positive',
    degree_of_sentiment: 90,
    messages: messages,
    summary: 'This is a summary for ticket #4',
    user_number: '(+20) 01194774383',
  },
  {
    id: 5,
    urgent: 1,
    status: 'open', // "open", "inProgress", "completed"
    status_id: 1,
    title: 'Feedback #8765',
    category: 'feedbacks', // "orders", "feedbacks", "persons"
    category_id: 2,
    admin: 'Charlie Green',
    date: '2024-09-07',
    sentiment: 'negative',
    degree_of_sentiment: 30,
    messages: messages,
    summary: 'This is a summary for ticket #5',
    user_number: '(+20) 01094774383',
  },
];

const categories = [
  {
    id: 1,
    name: 'orders',
  },
  {
    id: 2,
    name: 'feedbacks',
  },
  {
    id: 3,
    name: 'people',
  },
];

const status = [
  {
    id: 1,
    name: 'Open',
  },
  {
    id: 2,
    name: 'In Progress',
  },
  {
    id: 3,
    name: 'Closed',
  },
];

const page: FC<ParamsProps> = ({ params }) => {
  const id = Number(params.id);
  const ticket = results.filter((t) => t.id === id)[0];
  return (
    <div>
      <div className="rounded-md flex flex-col sm:flex-row items-center border-1 border-strokeSecondary overflow-hidden caption-16 mb-6 sm:w-fit w-[100%]">
        <p className="px-[14px] py-[10px] border-r-[1px] border-b-[1px] border-solid w-[100%] text-center sm:w-fit border-b-strokeSecondary sm:border-r-strokeSecondary sm:border-b-transparent">
          {ticket.category}
        </p>
        <p className="px-[14px] py-[10px] border-r-[1px] border-b-[1px] border-solid w-[100%] text-center sm:w-fit border-b-strokeSecondary sm:border-r-strokeSecondary sm:border-b-transparent">
          {ticket.title}
        </p>
        <div className="px-[14px] flex gap-[10px] items-center">
          <Status status={ticket.status} />
          Ticket # {ticket.id}
        </div>
      </div>

      <div className="flex gap-6 flex-col xl:flex-row">
        <Form ticket={ticket} categories={categories} status={status} />
        <Chat ticket={ticket} />
      </div>
    </div>
  );
};

export default page;

