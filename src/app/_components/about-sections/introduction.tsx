import Link from 'next/link';
import React from 'react';

const Introduction = () => {
  return (
    <section className="py-[80px] bg-green-800 flex justify-center items-center">
      <div className="container mx-auto flex items-center gap-8 sm:flex-row flex-col">
        <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
        <div className="flex flex-col gap-4 items-center text-center sm:items-start sm:text-start">
          <h3>About</h3>
          <h2>Lorem Ipsum lorem ipsum</h2>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </p>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

