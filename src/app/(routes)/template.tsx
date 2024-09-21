'use client';

import React, { FC } from 'react';

import { ChildrenProps } from '../_types/children.types';
import { motion } from 'framer-motion';

const Transition: FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}>
      {children}
    </motion.div>
  );
};

export default Transition;

