export interface Store {
    id: number
    name: string
    description: string
    images: string[]
    cover_image?: string
    phoneNumber: string
    rating: number
    isVip: boolean
    specifications: {
        [key: string]: string
    }
    address: string
    openingHours: string
    website: string
}

export interface StoreMin {
    id: number
    name: string
    description: string
    image: string
    rating: number
    isVip: boolean
}

