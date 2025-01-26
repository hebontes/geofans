import 'server-only'
import {JWTPayload, jwtVerify, SignJWT} from "jose";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const secretKey = process.env.SESSION_SECRET || ''
const key = new TextEncoder().encode(secretKey)

export const expires_time = 1000 * 60 * 30 // millisecond * second * minute

interface Payload extends JWTPayload {
    expires: string | number | Date; // Adjust this type based on your expiration format
}

export async function createSession(userId: string) {
    // Create the session
    const expires = new Date(Date.now() + expires_time)
    const session = await encrypt({userId, expires})

    // Save the session in cookie
    const cookieStore = await cookies()
    cookieStore.set('session', session, {expires, httpOnly: true})
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

export async function encrypt(payload: Payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime(payload.expires)
        .sign(key)
}

export async function decrypt(session: string) {

    try {
        const {payload} = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        })

        return payload
    } catch (e: unknown) {
        console.log("Failed to verify session", e);
    }
}

export async function getSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    if (!session) return {data: null};

    return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value
    if (!session) return

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    const expires = new Date(Date.now() + expires_time)
    const newSession: Payload = {...parsed, expires}

    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(newSession),
        httpOnly: true,
        expires: expires
    });

    return res;
}