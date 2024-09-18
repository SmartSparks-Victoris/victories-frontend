import { useState } from 'react';

const useAnimation = () => {
  const animationVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hiddenLeft: { opacity: 0, x: '-100vw', transition: { duration: 0.5 } },
    hiddenRight: { opacity: 0, x: '100vw', transition: { duration: 0.5 } },
    hiddenTop: { opacity: 0, y: '-100vh', transition: { duration: 0.5 } },
    hiddenBottom: { opacity: 0, y: '100vh', transition: { duration: 0.5 } },
  };

  const [isStepTransitionComplete, setIsStepTransitionComplete] =
    useState(true);

  const startTransition = () => {
    setIsStepTransitionComplete(false); // Disable rendering next step until transition completes
  };

  const handleExitComplete = () => {
    setIsStepTransitionComplete(true); // Enable rendering next step after exit animation completes
  };

  return {
    isStepTransitionComplete,
    setIsStepTransitionComplete,
    startTransition,
    handleExitComplete,
    animationVariants,
  };
};

export default useAnimation;

