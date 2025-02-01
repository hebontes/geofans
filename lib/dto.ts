import 'server-only'
import { getUser } from '@/app/lib/dal'
import {prisma} from "@/lib/prisma";

function canSeeUsername(viewer: User) {
    return true
}

function canSeePhoneNumber(viewer: User, team: string) {
    return viewer.isAdmin || team === viewer.team
}

export async function getProfileDTO(username: string) {
    const user = await prisma.user.findFirst({where: {username}});
}