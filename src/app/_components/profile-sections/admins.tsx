'use client';

import React, { useState } from 'react';

import ActionButton from '../shared-ui/action';
import CustomLink from '../navigation/custom-link';
import DeleteModal from '../shared-ui/delete-modal';
import RowView from '../shared-ui/row-view';
import { useRouter } from 'nextjs-toploader/app';

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
    <section className="pt-[24px] mt-[38px] border-t-[1px] border-t-[#999999] border-t-solid">
      <div className="flex justify-between items-center flex-wrap gap-[32px]">
        <h2 className="text-[#452033] text-[20px] font-bold">Admins</h2>
        <CustomLink
          href="/new"
          className="flex gap-[4px] items-center justify-center bg-[url('/images/service-background.png')] text-textWhite py-[10px] px-[16px] rounded-[16px]">
          <p>Add another admin</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0312 9C16.0312 9.22378 15.9424 9.43839 15.7841 9.59662C15.6259 9.75485 15.4113 9.84375 15.1875 9.84375H9.84375V15.1875C9.84375 15.4113 9.75485 15.6259 9.59662 15.7841C9.43839 15.9424 9.22378 16.0312 9 16.0312C8.77622 16.0312 8.56161 15.9424 8.40338 15.7841C8.24514 15.6259 8.15625 15.4113 8.15625 15.1875V9.84375H2.8125C2.58872 9.84375 2.37411 9.75485 2.21588 9.59662C2.05764 9.43839 1.96875 9.22378 1.96875 9C1.96875 8.77622 2.05764 8.56161 2.21588 8.40338C2.37411 8.24514 2.58872 8.15625 2.8125 8.15625H8.15625V2.8125C8.15625 2.58872 8.24514 2.37411 8.40338 2.21588C8.56161 2.05764 8.77622 1.96875 9 1.96875C9.22378 1.96875 9.43839 2.05764 9.59662 2.21588C9.75485 2.37411 9.84375 2.58872 9.84375 2.8125V8.15625H15.1875C15.4113 8.15625 15.6259 8.24514 15.7841 8.40338C15.9424 8.56161 16.0312 8.77622 16.0312 9Z"
              fill="#FFF7FA"
            />
          </svg>
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
              e.stopPropagation();
              handleButtonClick(e, admin);
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

