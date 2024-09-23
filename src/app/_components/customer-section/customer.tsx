import React from 'react';
import RowView from '../shared-ui/row-view';

const Customer = ({ customer }) => {
  return (
    <>
      <RowView
        data={customer}
        type="customer"
        href={`/customers/${customer.Id}`}
      />
    </>
  );
};

export default Customer;

