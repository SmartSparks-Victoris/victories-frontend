import React, { FC } from 'react';

import LoginForm from '@/app/_components/forms/login';
import { SearchParamsProps } from '@/app/_types/search-params.types';

const page: FC<SearchParamsProps> = ({ searchParams }) => {
  const redirect = String(searchParams?.redirect) || '/'; // Fallback to a default value if not provided

  return (
    <>
      <LoginForm redirect={redirect} />
    </>
  );
};

export default page;

