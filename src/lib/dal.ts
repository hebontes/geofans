import 'server-only'
import {cookies} from "next/headers";
import {decrypt} from "@/lib/sessions";
import {cache} from "react";
import {prisma} from "@/lib/prisma";


export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    if (!session) {
        return {isAuth: false, username: null}
    }

    return {isAuth: true, username: session.username}
})

export const getUser = cache(async () => {
    const session = await verifySession()
    if (!session.username) return null

    try {
        const data = await prisma.user.findFirst({
            where: {username: session.username},
            select: {
                username:true,
                email:true
            }
        });

        return data
    } catch (error: unknown) {
        console.log('Failed to fetch user')
        return null
    }
})
