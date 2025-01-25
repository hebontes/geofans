"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchForm() {
    const [search, setSearch] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Implement search functionality here
        console.log("Searching for:", search)
    }

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex gap-2">
                <Input
                    type="text"
                    placeholder="Search stores..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-grow"
                />
                <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                </Button>
            </div>
        </form>
    )
}

