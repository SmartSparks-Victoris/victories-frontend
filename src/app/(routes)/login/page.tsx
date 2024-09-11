import LoginForm from '@/app/_components/forms/login';
import React from 'react';

const page = ({ searchParams }) => {
  const redirect = searchParams?.redirect || '/'; // Fallback to a default value if not provided

  return (
    <>
      <LoginForm redirect={redirect} />
    </>
  );
};

export default page;

