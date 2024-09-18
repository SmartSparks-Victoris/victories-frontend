'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Transition = ({ from, children, delay = 0 }) => {
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

  return (
    <motion.div
      ref={ref}
      initial={{ x: from === 'left' ? '-100vw' : '100vw' }}
      animate={{ x: inView ? '0vw' : from === 'left' ? '-100vw' : '100vw' }}
      transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  );
};

export default Transition;

