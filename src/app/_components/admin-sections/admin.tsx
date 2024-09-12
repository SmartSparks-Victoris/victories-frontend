'use client';

import React, { useState } from 'react';

import DeleteModal from '../shared-ui/delete-modal';

const Admin = ({ admin }) => {
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

  function handleButtonClick(e, admin) {
    e.stopPropagation(); // Prevents parent div click
    openModal(admin);
  }

  return (
    <section>
      <div key={admin.id} className="flex">
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
      <DeleteModal
        show={isModalOpen}
        onClose={closeModal}
        admin={selectedAdmin}
      />
    </section>
  );
};

export default Admin;

