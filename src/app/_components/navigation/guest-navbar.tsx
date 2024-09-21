/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef, useState } from 'react';

import CustomLink from './custom-link';
import GuestNavbarItem from './guest-navbar-item';
import MenuCloseSVG from '../svg/menu-close';
import MenuOpenSVG from '../svg/menu-open';
import { guestVariants } from '@/app/_variants/guest-navbar';
import { handleClickOutside } from '@/app/_utils/navigation';
import { motion } from 'framer-motion';

const GuestNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleNavButtonExpanderClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {
    const clickHandler = (event: MouseEvent) =>
      handleClickOutside(event, navRef, setIsOpen);

    document.addEventListener('mousedown', clickHandler);
    return () => {
      document.removeEventListener('mousedown', clickHandler);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="h-guestNav bg-surfaceTertiary flex items-center fixed w-full top-0 left-0 z-20 text-textNavBarPrimary">
      <div className="container mx-auto flex justify-between items-center">
        <CustomLink href={'/'} className="flex">
          <img src="/images/logo.png" alt="" />
        </CustomLink>
        <button className="md:hidden" onClick={handleNavButtonExpanderClick}>
          {isOpen ? <MenuOpenSVG /> : <MenuCloseSVG />}
        </button>
        <div className="absolute md:relative top-guestNav md:top-0 left-0 w-full bg-surfaceTertiary">
          <motion.ul
            variants={guestVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className={`md:flex gap-5 flex-col md:flex-row md:justify-end container mx-auto p-2 ${
              isOpen ? 'flex' : 'hidden'
            }`}>
            <div className="flex gap-3 items-start md:items-center md:flex-row flex-col caption-18">
              <GuestNavbarItem href="/" text="Home" />
              <GuestNavbarItem href="/about" text="About" />
              <GuestNavbarItem href="/services" text="Services" />
              <GuestNavbarItem href="/contact" text="Contact" />
            </div>
            <div className="flex gap-[24px] items-start md:items-center md:flex-row flex-col">
              <li>
                <CustomLink
                  href={'/login'}
                  className="bg-transparent px-3 py-1 rounded-sm border-1 border-textNavBarPrimary">
                  Login
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  href={'/join'}
                  className="bg-tertiaryButton px-3 py-1 rounded-sm border-1 border-tertiaryButton text-textNavBarPrimary">
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

