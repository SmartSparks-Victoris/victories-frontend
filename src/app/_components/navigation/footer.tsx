import CustomLink from './custom-link';
import EmailOutlineSVG from '../svg/email-outline';
import FacebookSVG from '../svg/facebook';
import FooterContactItem from './footer-contact-item';
import InstagramSVG from '../svg/instagram';
/* eslint-disable @next/next/no-img-element */
import LinkedinSVG from '../svg/linkedin';
import PhoneOutlineSVG from '../svg/phone-outline';
import React from 'react';
import TwitterSVG from '../svg/twitter';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 justify-center py-8 text-textNavBarPrimary">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(264px,_1fr))] gap-5 container mx-auto place-items-center sm:place-items-stretch">
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2">
              <CustomLink href={'/'}>
                <img src="/images/logo.png" alt="" />
              </CustomLink>
              <CustomLink href={'/'}>
                <p className="text-28">Smart Sparks</p>
              </CustomLink>
            </div>
            <div className="flex gap-5 flex-wrap items-center">
              <a href="https://www.google.com">
                <LinkedinSVG />
              </a>
              <a href="https://www.google.com">
                <FacebookSVG />
              </a>
              <a href="https://www.google.com">
                <InstagramSVG />
              </a>
              <a href="https://www.google.com">
                <TwitterSVG />
              </a>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <h3 className="text-22">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-18">
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
        <div className="flex flex-col gap-2">
          <h3 className="text-22">Contact</h3>
          <div className="flex flex-col gap-2">
            <FooterContactItem text="+201098536400">
              <PhoneOutlineSVG />
            </FooterContactItem>
            <FooterContactItem text="name@gmail.com">
              <EmailOutlineSVG />
            </FooterContactItem>
          </div>
        </div>
      </div>
      <div className="bg-textNavBarPrimary w-[90%] mx-auto h-[2px]"></div>
      <p className="text-center text-26">
        &copy; {new Date().getFullYear()} Smart Sparks, All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;

