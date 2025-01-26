import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Header(){
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
    ]

    return (
        <header className={"flex justify-end items-center py-4 px-8"} >
            {menu.map(({path, name}) => (
                <Button key={path} asChild>
                    <Link href={path}>{name}</Link>
                </Button>
            ))}
        </header>
    )
}