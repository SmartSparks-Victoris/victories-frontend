/* eslint-disable @next/next/no-img-element */
'use client';

import React, { FC } from 'react';

import AdminNavbarItem from './admin-navbar-item';
import AdminsCloseSVG from '../svg/admins-close';
import AdminsOpenSVG from '../svg/admins-open';
import CustomLink from './custom-link';
import CustomersCloseSVG from '../svg/customers-close';
import CustomersOpenSVG from '../svg/customers-open';
import HelpCloseSVG from '../svg/help-close';
import HelpOpenSVG from '../svg/help-open';
import HomeCloseSVG from '../svg/home-close';
import HomeOpenSVG from '../svg/home-open';
import LogoutSVG from '../svg/logout';
import PricingCloseSVG from '../svg/pricing-close';
import PricingOpenSVG from '../svg/pricing-open';
import ProfileCloseSVG from '../svg/profile-close';
import ProfileOpenSVG from '../svg/profile-open';
import SupportCloseSVG from '../svg/support-close';
import SupportOpenSVG from '../svg/support-open';
import TicketsCloseSVG from '../svg/tickets-close';
import TicketsOpenSVG from '../svg/tickets-open';
import { UserProps } from '@/app/_types/user.types';
import { revalidateLogin } from '@/app/_actions/login';
import toast from 'react-hot-toast';
import { useRouter } from 'nextjs-toploader/app';
import { useSocket } from '@/app/_contexts/socket-context';

const AdminNavbar: FC<UserProps> = ({ user }) => {
  const { socket } = useSocket();
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch('http://localhost:3001/logout', {
        method: 'POST',
        credentials: 'include',
      });
      socket.emit('logout', 1);
      // disconnectSocket();
      await revalidateLogin();
      router.push('/');
      toast.success('logged out successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging out.');
    }
  }

  return (
    <nav className="w-[var(--adminNavSmall)] md:w-[var(--adminNav)] min-h-[100vh] fixed left-0 top-0 bg-slate-300 flex flex-col gap-0 bg-[url('/images/Background.png')] bg-cover text-textWhite z-20">
      <CustomLink
        href="/"
        className="flex items-center gap-[14px] py-[40px] pl-[32px]">
        <img src="/images/logo.png" alt="" className="h-[31px] w-[24px]" />
        <p className="font-roboto text-[20px] font-bold md:flex hidden">
          Smart Sparks
        </p>
      </CustomLink>
      <div className="flex flex-col justify-between flex-grow">
        <ul className="flex flex-col gap-[24px]">
          <AdminNavbarItem
            openIcon={HomeOpenSVG}
            closeIcon={HomeCloseSVG}
            href="/"
            name="Home"
          />
          <AdminNavbarItem
            openIcon={TicketsOpenSVG}
            closeIcon={TicketsCloseSVG}
            href="/tickets"
            name="Tickets"
          />
          {user && user.role === 'owner' && (
            <AdminNavbarItem
              openIcon={AdminsOpenSVG}
              closeIcon={AdminsCloseSVG}
              href="/admins"
              name="Admins"
            />
          )}
          <AdminNavbarItem
            openIcon={CustomersOpenSVG}
            closeIcon={CustomersCloseSVG}
            href="/customers"
            name="Customers"
          />

          {user && user.role === 'owner' && (
            <AdminNavbarItem
              openIcon={PricingOpenSVG}
              closeIcon={PricingCloseSVG}
              href="/pricing"
              name="Pricing"
            />
          )}
          <AdminNavbarItem
            openIcon={ProfileOpenSVG}
            closeIcon={ProfileCloseSVG}
            href="/profile"
            name="Profile"
          />
          <AdminNavbarItem
            openIcon={HelpOpenSVG}
            closeIcon={HelpCloseSVG}
            href="/help"
            name="Help"
          />
        </ul>

        <ul className="flex flex-col gap-[24px] mb-[40px]">
          <AdminNavbarItem
            openIcon={SupportOpenSVG}
            closeIcon={SupportCloseSVG}
            href="/support"
            name="Support"
          />
          <li className="pl-[32px]" title="Logout">
            <button className="flex gap-[8px]" onClick={handleLogout}>
              <LogoutSVG />
              <p className="font-medium text-[16px] md:flex hidden">Logout</p>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;

