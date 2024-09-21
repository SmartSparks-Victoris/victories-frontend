import React, { FC } from 'react';

import CustomLink from '../navigation/custom-link';
import { LandingSectionProps } from '@/app/_types/guest.types';
import Transition from '../shared-ui/transition';

const Landing: FC<LandingSectionProps> = ({ Head }) => {
  return (
    <section className="min-h-[calc(50vh-var(--guestNav))] py-[146px] flex justify-center items-center text-textWhite">
      <Transition from={'up'}>
        <div className="container mx-auto flex flex-col gap-16 justify-center items-center">
          <h1 className="font-roboto font-semibold text-[80px] text-center">
            {Head}
          </h1>
          <p className="text-[16px]">
            <CustomLink href="/" className="font-bold underline">
              Home
            </CustomLink>
            <span> / {Head}</span>
          </p>
        </div>
      </Transition>
    </section>
  );
};

export default Landing;

