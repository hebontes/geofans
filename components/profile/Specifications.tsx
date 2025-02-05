import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const specs = [
    { label: "Age", value: "28" },
    { label: "Height", value: "5'10\"" },
    { label: "Weight", value: "160 lbs" },
    { label: "Occupation", value: "Software Engineer" },
    { label: "Location", value: "San Francisco, CA" },
]

export function Specifications() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
                <dl className="grid grid-cols-2 gap-4">
                    {specs.map((spec) => (
                        <div key={spec.label}>
                            <dt className="font-medium text-gray-500">{spec.label}</dt>
                            <dd className="mt-1 text-gray-900">{spec.value}</dd>
                        </div>
                    ))}
                </dl>
            </CardContent>
        </Card>
    )
}

