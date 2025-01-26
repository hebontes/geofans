import {JWTPayload, jwtVerify, SignJWT} from "jose";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const secretKey = process.env.SESSION_SECRET || ''
const key = new TextEncoder().encode(secretKey)

export const expires_time = 10 * 1000

interface Payload extends JWTPayload {
    expires: string | number | Date; // Adjust this type based on your expiration format
}

export async function encrypt(payload: Payload) {
    return await new SignJWT(payload)
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
    if(!session) return {data:null};

    return await decrypt(session)
}
export async function updateSession(request:NextRequest) {
    const session = request.cookies.get('session')?.value
    if (!session) return

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    const expires = new Date(Date.now() + expires_time)
    parsed.expires = expires

    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed as Payload),
        httpOnly: true,
        expires: expires
    });

    return res;
}