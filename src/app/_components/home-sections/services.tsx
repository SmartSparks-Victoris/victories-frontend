/* eslint-disable @next/next/no-img-element */
import CustomLink from '../navigation/custom-link';
import React from 'react';
import Transition from '../shared-ui/transition';

const ServicesSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-[64px]">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-[80px] text-textWhite">
        <div className="w-[100%]">
          <Transition from={'left'}>
            <h2 className="text-[40px] font-semibold font-roboto">
              Our Services
            </h2>
          </Transition>
          <Transition from={'left'} delay={0.1}>
            <p className="mt-[32px] mb-[40px] text-[24px]">
              We provide a powerful, all-in-one customer service platform
              designed to simplify and streamline the way businesses manage
              customer interactions across multiple channels. Our services are
              tailored to help you deliver efficient, responsive, and
              personalized support.
            </p>
          </Transition>
          <Transition from={'left'} delay={0.15}>
            <div>
              <CustomLink
                href="/services"
                type="button"
                variant="solid"
                variantColor="none">
                Read More
              </CustomLink>
            </div>
          </Transition>
        </div>
        <div className="w-[100%] flex justify-center">
          <Transition from={'right'}>
            <img src="/images/services-section.png" alt="" />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

