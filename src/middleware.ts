// import { cookies, headers } from 'next/headers';

import { NextRequest, NextResponse } from 'next/server';
import { adminRoutes, guestRoutes, publicRoutes } from './routes';

import { parseJwt } from './app/_utils/auth';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const user = parseJwt(token);
  const pathname = request.nextUrl.pathname;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (user?.role === 'admin' && adminRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!user && adminRoutes.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url),
    );
  }

  if (!user && guestRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|icon.ico|sitemap.xml|robots.txt).*)',
};

