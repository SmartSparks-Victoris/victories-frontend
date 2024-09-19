'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Transition = ({ from, children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0 && latest < 1) {
      // Start the delay timer if not already animating
      if (!shouldAnimate) {
        setTimeout(() => {
          setShouldAnimate(true);
        }, delay * 1000); // Convert delay to milliseconds
      }
    } else {
      setShouldAnimate(false);
    }
  });

  useEffect(() => {
    if (shouldAnimate) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [shouldAnimate]);

  const fromX = { x: from === 'left' ? '-100vw' : '100vw' };
  const fromY = { y: from === 'up' ? '-100vh' : '100vh' };
  const toX = { x: inView ? '0vw' : from === 'left' ? '-100vw' : '100vw' };
  const toY = { y: inView ? '0vh' : from === 'up' ? '-100vh' : '100vh' };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={from === 'left' || from === 'right' ? fromX : fromY}
      animate={from === 'left' || from === 'right' ? toX : toY}
      transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  );
};

export default Transition;

