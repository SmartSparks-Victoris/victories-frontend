import React from 'react';

const Customer = ({ customer }) => {
  return (
    <section>
      <div key={customer.id} className="flex">
        <div>
          <img src="" alt="" />
          {customer.img}
        </div>
        <div>
          <p>{customer.name}</p>
          <p>{customer.time}</p>
        </div>
        <div>
          <p>{customer.tickets}</p>
        </div>
        <div>
          <p>{customer.online ? 'Online Now!' : 'Offline'}</p>
        </div>
        <div>
          <p>ID: {customer.id}</p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </section>
  );
};

export default Customer;

