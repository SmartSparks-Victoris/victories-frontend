import Link from 'next/link';
import React from 'react';

const JoinSection = () => {
  return (
    <section className="py-[80px] bg-green-800 flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col gap-4 bg-sky-300 py-[80px] text-center">
        <p>Join Us Now</p>
        <h2>We Are Always Ready To Take You To The Next Level</h2>
        <Link href="/join">Get Started</Link>
      </div>
    </section>
  );
};

export default JoinSection;
