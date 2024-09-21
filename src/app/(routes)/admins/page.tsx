import React from 'react';
import Results from '@/app/_components/admins-sections/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';

const admins = [
  {
    img: '/images/default.png',
    name: 'Amr Shoukry',
    tickets: 250,
    id: 1,
    time: '2024-09-01T10:00:00Z',
  },
  {
    img: '/images/default.png',
    name: 'Mohamed Shoukry',
    tickets: 150,
    id: 2,
    time: '2024-09-01T11:30:00Z',
  },
  {
    img: '/images/default.png',
    name: 'Amr Omar',
    tickets: 510,
    id: 3,
    time: '2024-09-01T13:45:00Z',
  },
  {
    img: '/images/default.png',
    name: 'Amr Samir',
    tickets: 450,
    id: 4,
    time: '2024-09-01T15:00:00Z',
  },
  {
    img: '/images/default.png',
    name: 'Wael Wael',
    tickets: 650,
    id: 5,
    time: '2024-09-01T16:30:00Z',
  },
];

const page = () => {
  return (
    <>
      <ResultsHead text="Admins" results={admins} />
      <Results results={admins} />
    </>
  );
};

export default page;

