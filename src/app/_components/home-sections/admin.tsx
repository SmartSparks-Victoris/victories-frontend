'use client';

import Link from 'next/link';
import React from 'react';
import Recent from './recent-results';
import Results from './admin-results';

const Admin = ({ results, recent }) => {
  return (
    <section>
      <div>
        <Link href={'/tickets?status=1'}>
          <p>Un Opened Tickets</p>
        </Link>
        <Link href={'/tickets?status=2'}>
          <p>In Progress Tickets</p>
        </Link>
        <Link href={'/tickets?status=3'}>
          <p>Completed Tickets</p>
        </Link>
        <Link href={'/tickets?sort=desc&key=urgent'}>
          <p>Urgent Tickets</p>
        </Link>
      </div>
      <Results results={results} />
      <Recent results={recent} />
    </section>
  );
};

export default Admin;

