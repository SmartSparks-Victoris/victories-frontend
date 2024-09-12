import Chat from '@/app/_components/ticket-sections/chat';
import Form from '@/app/_components/ticket-sections/form';
import React from 'react';

const messages = [
  {
    id: 1,
    type: 'customer',
    content: 'Hello',
  },
  {
    id: 2,
    type: 'admin',
    content: 'Hi',
  },
];

const ticket = {
  category: 'orders',
  category_id: 1,
  status: 'Close',
  status_id: 2,
  summary: 'mySummaryForThis Ticket',
  name: 'MyOrder',
  id: 25,
  customer_number: '01098536400',
  customer_img: 'http',
  start_date: '2024-4-5',
  title: 'My Ticket',
  messages: messages,
};

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

const page = () => {
  return (
    <div>
      <p>
        {ticket.category} - {ticket.name} - Ticket #{ticket.id}
      </p>
      <div className="flex">
        <Form ticket={ticket} categories={categories} status={status} />
        <Chat ticket={ticket} />
      </div>
    </div>
  );
};

export default page;

