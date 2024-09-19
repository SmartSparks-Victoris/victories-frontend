/* eslint-disable @next/next/no-img-element */
'use client';

import CustomLink from '../navigation/custom-link';
import Transition from '../shared-ui/transition';

const Landing = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-[64px]">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-[80px] text-textWhite">
        <div className="w-[100%]">
          <Transition from={'left'}>
            <h2 className="text-[48px] font-semibold uppercase font-roboto">
              WE CONNECT YOU WITH YOUR CUSTOMERS
            </h2>
          </Transition>
          <Transition from={'left'} delay={0.1}>
            <p className="mt-[32px] mb-[40px] text-[24px]">
              Connect, Manage, Resolve – All in One Place . Your Unified
              Solution for Seamless Customer Support, Bringing All Customer
              Interactions Under One Roof
            </p>
          </Transition>
          <Transition from={'left'} delay={0.15}>
            <div>
              <CustomLink
                href="/join"
                type="button"
                variant="solid"
                variantColor="none">
                Join Us
              </CustomLink>
            </div>
          </Transition>
        </div>
        <div className="w-[100%] flex justify-center">
          <Transition from={'right'}>
            <img src="/images/landing.png" alt="" />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Landing;

