'use client';

import React, { useEffect, useRef, useState } from 'react';

import CustomLink from './custom-link';

const GuestNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleNavButtonExpanderClick() {
    setIsOpen((isOpen) => !isOpen);
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
      className="h-[var(--guestNav)] bg-gray-300 py-4 flex items-center fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <CustomLink href={'/'}>Logo</CustomLink>
        <button className="sm:hidden" onClick={handleNavButtonExpanderClick}>
          =
        </button>
        <div className="absolute sm:relative top-[var(--guestNav)] sm:top-0 left-0 w-full">
          <ul
            className={`sm:flex gap-4 flex-col sm:flex-row sm:justify-end container mx-auto p-4 ${
              isOpen ? 'flex' : 'hidden'
            }`}>
            <li>
              <CustomLink href={'/about'}>About</CustomLink>
            </li>
            <li>
              <CustomLink href={'/services'}>Services</CustomLink>
            </li>
            <li>
              <CustomLink href={'/contact'}>Contact</CustomLink>
            </li>
            <li>
              <CustomLink href={'/login'}>Login</CustomLink>
            </li>
            <li>
              <CustomLink href={'/join'}>Join</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;

