import React from 'react';
import Results from '@/app/_components/admins-sections/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';
import { API_URL } from '@/app/_data/base';
import { cookies } from 'next/headers';

// const admins = [
//   {
//     img: '/images/default.png',
//     name: 'Amr Shoukry',
//     tickets: 250,
//     id: 1,
//     date: '2024-09-01',
//   },
//   {
//     img: '/images/default.png',
//     name: 'Mohamed Shoukry',
//     tickets: 150,
//     id: 2,
//     date: '2024-09-05',
//   },
//   {
//     img: '/images/default.png',
//     name: 'Amr Omar',
//     tickets: 510,
//     id: 3,
//     date: '2024-09-04',
//   },
//   {
//     img: '/images/default.png',
//     name: 'Amr Samir',
//     tickets: 450,
//     id: 4,
//     date: '2024-09-01',
//   },
//   {
//     img: '/images/default.png',
//     name: 'Wael Wael',
//     tickets: 650,
//     id: 5,
//     date: '2024-09-01',
//   },
// ];

const page = async () => {
  let admins;
  const token = cookies().get('token');
  try {
    const res = await fetch(`${API_URL}/api/admin/admins`, {
      next: { revalidate: 0 },
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
      admins = result;
      admins = admins.filter((admin) => admin.role !== 'owner');
      console.log(result);
    } else {
      console.log('Response is not in JSON format or empty');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return (
    <>
      <ResultsHead text="Admins" results={admins} />
      <Results results={admins} />
    </>
  );
};

export default page;

