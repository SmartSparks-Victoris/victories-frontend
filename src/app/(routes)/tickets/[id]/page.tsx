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
    Id: 1,
    Urgent: 1,
    State: 'inProgress', // "open", "inProgress", "completed"
    StateId: 2,
    Title: 'Order #1234',
    Category: 'orders', // "orders", "feedbacks", "persons"
    CategoryId: 1,
    Admin: 'John Doe',
    Date: '2024-09-11',
    Sentiment: 'positive',
    SentimentDegree: 85,
    Messages: messages,
    Summary: 'This is a summary for ticket #1',
    Mobile: '(+20) 01594774383',
  },
  {
    Id: 2,
    Urgent: 0,
    State: 'completed', // "open", "inProgress", "completed"
    StateId: 3,
    Title: 'Feedback #5678',
    Category: 'feedbacks', // "orders", "feedbacks", "persons"
    CategoryId: 2,
    Admin: 'Jane Smith',
    Date: '2024-09-10',
    Sentiment: 'neutral',
    SentimentDegree: 50,
    Messages: messages,
    Summary: 'This is a summary for ticket #1',
    Mobile: '(+20) 01594774383',
  },
  {
    Id: 3,
    Urgent: 0,
    State: 'open', // "open", "inProgress", "completed"
    StateId: 1,
    Title: 'Person UpDate #2345',
    Category: 'persons', // "orders", "feedbacks", "persons"
    CategoryId: 3,
    Admin: 'Alice Johnson',
    Date: '2024-09-09',
    Sentiment: 'negative',
    SentimentDegree: 20,
    Messages: messages,
    Summary: 'This is a summary for ticket #1',
    Mobile: '(+20) 01594774383',
  },
  {
    Id: 4,
    Urgent: 1,
    State: 'completed', // "open", "inProgress", "completed"
    StateId: 3,
    Title: 'Order #4321',
    Category: 'orders', // "orders", "feedbacks", "persons"
    CategoryId: 1,
    Admin: 'Bob Brown',
    Date: '2024-09-08',
    Sentiment: 'positive',
    SentimentDegree: 90,
    Messages: messages,
    Summary: 'This is a summary for ticket #1',
    Mobile: '(+20) 01594774383',
  },
  {
    Id: 5,
    Urgent: 1,
    State: 'open', // "open", "inProgress", "completed"
    StateId: 1,
    Title: 'Feedback #8765',
    Category: 'feedbacks', // "orders", "feedbacks", "persons"
    CategoryId: 2,
    Admin: 'Charlie Green',
    Date: '2024-09-07',
    Sentiment: 'negative',
    SentimentDegree: 30,
    Messages: messages,
    Summary: 'This is a summary for ticket #1',
    Mobile: '(+20) 01594774383',
  },
];

const categories = [
  { name: 'orders', id: 1 },
  { name: 'Feedbacks', id: 2 },
  { name: 'persons', id: 3 },
];

const States = [
  { id: 1, name: 'open' },
  { id: 2, name: 'inProgress' },
  { id: 3, name: 'completed' },
];

const page: FC<ParamsProps> = ({ params }) => {
  const id = Number(params.id);
  const ticket = results.filter((t) => t.Id === id)[0];
  return (
    <div>
      <div className="rounded-md flex flex-col sm:flex-row items-center border-1 border-strokeSecondary overflow-hidden caption-16 mb-6 sm:w-fit w-[100%]">
        <p className="px-[14px] py-[10px] border-r-[1px] border-b-[1px] border-solid w-[100%] text-center sm:w-fit border-b-strokeSecondary sm:border-r-strokeSecondary sm:border-b-transparent">
          {ticket.Category}
        </p>
        <p className="px-[14px] py-[10px] border-r-[1px] border-b-[1px] border-solid w-[100%] text-center sm:w-fit border-b-strokeSecondary sm:border-r-strokeSecondary sm:border-b-transparent">
          {ticket.Title}
        </p>
        <div className="px-[14px] flex gap-[10px] items-center">
          <Status status={ticket.State} />
          Ticket # {ticket.Id}
        </div>
      </div>

      <div className="flex gap-6 flex-col xl:flex-row">
        <Form ticket={ticket} categories={categories} state={States} />
        <Chat ticket={ticket} />
      </div>
    </div>
  );
};

export default page;

