import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, User } from "lucide-react"

// Mock data for customers in Palakkad
const CUSTOMERS = [
    {
        id: 1,
        name: "Ramesh Kumar",
        location: "Palakkad",
        testimonial: "Excellent workmanship on the aluminium windows for my new house. Very professional team."
    },
    {
        id: 2,
        name: "Anitha Nair",
        location: "Chittur, Palakkad",
        testimonial: "They installed the kitchen cabinets and bedroom wardrobes. The finish is premium and modern."
    },
    {
        id: 3,
        name: "Mohammed Yusuf",
        location: "Mannarkkad, Palakkad",
        testimonial: "Start to finish process was smooth. The structural glazing for our commercial building looks fantastic."
    },
    {
        id: 4,
        name: "Suresh Menon",
        location: "Alathur, Palakkad",
        testimonial: "Highly recommend Home Doors for their quality and timely delivery. The sliding doors are very smooth."
    },
    {
        id: 5,
        name: "Priya",
        location: "Koduvayur, Palakkad",
        testimonial: "Beautiful design and sturdy build quality. The team was very polite and cleaned up after the work."
    },
    {
        id: 6,
        name: "Krishnan Kutty",
        location: "Palakkad",
        testimonial: "Best aluminium fabrication service in Palakkad. Reasonable pricing and great durability."
    },
    {
        id: 7,
        name: "Aisha Fathima",
        location: "Pudunagaram, Palakkad",
        testimonial: "We updated our shop front with their glass and aluminium work. It has completely transformed the look."
    },
    {
        id: 8,
        name: "David Thomas",
        location: "Vadakkencherry, Palakkad",
        testimonial: "Trustworthy service. They used high-grade materials as promised."
    },
    {
        id: 9,
        name: "Lakshmi Devi",
        location: "Coimbatore",
        testimonial: "Very happy with the balcony handrails. Safe and stylish."
    },
    {
        id: 10,
        name: "Unni Krishnan",
        location: "Kollengode, Palakkad",
        testimonial: "Good customer support and skilled workers. The partition work was done perfectly."
    }
]

export default function CustomersPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Happy Customers</h1>
            <p className="mt-4 text-muted-foreground mb-12 max-w-2xl">
                We take pride in our work and value the trust our clients place in us. Here are some of our satisfied customers from across Palakkad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CUSTOMERS.map((customer) => (
                    <Card key={customer.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <CardTitle className="text-lg">{customer.name}</CardTitle>
                                <CardDescription className="flex items-center text-xs">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {customer.location}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/80 italic">
                                "{customer.testimonial}"
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

