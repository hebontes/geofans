import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send } from "lucide-react"

export function ContactActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </Button>
                <Button className="w-full" variant="outline">
                    <Send className="mr-2 h-4 w-4" /> Telegram
                </Button>
            </CardContent>
        </Card>
    )
}

