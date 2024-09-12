import { NextRequest, NextResponse } from 'next/server';
import { guestRoutes, ownerRoutes, publicRoutes, sharedRoutes } from './routes';

import { parseJwt } from './app/_utils/auth';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const user = parseJwt(token);
  let pathname = request.nextUrl.pathname;

  pathname = normalizePath(pathname);

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (user?.role === 'admin' && sharedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (
    user?.role === 'owner' &&
    (sharedRoutes.includes(pathname) || ownerRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  if (
    !user &&
    (sharedRoutes.includes(pathname) || ownerRoutes.includes(pathname))
  ) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url),
    );
  }

  if (!user && guestRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

function normalizePath(pathname: string): string {
  return pathname.replace(/\/\d+/, '/:id');
}

export const config = {
  matcher:
    '/((?!api|fonts|images|_next/static|_next/image|favicon.ico|icon.ico|sitemap.xml|robots.txt).*)',
};

