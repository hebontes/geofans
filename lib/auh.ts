import {jwtVerify, SignJWT} from "jose";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const secretKey = process.env.SESSION_SECRET || ''
const key = new TextEncoder().encode(secretKey)

export const expires = new Date(Date.now() + 10 * 1000)

export async function encrypt(payload: {data:Record<string, unknown>; expires:Date}) {
    return await new SignJWT(payload.data)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime(payload.expires)
        .sign(key)
}

export async function decrypt(input:string) {
    const {payload} = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    })

    return payload
}

export async function getSession(){
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    if(!session) return null;

    return await decrypt(session)
}
export async function updateSession(request:NextRequest) {
    const session = request.cookies.get('session')?.value
    if (!session) return

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.exp = Math.floor(expires.getTime() / 1000);

    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: expires
    });

    return res;
}