import PersonalData from '@/app/_components/profile-sections/personal-data';
import React from 'react';
import { cookies } from 'next/headers';
import { parseJwt } from '@/app/_utils/auth';

const page = () => {
  const user = parseJwt(cookies().get('token')?.value);
  return (
    <>
      <PersonalData user={user} />
    </>
  );
};

export default page;

