import './fonts.css';
import './globals.css';

import AdminNavbar from '@/app/_components/navigation/admin-navbar';
import Footer from '@/app/_components/navigation/footer';
import GuestNavbar from '@/app/_components/navigation/guest-navbar';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import SearchBar from '@/app/_components/navigation/searchbar';
import SocketComponent from '@/app/_components/general-components/socket-component';
import { SocketProvider } from '@/app/_contexts/socket-context';
import { Toaster } from 'react-hot-toast';
import { cookies } from 'next/headers';
import { parseJwt } from '@/app/_utils/auth';

export const metadata: Metadata = {
  title: 'Smart Sparks',
  description:
    'We aim to develop a comprehensive customer service platform that integrates with popular messaging services such as WhatsApp and Messenger. The primary objective is to streamline the process of managing and classifying user inquiries and support tickets, enabling businesses to deliver efficient and responsive customer service. This platform will serve as a centralized hub where all customer interactions, regardless of the communication channel, are aggregated, managed, and resolved.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = parseJwt(cookies().get('token')?.value);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body
        className={`font-poppins ${!user && 'pt-[var(--guestNav)]'} ${
          user && 'pagePadding'
        } ${
          !user &&
          'bg-[url("/images/background.png")] bg-no-repeat bg-center bg-cover'
        } `}>
        <Toaster position="top-center" />
        <NextTopLoader
          color="white"
          initialPosition={0.08}
          crawlSpeed={200}
          height={8}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px white,0 0 5px white"
          template='<div class="bar" role="bar"><div class="peg"></div></div>
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {/* <NextTopLoader
          color="var(--textNavBarPrimary)"
          initialPosition={0.18}
          crawlSpeed={200}
          height={8}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--textNavBarPrimary),0 0 5px var(--textNavBarPrimary)"
          template='<div class="bar" role="bar"><div class="peg"></div></div>
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        /> */}
        <SocketProvider>
          {!user && <GuestNavbar />}
          {user && (
            <>
              <AdminNavbar user={user} />
              <SearchBar user={user} />
            </>
          )}
          <main
            className={`relative ${
              user
                ? 'min-h-[calc(100vh-var(--paddingAdminTop)*2-var(--searchNav))]'
                : ''
            }`}>
            {children}
          </main>
          {!user && <Footer />}
          <SocketComponent user={user} />
        </SocketProvider>
      </body>
    </html>
  );
}

