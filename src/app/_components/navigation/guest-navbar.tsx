'use client';

import React, { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

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
      className="h-[var(--guestNav)] bg-gray-300 p-4 flex items-center fixed w-full top-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>Logo</Link>
        <button className="sm:hidden" onClick={handleNavButtonExpanderClick}>
          =
        </button>
        <div className="bg-stone-400 absolute sm:relative top-[var(--guestNav)] sm:top-0 left-0 w-full">
          <ul
            className={`sm:flex gap-4 flex-col sm:flex-row sm:justify-end bg-slate-600 container mx-auto p-4 ${
              isOpen ? 'flex' : 'hidden'
            }`}>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link href={'/login'}>Login</Link>
            </li>
            <li>
              <Link href={'/join'}>Join</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;

