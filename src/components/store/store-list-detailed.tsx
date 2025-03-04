import type { Store } from "@/types/store"
import {StoreCardDetailed} from "@/components/store/store-card-detailed";

const stores: Store[] = [
    {
        id: 1,
        name: "Tech Haven",
        description:
            "Your one-stop shop for all things tech. We offer the latest gadgets, expert advice, and top-notch customer service.",
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        phoneNumber: "+1 (555) 123-4567",
        rating: 4.5,
        isVip: true,
        specifications: {
            Founded: "2010",
            Locations: "5",
            Employees: "50+",
            Brands: "Apple, Samsung, Sony, and more",
        },
        address: "123 Tech Street, Silicon Valley, CA 94000",
        openingHours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
        website: "https://techhaven.example.com",
    },
    {
        id: 2,
        name: "Fashion Forward",
        description:
            "Trendy clothes for the modern fashionista. Discover the latest styles and express your unique personality through fashion.",
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
        ],
        phoneNumber: "+1 (555) 987-6543",
        rating: 4.2,
        isVip: false,
        specifications: {
            Founded: "2015",
            Locations: "3",
            Employees: "30+",
            Style: "Contemporary, Casual, Formal",
        },
        address: "456 Fashion Avenue, New York, NY 10001",
        openingHours: "Mon-Sun: 10AM-8PM",
        website: "https://fashionforward.example.com",
    },
]

export function StoresListDetailed() {
    const vipStores = stores.filter((store) => store.isVip)
    const basicStores = stores.filter((store) => !store.isVip)

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">VIP Stores</h2>
            <div className="grid grid-cols-1 gap-6 mb-8">
                {vipStores.map((store) => (
                    <StoreCardDetailed key={store.id} store={store} />
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Basic Stores</h2>
            <div className="grid grid-cols-1 gap-6">
                {basicStores.map((store) => (
                    <StoreCardDetailed key={store.id} store={store} />
                ))}
            </div>
        </div>
    )
}

