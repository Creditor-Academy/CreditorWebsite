import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { canonicalBlogPath } from '@/lib/canonical-blog-path'

const APEX_ORIGIN = 'https://creditoracademy.com'

// Admin-only pages and APIs that read registrant / submission data.
// They were reachable by anyone; they now need HTTP Basic auth.
// Set ADMIN_BASIC_USER and ADMIN_BASIC_PASS in the server env.
// If either is missing, these paths fail closed (503).
const ADMIN_PAGE_PREFIXES = ['/webinar-registration', '/pma-submissions']
const ADMIN_API_PREFIXES = [
    '/api/webx/merged-report',
    '/api/webx/participants',
    '/api/pma/submissions',
    '/api/pma/file',
    '/api/admin',
    '/api/test-db',
    '/api/test-order',
]
// Public POST stays open (the webinar form saves here); GET lists every registrant.
const ADMIN_GET_ONLY_PREFIXES = ['/api/webx/recording-registrations']

function isAdminPath(pathname: string, method: string): boolean {
    const match = (p: string) => pathname === p || pathname.startsWith(p + '/')
    if (ADMIN_PAGE_PREFIXES.some(match) || ADMIN_API_PREFIXES.some(match)) return true
    if (method === 'GET' && ADMIN_GET_ONLY_PREFIXES.some(match)) return true
    return false
}

function safeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false
    let diff = 0
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
    return diff === 0
}

function checkAdminAuth(request: NextRequest): NextResponse | null {
    const user = process.env.ADMIN_BASIC_USER
    const pass = process.env.ADMIN_BASIC_PASS
    const noStore = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' }
    if (!user || !pass) {
        return new NextResponse('Admin access is not configured.', { status: 503, headers: noStore })
    }
    const header = request.headers.get('authorization') || ''
    if (header.startsWith('Basic ')) {
        try {
            const decoded = atob(header.slice(6).trim())
            const idx = decoded.indexOf(':')
            if (idx > -1 && safeEqual(decoded.slice(0, idx), user) && safeEqual(decoded.slice(idx + 1), pass)) {
                return null
            }
        } catch {
            // fall through to 401
        }
    }
    return new NextResponse('Authentication required.', {
        status: 401,
        headers: { ...noStore, 'WWW-Authenticate': 'Basic realm="Creditor Academy admin", charset="UTF-8"' },
    })
}

export async function middleware(request: NextRequest) {
    const url = request.nextUrl

    if (isAdminPath(url.pathname, request.method)) {
        const denied = checkAdminAuth(request)
        if (denied) return denied
        const res = NextResponse.next()
        res.headers.set('X-Robots-Tag', 'noindex, nofollow')
        res.headers.set('Cache-Control', 'no-store')
        return res
    }
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
        '/webinar-registration/:path*',
        '/pma-submissions/:path*',
        '/api/webx/merged-report/:path*',
        '/api/webx/participants/:path*',
        '/api/webx/recording-registrations/:path*',
        '/api/pma/submissions/:path*',
        '/api/pma/file/:path*',
        '/api/admin/:path*',
        '/api/test-db/:path*',
        '/api/test-order/:path*',
    ],
};
