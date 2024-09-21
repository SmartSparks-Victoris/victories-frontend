import React from 'react';
import TicketsMain from '@/app/_components/tickets-sections/main';
import { wait } from '@/app/_utils/test';

const page = async () => {
  const response = await fetch('http://localhost:3001/categories');
  const result = await response.json();
  const categories = result.categories;

  const response2 = await fetch('http://localhost:3001/status');
  const result2 = await response2.json();
  const status = result2.status;

  await wait(5);

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
    },
  ];

  return (
    <>
      <TicketsMain categories={categories} status={status} results={results} />
    </>
  );
};

export default page;

