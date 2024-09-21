import React from 'react';
import RowView from '../shared-ui/row-view';

const Customers = () => {
  const customers = [
    {
      img: '/images/default.png',
      id: 1,
      number: '01094774383',
      date: '2024-09-01T10:00:00Z',
    },
    {
      img: '/images/default.png',
      id: 2,
      number: '01094734383',
      date: '2024-09-01T11:30:00Z',
    },
    {
      img: '/images/default.png',
      id: 3,
      number: '01194774383',
      date: '2024-09-01T13:45:00Z',
    },
  ];

  return (
    <section className="pt-[24px] mt-[38px] border-t-[1px] border-t-strokeSecondary border-t-solid">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-tertiaryButton text-[20px] font-bold">Customers</h2>
      </div>
      <div className="flex flex-col w-[100%] gap-4 mt-4">
        {customers.map((customer) => (
          <RowView
            href={`/customers/${customer.id}`}
            key={customer.id}
            data={customer}
            type={'customer'}
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;

