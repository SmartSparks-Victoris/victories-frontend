import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-center bg-stone-400">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] gap-[18px] container mx-auto">
        <Link href={'/'}>Logo</Link>
        <nav className="flex flex-col">
          <h3>Quick Links</h3>
          <ul className="flex flex-col">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link href={'/services'}>Services</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <div className="flex">
            <span>icon</span>
            <p>+201098536400</p>
          </div>
          <div className="flex">
            <span>icon</span>
            <p>name@gmail.com</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
            <span>icon4</span>
          </div>
        </div>
      </div>
      <div className="bg-green-400 w-[90%] mx-auto h-[4px]"></div>
      <p className="bg-gray-400 text-center">
        &copy; {new Date().getFullYear()} Project Name, All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;

