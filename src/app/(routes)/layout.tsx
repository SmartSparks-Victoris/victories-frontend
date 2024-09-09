import './globals.css';

import { cookies, headers } from 'next/headers';

import type { Metadata } from 'next';
import SocketComponent from '../_components/socket-component';
import { SocketProvider } from '../_contexts/socket-context';
import localFont from 'next/font/local';
import { parseJwt } from '../_utils/auth';

const geistSans = localFont({
  src: '../_fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../_fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headersList = headers();
  // const host = headersList.get('host');
  // console.log('HOST: ', host);
  const user = parseJwt(cookies().get('token')?.value);

  // if (host !== 'localhost:3000' && !user) {
  //   return redirect('http://localhost:3000');
  // }

  // if (host === 'localhost:3000' && user) {
  //   // return redirect(`${user.subdomain}.localhost:3000`);
  //   return redirect('home.localhost:3000');
  // }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SocketProvider>
          {children}
          <SocketComponent user={user} />
        </SocketProvider>
      </body>
    </html>
  );
}
