import CustomLink from '../navigation/custom-link';
import Link from 'next/link';
import React from 'react';

const JoinSection = () => {
  return (
    <section className="py-[80px]  flex justify-center items-center">
      <div className="container flex justify-center items-center flex-col gap-4 bg-slate-300 py-[80px] text-center">
        <p>Join Us Now</p>
        <h2>We Are Always Ready To Take You To The Next Level</h2>
        <CustomLink href={'/join'}>Get Started</CustomLink>
      </div>
    </section>
  );
};

export default JoinSection;

