import React from 'react';
import StatisticsItem from './statistics-item';
import Transition from '../shared-ui/transition';

const Statistics = () => {
  return (
    <section className="py-[80px]  flex justify-center items-center text-textWhite">
      <div className="container mx-auto flex items-center gap-[64px] justify-center flex-col xl:flex-row xl:items-center xl:justify-between">
        <Transition from="left">
          <div className="flex flex-col gap-[24px] flex-grow">
            <h3 className="font-roboto text-[48px] font-bold">
              What we do different
            </h3>
            <p className="max-w-[537px] text-[24px] font-medium">
              We combine user-centric design with innovative technology to
              create seamless and enjoyable digital experiences.
            </p>
          </div>
        </Transition>
        <Transition from="right">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(272px,_1fr))] gap-[32px] max-w-[600px] w-[100%]">
            <StatisticsItem number="2,555+" text="lorem ipsum" />
            <StatisticsItem number="12" text="lorem ipsum" />
            <StatisticsItem number="12" text="lorem ipsum" />
            <StatisticsItem number="12" text="lorem ipsum" />
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Statistics;

