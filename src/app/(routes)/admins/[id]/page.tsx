import React, { FC } from 'react';

import Admin from '@/app/_components/admin-sections/admin';
import { ParamsProps } from '@/app/_types/params.types';
import Results from '@/app/_components/admin-sections/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';

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
    urgent: 4,
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
    urgent: 10,
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

const admins = [
  {
    img: '/images/default.png',
    id: 1,
    name: 'John Doe',
    date: '2024-09-19T08:05:00Z',
    tickets: 250,
  },
  {
    img: '/images/default.png',
    id: 2,
    name: 'Jane Doe',
    date: '2024-09-19T08:05:00Z',
    tickets: 150,
  },
  {
    img: '/images/default.png',
    id: 3,
    name: 'Doe Joe',
    date: '2024-09-19T08:05:00Z',
    tickets: 270,
  },
];

const page: FC<ParamsProps> = ({ params }) => {
  const id = Number(params.id);
  const admin = admins.filter((a) => a.id === id)[0];

  return (
    <>
      <Admin admin={admin} />
      <div className="mt-3">
        <ResultsHead text={'History'} />
      </div>
      <Results results={results} />
    </>
  );
};

export default page;

