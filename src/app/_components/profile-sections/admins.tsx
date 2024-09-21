'use client';

import React, { useState } from 'react';

import CustomLink from '../navigation/custom-link';
import DeleteModal from '../shared-ui/delete-modal';
import PlusSVG from '../svg/plus';
import RowView from '../shared-ui/row-view';

const admins = [
  {
    img: '/images/default.png',
    id: 1,
    name: 'John Doe',
    date: '2024-09-19T08:05:00Z',
    tickets: 250,
  },
  {
    img: '/images/default.png',
    id: 2,
    name: 'Jane Doe',
    date: '2024-09-19T08:05:00Z',
    tickets: 150,
  },
  {
    img: '/images/default.png',
    id: 3,
    name: 'Doe Joe',
    date: '2024-09-19T08:05:00Z',
    tickets: 270,
  },
];

const Admins = () => {
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
    <section className="pt-[24px] mt-[38px] border-t-[1px] border-t-[#999999] border-t-solid">
      <div className="flex justify-between items-center flex-wrap gap-[32px]">
        <h2 className="text-[#452033] text-[20px] font-bold">Admins</h2>
        <CustomLink
          href="/new"
          className="flex gap-[4px] items-center justify-center bg-[url('/images/service-background.png')] text-textWhite py-[10px] px-[16px] rounded-[16px]">
          <p>Add another admin</p>
          <PlusSVG />
        </CustomLink>
      </div>
      <div className="flex flex-col w-[100%] gap-[32px] mt-[32px]">
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
      />
    </section>
  );
};

export default Admins;

