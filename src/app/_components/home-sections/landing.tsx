'use client';

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

import CustomLink from '../navigation/custom-link';

const Landing = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  // const isInView = useInView(ref, {
  //   amount: 'all',
  // });

  // useEffect(() => {
  //   console.log('IN VIEW: ', isInView);
  // }, [isInView]);

  const { scrollYProgress } = useScroll({
    // container: containerRef,
    // axis: 'x',
    target: ref,
    offset: ['start end', 'end start'],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['#1C1C1C', '#F9FAFC'],
  );

  const pRef = useRef(null);

  const { scrollYProgress: yScroll } = useScroll({
    target: ref,
    // container: containerRef,
    offset: ['start end', 'end start'],
  });

  // useMotionValueEvent(yScroll, 'change', (latest) => {
  //   console.log('Scroll progress:', latest);
  // });

  // const x = useTransform(yScroll, [0.6, 0.75], ['100vw', '0vw']); // Move from 0 to 100px based on scroll
  const y = useTransform(yScroll, [0.6, 0.75], ['-100vh', '0vh']); // Move from 0 to 100px based on scroll

  return (
    <section
      className="min-h-[calc(100vh-var(--guestNav))]  flex justify-center items-center"
      ref={containerRef}>
      <div className="container mx-auto flex sm:flex-row flex-col justify-between items-center gap-4">
        <div className="text">
          <motion.h2
            ref={ref}
            initial={{ x: '-100%', opacity: 0 }} // Start off-screen to the left and invisible
            whileInView={{ x: 0, opacity: 1 }}
            style={{ backgroundColor: background, scaleX: scrollYProgress }} // Apply background transformation
            // Move to the original position and become visible
            viewport={
              {
                // once: true, // Only animate the first time it comes into view
                // margin: '-100px', // Adjust to control when the animation starts
              }
            }
            transition={{ duration: 1 }} // Control the speed of the animation
            onViewportEnter={() => console.log('Enter')}
            onViewportLeave={() => console.log('Leave')}
            className="bg-green-600">
            WE CONNECT YOU WITH YOUR CUSTOMERS
          </motion.h2>
          <motion.p ref={pRef} style={{ y }}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum
          </motion.p>
          <div>
            <CustomLink href="/join">Join</CustomLink>
            <CustomLink href="/">How it works</CustomLink>
          </div>
        </div>
        <div className="image w-[200px] h-[200px] bg-gray-400 shrink-0"></div>
      </div>
    </section>
  );
};

export default Landing;

