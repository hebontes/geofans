import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type {StoreMin} from "@/types/store"

interface StoreCardProps {
    store: StoreMin
}

export function StoreCard({ store }: StoreCardProps) {
    return (
        <Card className={`overflow-hidden ${store.isVip ? "border-2 border-yellow-400" : ""}`}>
            <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
                    {store.isVip && <Badge className="absolute top-2 right-2 bg-yellow-400 text-yellow-900">VIP</Badge>}
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="mb-2">{store.name}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">{store.description}</p>
                <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{store.rating.toFixed(1)}</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                    Visit Store
                </a>
            </CardFooter>
        </Card>
    )
}

