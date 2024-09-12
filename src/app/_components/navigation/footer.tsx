import CustomLink from './custom-link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 justify-center bg-gray-300 py-[40px]">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(172px,_1fr))] gap-[18px] container mx-auto">
        <CustomLink href={'/'}>Logo</CustomLink>
        <nav className="flex flex-col">
          <h3>Quick Links</h3>
          <ul className="flex flex-col">
            <li>
              <CustomLink href={'/'}>Home</CustomLink>
            </li>
            <li>
              <CustomLink href={'/about'}>About</CustomLink>
            </li>
            <li>
              <CustomLink href={'/contact'}>Contact</CustomLink>
            </li>
            <li>
              <CustomLink href={'/services'}>Services</CustomLink>
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
      <div className="bg-slate-400 w-[90%] mx-auto h-[4px]"></div>
      <p className="text-center">
        &copy; {new Date().getFullYear()} Project Name, All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;

