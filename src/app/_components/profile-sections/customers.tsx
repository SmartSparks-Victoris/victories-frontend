import React from 'react';
import RowView from '../shared-ui/row-view';

const Customers = () => {
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

  return (
    <section className="pt-[24px] mt-[38px] border-t-[1px] border-t-strokeSecondary border-t-solid">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-tertiaryButton text-[20px] font-bold">Customers</h2>
      </div>
      <div className="flex flex-col w-[100%] gap-4 mt-4">
        {customers.slice(0, 3).map((customer) => (
          <RowView
            href={`/customers/${customer.Id}`}
            key={customer.Id}
            data={customer}
            type={'customer'}
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;

