/* eslint-disable @next/next/no-img-element */
'use client';

import React, { FC } from 'react';

import CustomLink from '../navigation/custom-link';
import { NormalSectionProps } from '@/app/_types/guest.types';
import Transition from '../shared-ui/transition';

const NormalSection: FC<NormalSectionProps> = ({
  Head,
  body,
  buttonValue,
  href,
  src,
}) => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-[64px]">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-[80px] text-textWhite">
        <div className="w-[100%]">
          <Transition from={'left'}>
            <h2 className="text-[48px] font-semibold uppercase font-roboto">
              {Head}
            </h2>
          </Transition>
          <Transition from={'left'} delay={0.1}>
            <p className="mt-[32px] mb-[40px] text-[24px]">{body}</p>
          </Transition>
          <Transition from={'left'} delay={0.15}>
            <div>
              <CustomLink
                href={href}
                type="button"
                variant="solid"
                variantColor="none">
                {buttonValue}
              </CustomLink>
            </div>
          </Transition>
        </div>
        <div className="w-[100%] flex justify-center">
          <Transition from={'right'}>
            <img src={src} alt="" />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default NormalSection;

