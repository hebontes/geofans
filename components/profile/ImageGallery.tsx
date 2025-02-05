import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
]

export function ImageGallery() {
    return (
        <Card>
            <CardContent className="p-6">
                <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Image
                                        src={src || "/placeholder.svg"}
                                        alt={`Gallery image ${index + 1}`}
                                        width={600}
                                        height={400}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    )
}

