import Introduction from '@/app/_components/about-sections/introduction';
import JoinSection from '@/app/_components/about-sections/join';
import Landing from '@/app/_components/about-sections/landing';
import React from 'react';
import Statistics from '@/app/_components/about-sections/statistics';

const page = () => {
  return (
    <>
      <Landing />
      <Introduction />
      <Statistics />
      <JoinSection />
    </>
  );
};

export default page;

