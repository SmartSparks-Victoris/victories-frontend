import Landing from '@/app/_components/guest-sections/landing';
import React from 'react';
import ServicesSection from '@/app/_components/services-sections/services';

const page = () => {
  return (
    <>
      <Landing Head="Our Services" />
      <ServicesSection />
    </>
  );
};

export default page;

