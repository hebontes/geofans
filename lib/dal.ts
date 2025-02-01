import 'server-only'
import {cookies} from "next/headers";
import {decrypt} from "@/lib/sessions";
import {cache} from "react";
import {prisma} from "@/lib/prisma";
import {redirect} from "next/navigation";


export const verifySession = async () => {
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.username) {
        redirect('/login')
    }


    return {isAUth: true, username: session.username}
}

export const getUser = cache(async () => {
    const session = await verifySession()
    if (!session) return null

    try {
        const data = await prisma.user.findFirst({where: {username:session.username}});

        return data
    } catch (error:unknown) {
        console.log('Failed to fetch user')
        return null
    }
})
