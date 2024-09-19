/* eslint-disable @next/next/no-img-element */
import React from 'react';
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
          className="w-full grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-x-[18px] gap-y-[180px]">
          {servicesData.map((service) => {
            return (
              <>
                <div
                  key={service.id}
                  className="min-h-[400px] rounded-[24px] card group relative perspective-1000">
                  <div className="absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[228px] h-[228px] z-20">
                    <div className="transition-transform duration-1000 group-hover:rotate-y-180 transform-style-3d  bg-slate-200 ">
                      <img
                        src={service.img}
                        className="absolute backface-hidden"
                        alt=""
                      />
                      <img
                        src={service.img}
                        className="absolute rotate-y-180 backface-hidden"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className=" card-inner group-hover:-rotate-y-180 absolute w-[100%] h-[100%]   transition-transform transform-style-3d duration-1000 rounded-[24px] bg-[url('/images/service-background.png')] bg-cover text-textWhite ">
                    <div className="flex flex-col gap-[16px] items-center text-center justify-center card-front backface-hidden absolute w-[100%] h-[100%] px-[24px] rounded-[24px]">
                      <h2 className="text-[26px] font-semibold">
                        {service.title}
                      </h2>
                      <p className="font-medium text-[20px]">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[32px] items-center text-center justify-center card-back rotate-y-180 backface-hidden	absolute w-[100%] h-[100%] px-[24px] rounded-[24px]">
                      <h2 className="text-[26px] font-semibold">
                        {service.title}
                      </h2>
                      <p className="font-medium text-[20px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Transition>
      </div>
    </section>
  );
};

export default ServicesSection;

