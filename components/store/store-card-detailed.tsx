import Image from "next/image"
import { Star, Phone, MapPin, Clock, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { Store } from "@/types/store"
import React from "react";

interface StoreCardProps {
    store: Store
}

export function StoreCardDetailed({ store }: StoreCardProps) {
    return (
        <Card className={`overflow-hidden ${store.isVip ? "border-2 border-yellow-400" : ""}`}>
            <CardHeader className="p-0">
                <Carousel className="w-full">
                    <CarouselContent>
                        {store.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={image || "/placeholder.svg"}
                                        alt={`${store.name} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                {store.isVip && <Badge className="absolute top-2 right-2 bg-yellow-400 text-yellow-900">VIP</Badge>}
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="mb-2 flex items-center justify-between">
                    {store.name}
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{store.rating.toFixed(1)}</span>
                    </div>
                </CardTitle>
                <p className="text-sm text-gray-600 mb-4">{store.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{store.phoneNumber}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{store.address}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm">{store.openingHours}</span>
                    </div>
                    <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-gray-500" />
                        <a
                            href={store.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            {store.website}
                        </a>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {Object.entries(store.specifications).map(([key, value]) => (
                            <React.Fragment key={key}>
                                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                <dd className="text-sm text-gray-900">{value}</dd>
                            </React.Fragment>
                        ))}
                    </dl>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline">Contact Store</Button>
                <Button>Visit Store</Button>
            </CardFooter>
        </Card>
    )
}

