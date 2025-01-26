"use server"

import {prisma} from "@/lib/prisma";
import {cookies} from "next/headers";
import {encrypt, expires} from "@/lib/auh";

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
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
    // cookies().set('session', session, {expires, httpOnly: true})
    return {message: `Found User ${data.username}`}
}

export async function login(prevState: { message: string }, formData: FormData){
    // Verify credentials && get the user
    // const email = formData.get("email") as string;
    const username = formData.get("username") as string;

    const data = await prisma.user.findFirst({where: {username}});
    if (!data) return {message: `User not found`}

    // Create the session
    const session = await encrypt({data, expires})

    // Save the session in cookie
    const cookieStore = await cookies()
    cookieStore.set('session', session, {expires, httpOnly: true})
    return {message: `Found User ${data.username}`}
}