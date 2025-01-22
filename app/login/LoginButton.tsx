"use client"
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";


export default function LoginButton() {
    const { pending } = useFormStatus();

    return   <Button type="submit" className="w-full" disabled={pending}>
        Login
    </Button>
}