"use server"

import {redirect} from "next/navigation";
import {createSession, deleteSession} from "@/lib/sessions";
import {prisma} from "@/lib/prisma";

export interface FormState {
    message: string;
}

export async function logout() {
    await deleteSession()
    redirect('/login')
}

export async function signup(state: FormState, formData: FormData) {
    // Previous steps:
    // 1. Validate form fields
    // 3. Insert the user into the database or call an Library API
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;

    // 2. Prepare data for insertion into database
    // 3. Insert the user into the database or call an Library API
    const data = await prisma.user.create({
        data: {
            email,
            username
        }
    })
    if (!data) return {message: `User not found`}

    // 4. Create user session
    await createSession(username)
    return {message: `Found User ${data.username}`}
    // 5. Redirect user
    redirect('/profile')
}

export interface FormState {
    message: string
}

const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}




export async function login(prevState: { message: string }, formData: FormData) {
    // Verify credentials && get the user
    // const email = formData.get("email") as string;
    const username = formData.get("username") as string;

    const data = await prisma.user.findFirst({where: {username}});
    if (!data) return {message: `User not found`}

    await createSession(username);

    return {message: `Found User ${data.username}`}
}