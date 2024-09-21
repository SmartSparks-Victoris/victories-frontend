'use client';

import React from 'react';
import Recent from './recent-results';
import Results from './admin-results';
import ResultsHead from '../shared-ui/results-head';
import TicketItem from './ticket-item';

const Admin = ({ results, recent }) => {
  return (
    <section className="flex gap-8 flex-col 2xl:flex-row">
      <div className="order-2 2xl:order-1 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-4">
          <TicketItem
            href={'/tickets?status=1'}
            type="open"
            text="Unopened Tickets"
            percentage={25}
            number={25}
          />
          <TicketItem
            href={'/tickets?status=2'}
            type="inProgress"
            text="In Progress Tickets"
            percentage={35}
            number={35}
          />
          <TicketItem
            href={'/tickets?status=3'}
            type="completed"
            text="Completed Tickets"
            percentage={40}
            number={40}
          />
          <TicketItem
            href={'/tickets?key=urgent&order=desc'}
            type="urgent"
            text="Urgent Tickets"
            percentage={20}
            number={20}
          />
        </div>
        <ResultsHead text="Tickets" />
        <Results results={results} />
      </div>
      <Recent results={recent} />
    </section>
  );
};

export default Admin;

