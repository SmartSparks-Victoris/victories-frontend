'use client';

import React, { useState } from 'react';

import DeleteModal from '../shared-ui/delete-modal';
import Link from 'next/link';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const openModal = (admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAdmin(null);
  };

  function handleClick(id) {
    router.push(`/admins/${id}`);
  }

  function handleButtonClick(e, admin) {
    e.stopPropagation(); // Prevents parent div click
    openModal(admin);
  }

  return (
    <section>
      <div>
        <h2>Admins</h2>
        <Link href="/new">Add another admin</Link>
      </div>
      {admins.map((admin) => (
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
            <button onClick={(e) => handleButtonClick(e, admin)}>Delete</button>
          </div>
        </div>
      ))}
      <DeleteModal
        show={isModalOpen}
        onClose={closeModal}
        admin={selectedAdmin}
      />
    </section>
  );
};

export default Admins;

