'use client';

import React, { useState } from 'react';

import DeleteModal from '../shared-ui/delete-modal';
import RowView from '../shared-ui/row-view';

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

  function handleButtonClick(e?: React.MouseEvent<HTMLButtonElement>, admin) {
    if (e) {
      e.stopPropagation(); // Prevents parent div click
    }
    openModal(admin);
  }

  return (
    <>
      <RowView
        onClick={(e) => handleButtonClick(e, admin)}
        data={admin}
        type="admin"
        href={`/admins/${admin.id}`}
      />
      <DeleteModal
        show={isModalOpen}
        onClose={closeModal}
        admin={selectedAdmin}
      />
    </>
  );
};

export default Admin;

