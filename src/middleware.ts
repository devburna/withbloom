import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { useAuthContext } from './context/auth/auth.context'

export function middleware(request: NextRequest) {
    // const { user }: any = useAuthContext();

    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     if (!user) {
    //         return NextResponse.redirect(new URL('/', request.url))
    //     }
    // }

    // if (request.nextUrl.pathname.endsWith('/')) {
    //     if (user) {
    //         return NextResponse.redirect(new URL('/dashboard', request.url))
    //     }
    // }
}

export const config = {
    matcher: ['/:path*', '/dashboard/:path*'],
}