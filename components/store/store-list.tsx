import type { StoreMin } from "@/types/store"
import {StoreCard} from "@/components/store/store-card";

const stores: StoreMin[] = [
    {
        id: 1,
        name: "Tech Haven",
        description: "Your one-stop shop for all things tech",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.5,
        isVip: true,
    },
    {
        id: 2,
        name: "Fashion Forward",
        description: "Trendy clothes for the modern fashionista",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.2,
        isVip: false,
    },
    {
        id: 3,
        name: "Gourmet Delights",
        description: "Exquisite foods from around the world",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.8,
        isVip: true,
    },
    {
        id: 4,
        name: "Bookworm's Paradise",
        description: "A haven for book lovers",
        image: "/placeholder.svg?height=200&width=300",
        rating: 4.0,
        isVip: false,
    },
]

export function StoreList() {
    const vipStores = stores.filter((store) => store.isVip)
    const basicStores = stores.filter((store) => !store.isVip)

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">VIP Stores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {vipStores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Basic Stores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {basicStores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                ))}
            </div>
        </div>
    )
}

