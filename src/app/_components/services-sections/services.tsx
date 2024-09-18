/* eslint-disable @next/next/no-img-element */
import React from 'react';
import servicesData from '@/app/_data/services';

const ServicesSection = () => {
  return (
    <section className="py-[80px]  flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <div className="mb-[180px] text-center">
          <p>Features Services</p>
          <h2>Lorem Ipsum lorem ipsum</h2>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(472px,_1fr))] gap-x-[18px] gap-y-[180px]">
          {servicesData.map((service) => {
            return (
              <>
                <div
                  key={service.id}
                  className="card group relative min-h-[300px] perspective-1000">
                  <div className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[200px] z-20">
                    <div className="transition-transform duration-500 group-hover:rotate-y-180 transform-style-3d  bg-slate-200 ">
                      <img
                        src={'/images/test.png'}
                        className="absolute backface-hidden"
                        alt=""
                      />
                      <img
                        src={'/images/login.png'}
                        className="absolute rotate-y-180 backface-hidden"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card-inner group-hover:-rotate-y-180 absolute w-[100%] h-[100%] transition-transform transform-style-3d duration-500">
                    <div className="flex flex-col gap-[32px] items-center justify-center card-front backface-hidden absolute w-[100%] h-[100%] bg-green-500">
                      <h2>Front</h2>
                    </div>
                    <div className="flex flex-col gap-[32px] items-center justify-center card-back rotate-y-180 backface-hidden	absolute w-[100%] h-[100%] bg-slate-400">
                      <h2>Back</h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

