'use client';

import Link from 'next/link';
import React from 'react';
import { revalidateLogin } from '@/app/_actions/login';
import { useRouter } from 'next/navigation';
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
      alert('You have been logged out.');
      socket.emit('logout', 1);
      // disconnectSocket();
      await revalidateLogin();
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging out.');
    }
  }

  return (
    <nav className="w-[var(--adminNavSmall)] md:w-[var(--adminNav)] min-h-[100vh] fixed left-0 top-0 bg-slate-300">
      <div>
        <Link href="/">Smart Sparks</Link>
        <ul>
          <li>
            <Link href="/views">Views</Link>
          </li>
          <li>
            <Link href="/customers">Customers</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default AdminNavbar;

