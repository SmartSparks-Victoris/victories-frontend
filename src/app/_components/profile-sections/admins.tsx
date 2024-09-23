'use client';

import React, { useState } from 'react';

import CustomLink from '../navigation/custom-link';
import DeleteModal from '../shared-ui/delete-modal';
import PlusSVG from '../svg/plus';
import RowView from '../shared-ui/row-view';

const Admins = ({ admins, token }) => {
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

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>, admin) {
    e.stopPropagation(); // Prevents parent div click
    openModal(admin);
  }

  return (
    <section className="pt-[24px] mt-[38px] border-t-[1px] border-t-strokeSecondary border-t-solid">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-tertiaryButton text-[20px] font-bold">Admins</h2>
        <CustomLink
          href="/new"
          className="flex gap-[4px] items-center justify-center bg-[url('/images/service-background.png')] text-textNavBarPrimary py-[10px] px-2 rounded-md">
          <p>Add another admin</p>
          <PlusSVG />
        </CustomLink>
      </div>
      <div className="flex flex-col w-[100%] gap-4 mt-4">
        {admins.map((admin) => (
          <RowView
            href={`/admins/${admin.id}`}
            key={admin.id}
            data={admin}
            type={'admin'}
            onClick={(e) => {
              if (e) {
                e.stopPropagation();
                handleButtonClick(e, admin);
              }
            }}
          />
        ))}
      </div>
      <DeleteModal
        show={isModalOpen}
        onClose={closeModal}
        admin={selectedAdmin}
        token={token}
      />
    </section>
  );
};

export default Admins;

