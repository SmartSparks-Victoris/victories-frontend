import React from 'react';
import Results from '@/app/_components/customers-section/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';

const customers = [
  {
    img: '/images/default.png',
    id: 1,
    contact: '01094774383',
    time: '2024-09-01T10:00:00Z',
  },
  {
    img: '/images/default.png',
    id: 2,
    contact: '01094734383',
    time: '2024-09-01T11:30:00Z',
  },
  {
    img: '/images/default.png',
    id: 3,
    contact: '01194774383',
    time: '2024-09-01T13:45:00Z',
  },
  {
    img: '/images/default.png',
    id: 4,
    contact: '01294774383',
    time: '2024-09-01T15:00:00Z',
  },
  {
    img: '/images/default.png',
    id: 5,
    contact: '01294774383',
    time: '2024-09-01T16:30:00Z',
  },
  {
    img: '/images/default.png',
    id: 6,
    contact: '01594774383',
    time: '2024-09-01T18:00:00Z',
  },
  {
    img: '/images/default.png',
    id: 7,
    contact: '01022774383',
    time: '2024-09-01T19:15:00Z',
  },
  {
    img: '/images/default.png',
    id: 8,
    contact: '01094774380',
    time: '2024-09-01T20:45:00Z',
  },
  {
    img: '/images/default.png',
    id: 9,
    contact: '01014774383',
    time: '2024-09-01T22:00:00Z',
  },
  {
    img: '/images/default.png',
    id: 10,
    contact: '01094114383',
    time: '2024-09-01T23:30:00Z',
  },
];

const page = () => {
  return (
    <>
      <ResultsHead text="Customers" results={customers} />
      <Results results={customers} />
    </>
  );
};

export default page;

