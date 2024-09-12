import CustomLink from '../navigation/custom-link';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex justify-center items-center">
      <div className="container mx-auto flex sm:flex-row flex-col justify-between items-center gap-4">
        <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
        <div className="text">
          <h2>About</h2>
          <p>
            We are a technology company focused on transforming how businesses
            engage with their customers. Our mission is to simplify customer
            support through a centralized platform that integrates messaging
            services like WhatsApp and Messenger, providing seamless tools to
            enhance communication and deliver exceptional service{' '}
          </p>
          <div>
            <CustomLink href={'/about'}>Read More</CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

