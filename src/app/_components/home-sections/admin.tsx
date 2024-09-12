'use client';

import CustomLink from '../navigation/custom-link';
import Link from 'next/link';
import React from 'react';
import Recent from './recent-results';
import Results from './admin-results';

const Admin = ({ results, recent }) => {
  return (
    <section>
      <div>
        <CustomLink href={'/tickets?status=1'}>
          <p>Un Opened Tickets</p>
        </CustomLink>
        <CustomLink href={'/tickets?status=2'}>
          <p>In Progress Tickets</p>
        </CustomLink>
        <CustomLink href={'/tickets?status=3'}>
          <p>Completed Tickets</p>
        </CustomLink>
        <CustomLink href={'/tickets?sort=desc&key=urgent'}>
          <p>Urgent Tickets</p>
        </CustomLink>
      </div>
      <Results results={results} />
      <Recent results={recent} />
    </section>
  );
};

export default Admin;

