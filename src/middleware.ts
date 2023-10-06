import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import authServices from './services/auth/auth.services'

export function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     if (!authServices.firebase.user()) {
    //         return NextResponse.redirect(new URL('/', request.url))
    //     }
    // }

    // if (request.nextUrl.pathname.endsWith('/')) {
    //     if (authServices.firebase.user()) {
    //         return NextResponse.redirect(new URL('/dashboard', request.url))
    //     }
    // }
}

export const config = {
    matcher: ['/:path*', '/dashboard/:path*'],
}