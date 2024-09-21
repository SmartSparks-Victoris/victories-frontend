/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect } from 'react';

import { MessageAndRedirectProps } from '@/app/_types/shared-ui.types';
import useAnimation from '@/app/_hooks/useAnimation';
import { useRouter } from 'nextjs-toploader/app';

const MessageAndRedirect: FC<MessageAndRedirectProps> = ({
  nextPage,
  src,
  text,
  text2 = '',
}) => {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout for 5 seconds before redirecting
    const timer = setTimeout(() => {
      setIsStepTransitionComplete(false);
      router.push(nextPage); // Change to your target route
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <section className="min-h-[calc(100vh-var(--guestNav))] flex  justify-center items-center py-4">
          <div className="container bg-backgroundColor rounded-[20px]">
            <motion.div
              variants={animationVariants}
              initial="hiddenRight"
              animate="visible"
              exit="hiddenRight"
              className="flex flex-col justify-center items-center py-10 px-5 mx-2 gap-[50px]">
              <img src={src} alt="" />
              <div className="flex flex-col gap-[2px]">
                <p className="text-lg font-bold text-[30px] text-center">
                  {text}
                </p>
                {text2 && (
                  <p className="text-lg font-bold text-[30px] text-center">
                    {text2}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default MessageAndRedirect;

