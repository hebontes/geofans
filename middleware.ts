import {NextRequest, NextResponse} from "next/server";
import {decrypt, updateSession} from "@/lib/sessions";
// 1. Specify protected and public routes
const protectedRoutes = ['/admin']
const publicRoutes = ['/login', '/signup']

export async function middleware(req: NextRequest){
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)


    // 3. Decrypt the session from the cookie
    const cookie = req.cookies.get('session')?.value
    const session = await decrypt(cookie)

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /admin if the user is authenticated
    if (
        isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith('/admin')
    ) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    // return NextResponse.next()

    return await updateSession(req)
}


// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}