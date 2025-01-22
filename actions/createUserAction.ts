"use server"

import {prisma} from "@/lib/prisma";

const sleep = (milliseconds: number) =>{
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
export default async function createUserAction(prevState:{message:string},formData: FormData) {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;

    // do something with Prisma:
    // Prisma Create user
    // await prisma.user.create({ data: { name:username, username,email } });

    // Prisma get user
        await sleep(2000)
        const data = await prisma.user.findFirst({ where: { username } });
        console.log(data)
        if(!data) return {message: `User not found`}
        return {message: `Found User ${data.username}`}


}