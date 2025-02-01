import {Button} from "@/components/ui/button";
import Link from "next/link";
import {logout} from "@/actions/auth";

export default function Header() {
    const menu = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/dashboard",
            name: "Dashboard",
        },
        {
            path: "/dashboard/detailed",
            name: "Dashboard Detailed",
        },
        {
            path: "/admin",
            name: "Admin",
        },
        {
            path: "/login",
            name: "login",
        },
        {
            path: "/signup",
            name: "register",
        },
        {
            path: "/pokemon",
            name: "pokemon",
        },
        {
            name: "logout",
            action: logout,
        },
    ]

    return (
        <header className={"flex justify-end items-center py-4 px-8"}>
            {menu.map(({path, action, name}) => (
             <Button key={path || name} asChild>
                 {path ? (
                     <Link href={path}>{name}</Link>

                 ):
                    <form action={action}>
                        <button type={"submit"}>{name}</button>
                    </form>
                 }
                </Button>

            ))}
        </header>
    )
}