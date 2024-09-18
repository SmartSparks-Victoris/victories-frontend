/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import CustomLink from './custom-link';
import { usePathname } from 'next/navigation';

const variants = {
  open: { y: 0, opacity: 1 },
  closed: { y: '-100vh', opacity: 0 }, // Move it out of view initially
};

const GuestNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  function handleNavButtonExpanderClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  function isActive(path) {
    return pathname === path;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;

    if (navRef.current && !navRef.current.contains(target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="h-[var(--guestNav)] bg-[#745865] py-4 flex items-center fixed w-full top-0 left-0 z-20 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <CustomLink href={'/'} className="flex">
          <img src="/images/logo.png" alt="" />
        </CustomLink>
        <button className="md:hidden" onClick={handleNavButtonExpanderClick}>
          =
        </button>
        <div className="absolute md:relative top-[var(--guestNav)] md:top-0 left-0 w-full bg-[#745865]">
          <motion.ul
            variants={variants}
            initial="visible"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className={`md:flex gap-[40px] flex-col md:flex-row md:justify-end container mx-auto p-4 ${
              isOpen ? 'flex' : 'hidden'
            }`}>
            <div className="flex gap-[24px] items-start md:items-center md:flex-row flex-col text-[18px]">
              <li>
                <CustomLink
                  href={'/'}
                  className={`${
                    isActive('/') ? 'font-bold text-white' : 'text-white/80'
                  }`}>
                  Home
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href={'/about'}
                  className={`${
                    isActive('/about')
                      ? 'font-bold text-white'
                      : 'text-white/80'
                  }`}>
                  About
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href={'/services'}
                  className={`${
                    isActive('/services')
                      ? 'font-bold text-white'
                      : 'text-white/80'
                  }`}>
                  Services
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href={'/contact'}
                  className={`${
                    isActive('/contact')
                      ? 'font-bold text-white'
                      : 'text-white/80'
                  }`}>
                  Contact
                </CustomLink>
              </li>
            </div>
            <div className="flex gap-[24px] items-start md:items-center md:flex-row flex-col">
              <li>
                <CustomLink
                  href={'/login'}
                  className="bg-transparent px-[24px] py-[8px] rounded-[8px] border-[1px] border-solid border-white">
                  Login
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href={'/join'}
                  className="bg-[#321E28] px-[24px] py-[8px] rounded-[8px] border-[1px] border-solid border-[#321E28]">
                  Join
                </CustomLink>
              </li>
            </div>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;

