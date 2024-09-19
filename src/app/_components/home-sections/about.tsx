/* eslint-disable @next/next/no-img-element */
import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const AboutSection = () => {
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
            <h2 className="text-[40px] font-semibold font-roboto">About Us</h2>
          </Transition>
          <Transition from={'right'} delay={0.1}>
            <p className="mt-[32px] mb-[40px] text-[24px]">
              We are a technology company focused on transforming how businesses
              engage with their customers. Our mission is to simplify customer
              support through a centralized platform that integrates messaging
              services like WhatsApp and Messenger, providing seamless tools to
              enhance communication and deliver exceptional service{' '}
            </p>
          </Transition>
          <Transition from={'right'} delay={0.2}>
            <div>
              <CustomLink href="/about" type="button">
                Read More
              </CustomLink>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

