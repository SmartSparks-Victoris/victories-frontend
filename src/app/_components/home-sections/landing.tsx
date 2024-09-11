import Link from 'next/link';
import React from 'react';

const Landing = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex justify-center items-center">
      <div className="container mx-auto flex sm:flex-row flex-col justify-between items-center gap-4">
        <div className="text">
          <h2>WE CONNECT YOU WITH YOUR CUSTOMERS</h2>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum
          </p>
          <div>
            <Link href="/join">Join</Link>
            <Link href="/">How it works</Link>
          </div>
        </div>
        <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
      </div>
    </section>
  );
};

export default Landing;

