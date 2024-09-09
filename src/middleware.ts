// import { cookies, headers } from 'next/headers';

import { NextRequest, NextResponse } from 'next/server';
// import { parseJwt } from './app/_utils/auth';

export function middleware(request: NextRequest) {
  // const headersList = headers();
  // const host = headersList.get('host');
  // console.log(host);
  // const subdomains = host?.split('.');
  // if (cookies().get('token') === undefined) {
  //   return NextResponse.redirect('http://redirect.localhost:3000');
  // }

  // const user = parseJwt(cookies().get('token')?.value);

  // if (user && host === 'localhost:3000') {
  //   console.log('USER IS: ', user);
  //   console.log('HOST IS: ', host);
  //   return NextResponse.redirect(`http://${user.subdomain}.localhost:3000`);
  // }

  // console.log(subdomains);

  // if (host === 'redirect.localhost:3000') {
  //   console.log('YEs');
  //   return NextResponse.redirect('http://localhost:3000');
  // }

  // if (subdomains && subdomains?.length > 2) {
  //   return NextResponse.redirect('http://b.localhost:3000');
  // }

  // if (host === 'localhost:3000') {
  //   return NextResponse.redirect('http://home.localhost:3000');
  // }

  // if (host === 'a.localhost:3000') {
  //   return NextResponse.redirect('http://localhost:3000');
  // }
  // console.log(request);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|icon.ico|sitemap.xml|robots.txt).*)',
};

