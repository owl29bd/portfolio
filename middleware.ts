/**
 * Middleware allows you to run code before a request is completed. 
 * Then, based on the incoming request, redirect to a different URL using NextResponse.redirect. 
 * This is useful if you want to redirect users based on a condition 
 * (e.g. 
 *      - authentication, 
 *      - session management, 
 * etc) 
 * or have a large number of redirects.
 */

import { NextResponse, NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';
// import { authenticate } from 'auth-provider';
 
export function middleware(request: NextRequest) {
//   const isAuthenticated = authenticate(request);
  const isAuthenticated = true;
 
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/login', request.url));
}
 
export const config = {
  matcher: '/dashboard/:path*',
};

type RedirectEntry = {
    destination: string
    permanent: boolean
  }

  /**
   * Creating and storing a redirect map
   * @param request 
   * @returns 
   */
export async function middleware_scalable(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const redirectData = await get(pathname)

    if (redirectData && typeof redirectData === 'string') {
        const redirectEntry: RedirectEntry = JSON.parse(redirectData)
        const statusCode = redirectEntry.permanent ? 308 : 307
        return NextResponse.redirect(redirectEntry.destination, statusCode)
    }

    // No redirect found, continue without redirecting
    return NextResponse.next()
}
