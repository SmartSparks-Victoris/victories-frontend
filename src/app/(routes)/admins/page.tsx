import React from 'react';
import Results from '@/app/_components/admins-sections/page';

const admins = [
  {
    img: 'https://example.com/images/customer1.jpg',
    id: 1,
    contact: 'john.doe@example.com',
    time: '2024-09-01T10:00:00Z',
  },
  {
    img: 'https://example.com/images/customer2.jpg',
    id: 2,
    contact: 'jane.smith@example.com',
    time: '2024-09-01T11:30:00Z',
  },
  {
    img: 'https://example.com/images/customer3.jpg',
    id: 3,
    contact: 'alice.jones@example.com',
    time: '2024-09-01T13:45:00Z',
  },
  {
    img: 'https://example.com/images/customer4.jpg',
    id: 4,
    contact: 'bob.brown@example.com',
    time: '2024-09-01T15:00:00Z',
  },
  {
    img: 'https://example.com/images/customer5.jpg',
    id: 5,
    contact: 'carol.white@example.com',
    time: '2024-09-01T16:30:00Z',
  },
  {
    img: 'https://example.com/images/customer6.jpg',
    id: 6,
    contact: 'david.black@example.com',
    time: '2024-09-01T18:00:00Z',
  },
  {
    img: 'https://example.com/images/customer7.jpg',
    id: 7,
    contact: 'emily.green@example.com',
    time: '2024-09-01T19:15:00Z',
  },
  {
    img: 'https://example.com/images/customer8.jpg',
    id: 8,
    contact: 'frank.miller@example.com',
    time: '2024-09-01T20:45:00Z',
  },
  {
    img: 'https://example.com/images/customer9.jpg',
    id: 9,
    contact: 'grace.lee@example.com',
    time: '2024-09-01T22:00:00Z',
  },
  {
    img: 'https://example.com/images/customer10.jpg',
    id: 10,
    contact: 'hank.taylor@example.com',
    time: '2024-09-01T23:30:00Z',
  },
];

const page = () => {
  return (
    <>
      <Results results={admins} />
    </>
  );
};

export default page;

