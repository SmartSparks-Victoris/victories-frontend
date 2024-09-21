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
  description: 'Generated by create next app',
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
        <link rel="icon" href="/iocon.ico" sizes="any" />
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
          color="var(--textWhite)"
          initialPosition={0.18}
          crawlSpeed={200}
          height={8}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #var(--textWhite),0 0 5px var(--textWhite)"
          template='<div class="bar" role="bar"><div class="peg"></div></div>
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
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

