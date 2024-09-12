'use client';

import React from 'react';
import { revalidateLogin } from '@/app/_actions/login';
import toast from 'react-hot-toast';
import { useRouter } from 'nextjs-toploader/app';
import { useSocket } from '@/app/_contexts/socket-context';

const AdminNavbar = () => {
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

  function handleLinkClick(href) {
    router.push(href);
  }

  return (
    <nav className="w-[var(--adminNavSmall)] md:w-[var(--adminNav)] min-h-[100vh] fixed left-0 top-0 bg-slate-300">
      <div>
        <button onClick={() => handleLinkClick('/')}>Smart Sparks</button>
        <ul>
          <li>
            <button onClick={() => handleLinkClick('/tickets')}>Tickets</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/admins')}>Admins</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/customers')}>
              Customers
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/pricing')}>Pricing</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/settings')}>
              Settings
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/profile')}>Profile</button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button onClick={() => handleLinkClick('/help')}>Help</button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('/support')}>Support</button>
          </li>

          <button onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;

