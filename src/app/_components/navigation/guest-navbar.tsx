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
          {isOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.3838 21.0112C25.2777 21.9052 25.2777 23.3497 24.3838 24.2437C23.4898 25.1377 22.0453 25.1377 21.1513 24.2437L1.75634 4.84876C0.862354 3.95477 0.862354 2.51025 1.75634 1.61627C2.65032 0.722284 4.09484 0.722283 4.98883 1.61627L24.3838 21.0112Z"
                fill="#FFF7FA"
              />
              <path
                d="M1.61624 21.0112C0.722259 21.9052 0.722259 23.3497 1.61624 24.2437C2.51023 25.1377 3.95475 25.1377 4.84873 24.2437L24.2437 4.84876C25.1376 3.95477 25.1376 2.51025 24.2437 1.61627C23.3497 0.722284 21.9052 0.722283 21.0112 1.61627L1.61624 21.0112Z"
                fill="#FFF7FA"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.28571 9.14286C1.02143 9.14286 0 10.1643 0 11.4286C0 12.6929 1.02143 13.7143 2.28571 13.7143H29.7143C30.9786 13.7143 32 12.6929 32 11.4286C32 10.1643 30.9786 9.14286 29.7143 9.14286H2.28571ZM2.28571 0C1.02143 0 0 1.02143 0 2.28571C0 3.55 1.02143 4.57143 2.28571 4.57143H29.7143C30.9786 4.57143 32 3.55 32 2.28571C32 1.02143 30.9786 0 29.7143 0H2.28571Z"
                fill="#FFF7FA"
              />
              <path
                d="M2.28571 18.2143C1.02143 18.2143 0 19.2357 0 20.5C0 21.7643 1.02143 22.7857 2.28571 22.7857H29.7143C30.9786 22.7857 32 21.7643 32 20.5C32 19.2357 30.9786 18.2143 29.7143 18.2143H2.28571ZM2.28571 9.07141C1.02143 9.07141 0 10.0928 0 11.3571C0 12.6214 1.02143 13.6428 2.28571 13.6428H29.7143C30.9786 13.6428 32 12.6214 32 11.3571C32 10.0928 30.9786 9.07141 29.7143 9.07141H2.28571Z"
                fill="#FFF7FA"
              />
            </svg>
          )}
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

