/* eslint-disable @next/next/no-img-element */
import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const Introduction = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-[64px] bg-backgroundOpacity">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-[80px] text-textWhite">
        <div className="w-[100%] flex justify-center">
          <Transition from={'left'}>
            <img src="/images/about-section.png" alt="" />
          </Transition>
        </div>

        <div className="w-[100%]">
          <Transition from={'right'}>
            <h2 className="text-[40px] font-semibold font-roboto">
              Who We Are
            </h2>
          </Transition>
          <Transition from={'right'} delay={0.1}>
            <p className="mt-[32px] mb-[40px] text-[24px]">
              We are a tech company transforming customer engagement by
              simplifying support through a centralized platform that integrates
              WhatsApp and Messenger, enhancing communication and service.{' '}
            </p>
          </Transition>
          <Transition from={'right'} delay={0.2}>
            <div>
              <CustomLink href="/contact" type="button">
                Contact Us
              </CustomLink>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

