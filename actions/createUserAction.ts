"use server"

import {prisma} from "@/lib/prisma";
import {cookies} from "next/headers";
import {SignJWT} from "jose";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const secretKey = 'secret'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(key)

}

export default async function createUserAction(prevState: { message: string }, formData: FormData) {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;

    // Prisma get user
    await sleep(2000)
    const data = await prisma.user.findFirst({where: {username}});
    if (!data) return {message: `User not found`}

    const expires = new Date(Date.now() + 10 * 1000)
    const session = await encrypt({data, expires})
    cookies().set('session', session, {expires, httpOnly: true})
    return {message: `Found User ${data.username}`}
}