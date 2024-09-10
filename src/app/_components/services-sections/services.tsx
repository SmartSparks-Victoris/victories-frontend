/* eslint-disable @next/next/no-img-element */
import React from 'react';
import servicesData from '@/app/_data/services';

const ServicesSection = () => {
  return (
    <section className="py-[80px] bg-green-800 flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <div className="mb-[180px] text-center">
          <p>Features Services</p>
          <h2>Lorem Ipsum lorem ipsum</h2>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(472px,_1fr))] gap-x-[18px] gap-y-[180px]">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="flex flex-col gap-4 items-center justify-center relative bg-yellow-500 min-h-[500px]">
                {/* <img src={service.img} alt={service.description} /> */}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="absolute top-[0%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[200px] h-[200px] bg-green-300">
                  <img src={service.img} alt="00" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

