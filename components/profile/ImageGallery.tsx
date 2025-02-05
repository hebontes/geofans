import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
    "https://fakeimg.pl/350x200/?text=World&font=lobste",
    "https://fakeimg.pl/300/",
    "https://fakeimg.pl/250x100/",
    "https://fakeimg.pl/250x100/ff0000/",
    "https://fakeimg.pl/350x200/ff0000/000",
    "https://fakeimg.pl/350x200/ff0000,128/000,255",
    "https://fakeimg.pl/350x200/?text=Hello",
    "https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto",
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
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </CardContent>
        </Card>
    )
}

