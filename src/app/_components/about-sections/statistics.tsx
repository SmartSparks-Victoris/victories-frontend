import React from 'react';

const Statistics = () => {
  return (
    <section className="py-[80px]  flex justify-center items-center">
      <div className="container mx-auto flex items-center gap-8 justify-center flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-4 flex-grow">
          <h3>What we do different</h3>
          <p className="max-w-[537px]">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem lorem ipsum lorem ipsum.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(272px,_1fr))] gap-[18px]  max-w-[600px] w-[100%]">
          <div>
            <h2>2,555+</h2>
            <p>lorem ipsum</p>
          </div>
          <div>
            <h2>12</h2>
            <p>lorem ipsum</p>
          </div>
          <div>
            <h2>12</h2>
            <p>lorem ipsum</p>
          </div>
          <div>
            <h2>12</h2>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

