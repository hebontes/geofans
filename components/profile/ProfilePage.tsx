import { ImageGallery } from "./ImageGallery"
import { Specifications } from "./Specifications"
import { ContactActions } from "./ContactActions"

export function ProfilePage() {
    return (
        <div className="space-y-8">
            <ImageGallery />
            <div className="grid gap-8 md:grid-cols-2">
                <Specifications />
                <ContactActions />
            </div>
        </div>
    )
}

