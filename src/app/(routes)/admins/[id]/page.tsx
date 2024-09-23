import React, { FC } from 'react';

import Admin from '@/app/_components/admin-sections/admin';
import { ParamsProps } from '@/app/_types/params.types';
import Results from '@/app/_components/admin-sections/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';
import { parseJwt } from '@/app/_utils/auth';
import { cookies } from 'next/headers';
import { API_URL } from '@/app/_data/base';

const results2 = [
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
    AdminId: 2,
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
    AdminId: 1,
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
    AdminId: 2,
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
    AdminId: 2,
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
    AdminId: 1,
  },
];

const page: FC<ParamsProps> = async ({ params }) => {
  const id = Number(params.id);
  const token = cookies().get('token');
  const results = results2.filter((r) => r.AdminId === id);
  let admin;
  try {
    const res = await fetch(`${API_URL}/api/admin/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Check if content-type is JSON
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const result = await res.json();
      admin = result;
      console.log(result);
    } else {
      console.log('Response is not in JSON format or empty');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  console.log(admin);

  return (
    <>
      <Admin admin={admin} token={token} />
      <div className="mt-3">
        <ResultsHead text={'History'} />
      </div>
      <Results results={results} />
    </>
  );
};

export default page;

