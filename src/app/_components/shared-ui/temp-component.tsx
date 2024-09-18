/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'framer-motion';

import useAnimation from '@/app/_hooks/useAnimation';
import { useEffect } from 'react';
import { useRouter } from 'nextjs-toploader/app';

const MessageAndRedirect = ({ nextPage, src, text }) => {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout for 5 seconds before redirecting
    const timer = setTimeout(() => {
      setIsStepTransitionComplete(false);
      router.push(nextPage); // Change to your target route
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, [router, nextPage]);

  const {
    setIsStepTransitionComplete,
    isStepTransitionComplete,
    handleExitComplete,
    animationVariants,
  } = useAnimation();

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isStepTransitionComplete && (
        <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-[32px]">
          <div className="container bg-backgroundColor rounded-[20px]">
            <motion.div
              variants={animationVariants}
              initial="hiddenRight"
              animate="visible"
              exit="hiddenRight"
              className="flex flex-col justify-center items-center py-[80px] px-[40px] mx-[16px] gap-[50px]">
              <img src={src} alt="" />
              <p className="text-lg font-bold text-[30px] text-center">
                {text}
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default MessageAndRedirect;

