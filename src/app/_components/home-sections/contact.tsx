import AddressSVG from '../svg/address';
import ContactItem from './contact-item';
import MessageSVG from '../svg/message';
import PhoneSVG from '../svg/phone';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Transition from '../shared-ui/transition';

const ContactSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))] flex justify-center items-center py-[64px] bg-backgroundOpacity">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between items-center gap-[80px] text-textWhite">
        <div className="w-[100%] flex justify-center">
          <Transition from={'left'}>
            <img src="/images/contact-section.png" alt="" />
          </Transition>
        </div>

        <div className="w-[100%]">
          <Transition from={'right'}>
            <h2 className="text-[40px] font-semibold font-roboto">
              Contact Us
            </h2>
          </Transition>
          <Transition from={'right'} delay={0.1}>
            <p className="mt-[24px] mb-[40px] text-[24px]">
              Feel free to reach out to us with any questions or support needs –
              we are here to help!
            </p>
          </Transition>
          <Transition from={'right'} delay={0.15}>
            <div className="flex flex-col gap-[56px]">
              <ContactItem text="Phone: +123-456-7890">
                <PhoneSVG />
              </ContactItem>
              <ContactItem text="Address: 123 City Country">
                <AddressSVG />
              </ContactItem>
              <ContactItem text="Email:1234t@gmail.com">
                <MessageSVG />
              </ContactItem>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

