import React from 'react';
import Results from '@/app/_components/customers-section/results';
import ResultsHead from '@/app/_components/shared-ui/results-head';

const customers = [
  {
    Id: 1,
    Number: '01894774383',
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

const page = async () => {
  return (
    <>
      <ResultsHead text="Customers" results={customers} />
      <Results results={customers} />
    </>
  );
};

export default page;

