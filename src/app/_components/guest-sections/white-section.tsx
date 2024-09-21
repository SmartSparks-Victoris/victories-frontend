/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import CustomLink from '../navigation/custom-link';
import Transition from '../shared-ui/transition';
import { WhiteSectionProps } from '@/app/_types/guest.types';

const WhiteSection: FC<WhiteSectionProps> = ({
  Head,
  body,
  buttonValue,
  href,
  src,
}) => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-8 bg-backgroundOpacity">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-10 text-textNavBarPrimary">
        <div className="w-[100%] flex justify-center">
          <Transition from={'left'}>
            <img src={src} alt="" />
          </Transition>
        </div>

        <div className="w-[100%]">
          <Transition from={'right'}>
            <h2 className="text-[40px] font-semibold font-roboto">{Head}</h2>
          </Transition>
          <Transition from={'right'} delay={0.1}>
            <p className="mt-4 mb-5 text-[24px]">{body}</p>
          </Transition>
          <Transition from={'right'} delay={0.2}>
            <div>
              <CustomLink href={href} type="button">
                {buttonValue}
              </CustomLink>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default WhiteSection;

