import JoinSection from '@/app/_components/about-sections/join';
import Landing from '@/app/_components/guest-sections/landing';
import React from 'react';
import Statistics from '@/app/_components/about-sections/statistics';
import WhiteSection from '@/app/_components/guest-sections/white-section';

const page = () => {
  return (
    <>
      <Landing Head="About Us" />
      <WhiteSection
        Head="Who We Are"
        src="/images/about-section.png"
        buttonValue="Contact Us"
        href="/contact"
        body="We are a tech company transforming customer engagement by simplifying support through a centralized platform that integrates WhatsApp and Messenger, enhancing communication and service."
      />
      <Statistics />
      <JoinSection />
    </>
  );
};

export default page;

