import NewForm from '@/app/_components/new-sections/form';
import { cookies } from 'next/headers';
import React from 'react';

const page = () => {
  const token = cookies().get('token');

  return (
    <>
      <NewForm token={token} />
    </>
  );
};

export default page;

