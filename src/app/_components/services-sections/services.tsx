/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServiceItem from './service-item';
import Transition from '../shared-ui/transition';
import servicesData from '@/app/_data/services';

const ServicesSection = () => {
  return (
    <section className="py-[80px]  flex justify-center items-center bg-backgroundOpacity text-textWhite">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <Transition from="up">
          <div className="mb-[180px] text-center gap-[8px]">
            <p className="text-[28px] font-medium">Features Services</p>
            <h2 className="font-roboto text-[40px] font-semibold">
              What We Offer to Improve Customer Support
            </h2>
          </div>
        </Transition>
        <Transition
          from={'down'}
          className="w-full grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-[18px] gap-y-[180px] justify-center">
          {servicesData.map((service) => {
            return <ServiceItem key={service.id} service={service} />;
          })}
        </Transition>
      </div>
    </section>
  );
};

export default ServicesSection;

