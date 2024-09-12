'use client';

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const admins = [
  {
    img: 'http',
    id: 1,
    name: 'John Doe',
    time: '14/8/2024',
    tickets: 250,
    online: true,
  },
  {
    img: 'http',
    id: 2,
    name: 'Jane Doe',
    time: '13/8/2024',
    tickets: 150,
    online: true,
  },
  {
    img: 'http',
    id: 3,
    name: 'Doe Joe',
    time: '4/8/2024',
    tickets: 270,
    online: false,
  },
];

const Admins = () => {
  const router = useRouter();

  function handleClick(id) {
    router.push(`/admins/${id}`);
  }

  return (
    <section>
      <div>
        <h2>Admins</h2>
        <Link href="/new">Add another admin</Link>
      </div>
      {admins.map((admin) => {
        return (
          <div
            key={admin.id}
            className="flex cursor-pointer"
            onClick={() => handleClick(admin.id)}>
            <div>
              <img src="" alt="" />
              {admin.img}
            </div>
            <div>
              <p>{admin.name}</p>
              <p>{admin.time}</p>
            </div>
            <div>
              <p>{admin.tickets}</p>
            </div>
            <div>
              <p>{admin.online ? 'Online Now!' : 'Offline'}</p>
            </div>
            <div>
              <p>ID: {admin.id}</p>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Admins;

