import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const Landing = () => {
  return (
    <section className="min-h-[calc(50vh-var(--guestNav))] py-[146px] flex justify-center items-center text-textWhite">
      <Transition from={'up'}>
        <div className="container mx-auto flex flex-col gap-16 justify-center items-center">
          <h1 className="font-roboto font-semibold text-[80px] text-center">
            About Us
          </h1>
          <p className="text-[16px]">
            <CustomLink href="/" className="font-bold underline">
              Home
            </CustomLink>
            <span> / About Us</span>
          </p>
        </div>
      </Transition>
    </section>
  );
};

export default Landing;

