import CustomLink from '../navigation/custom-link';
import Link from 'next/link';
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="min-h-[calc(100vh-var(--guestNav))]  flex justify-center items-center">
      <div className="container mx-auto flex sm:flex-row flex-col justify-between items-center gap-4">
        <div className="text">
          <h2>Services</h2>
          <p>
            We provide a powerful, all-in-one customer service platform designed
            to simplify and streamline the way businesses manage customer
            interactions across multiple channels. Our services are tailored to
            help you deliver efficient, responsive, and personalized support.{' '}
          </p>
          <div>
            <CustomLink href="/services">Read More</CustomLink>
          </div>
        </div>
        <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
      </div>
    </section>
  );
};

export default ServicesSection;

