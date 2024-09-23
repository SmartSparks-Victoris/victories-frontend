import React, { FC } from 'react';

import Customer from '@/app/_components/customer-section/customer';
import { ParamsProps } from '@/app/_types/params.types';
import Results from '@/app/_components/customer-section/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';
import { API_URL } from '@/app/_data/base';
import toast from 'react-hot-toast';

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
    img: '/images/default.png',
    number: '01098536400',
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
    img: '/images/default.png',
    number: '01098536401',
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
    img: '/images/default.png',
    number: '01098536402',
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
    img: '/images/default.png',
    number: '01098536403',
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
    img: '/images/default.png',
    number: '01098536404',
  },
];

const page: FC<ParamsProps> = async ({ params }) => {
  const id = Number(params.id);

  const customers = [
    {
      Id: 1,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 2,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 3,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 4,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 5,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 6,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 7,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 8,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 9,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
    },
    {
      Id: 10,
      Number: '01094774383',
      Date: '2024-09-01T10:00:00Z',
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
      CustomerId: 3,
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
      CustomerId: 1,
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
      CustomerId: 1,
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
      CustomerId: 2,
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
      CustomerId: 1,
    },
  ];

  const customer = customers.filter((c) => c.Id === id)[0];
  const tickets = results.filter((t) => t.CustomerId === customer.Id);

  return (
    <>
      <Customer customer={customer} />
      <div className="mt-3">
        <ResultsHead text={'History of tickets'} />
      </div>
      <Results results={tickets} />
    </>
  );
};

export default page;

