import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/firebase/firebase.lib';

export function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     if (auth.currentUser) {
    //         return NextResponse.redirect(new URL('/', request.url))
    //     }
    // }

    // if (request.nextUrl.pathname.endsWith('/')) {
    //     if (!auth.currentUser) {
    //         return NextResponse.redirect(new URL('/dashboard', request.url))
    //     }
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ['/:path*', '/dashboard/:path*'],
}