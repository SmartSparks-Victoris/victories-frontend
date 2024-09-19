import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const JoinSection = () => {
  return (
    <section className="py-[80px] flex justify-center items-center text-textWhite">
      <Transition from="bottom">
        <div className="container flex justify-center items-center flex-col gap-4 bg-backgroundOpacity rounded-[24px] py-[80px] px-[20px] md:px-[80px] text-center">
          <p className="font-semibold text-[26px]">Join Us Now</p>
          <h2 className="mt-[32px] mb-[40px] text-[40px] font-semibold">
            We Are Always Ready To Take You To The Next Level
          </h2>
          <CustomLink href={'/join'} type="button">
            Get Started
          </CustomLink>
        </div>
      </Transition>
    </section>
  );
};

export default JoinSection;

