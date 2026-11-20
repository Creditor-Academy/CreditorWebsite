import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { canonicalBlogPath } from '@/lib/canonical-blog-path'

const APEX_ORIGIN = 'https://creditoracademy.com'

export async function middleware(request: NextRequest) {
    const url = request.nextUrl
    const canonical = canonicalBlogPath(url.pathname)

    // Permanent, case-sensitive alias → /Blogs. Always an absolute https URL so
    // the Location stays on the public apex behind nginx (proxy may be http).
    if (canonical) {
        return NextResponse.redirect(new URL(canonical + url.search, APEX_ORIGIN), 301)
    }

    const token = await getToken({ req: request })

    if (token &&
        (
            url.pathname.startsWith('/signup') ||
            url.pathname.startsWith('/forgot-password') 
    )) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()  // Allow request to proceed
}

export const config = {
    matcher: [
        '/signup',
        '/forgot-password',
        '/',
        '/blog',
        '/blog/:path*',
        '/blogs',
        '/blogs/:path*',
    ],
};
