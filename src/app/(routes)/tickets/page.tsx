import React from 'react';
import TicketsMain from '@/app/_components/tickets-sections/main';
import { wait } from '@/app/_utils/test';
import { API_URL } from '@/app/_data/base';
import { cookies } from 'next/headers';

const page = async () => {
  // const response = await fetch('http://localhost:3001/categories');
  // const result = await response.json();
  // const categories = result.categories;
  const token = cookies().get('token');
  let categories = [
    { name: 'orders', id: 1 },
    { name: 'Feedbacks', id: 2 },
    { name: 'persons', id: 3 },
  ];
  let states;

  const States = [
    { id: 1, name: 'open' },
    { id: 2, name: 'inProgress' },
    { id: 3, name: 'completed' },
  ];

  // try {
  //   const res = await fetch(`${API_URL}/api/category/`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   if (!res.ok) {
  //     throw new Error(`HTTP error! Status: ${res.status}`);
  //   }

  //   // Check if content-type is JSON
  //   const contentType = res.headers.get('content-type');
  //   if (contentType && contentType.includes('application/json')) {
  //     const result = await res.json();
  //     categories = result;
  //     console.log(result);
  //   } else {
  //     console.log('Response is not in JSON format or empty');
  //   }
  // } catch (error) {
  //   console.error('Error:', error);
  // }

  // try {
  //   const res = await fetch(`${API_URL}/api/ticket/getallstates`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   if (!res.ok) {
  //     throw new Error(`HTTP error! Status: ${res.status}`);
  //   }

  //   // Check if content-type is JSON
  //   const contentType = res.headers.get('content-type');
  //   if (contentType && contentType.includes('application/json')) {
  //     const result = await res.json();
  //     states = result;
  //     console.log(result);
  //   } else {
  //     console.log('Response is not in JSON format or empty');
  //   }
  // } catch (error) {
  //   console.error('Error:', error);
  // }

  // const response2 = await fetch('http://localhost:3001/status');
  // const result2 = await response2.json();
  // const status = result2.status;

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
    },
  ];

  return (
    <>
      {/* <p>{JSON.stringify(categories)}</p>
      <p>{JSON.stringify(states)}</p> */}
      <TicketsMain categories={categories} state={States} results={results} />
    </>
  );
};

export default page;

