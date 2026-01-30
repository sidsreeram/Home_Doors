import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Static mock data since backend/DB is removed
const PRODUCTS = [
    {
        id: '1',
        name: 'Sliding Aluminium Window',
        description: 'Premium sliding windows with smooth operation and excellent thermal insulation. Perfect for modern homes looking for space efficiency and style.',
        category: 'Windows',
        images: '/images/window.jpg',
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Bi-Fold Door System',
        description: 'Elegant bi-fold doors that seamlessly connect your indoor and outdoor spaces. Robust aluminium construction ensures durability and security.',
        category: 'Doors',
        images: '/images/door.jpg',
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        name: 'Structural Glazing Facade',
        description: 'High-performance curtain wall systems for commercial buildings. maximizing natural light while maintaining energy efficiency.',
        category: 'Facades',
        images: '/images/facade.jpg',
        createdAt: new Date().toISOString()
    },
    {
        id: '4',
        name: 'Glass Guard Railing',
        description: 'Modern glass railings with aluminium fittings for balconies and staircases. Safety meets transparency.',
        category: 'Railings',
        images: '/images/railing.png',
        createdAt: new Date().toISOString()
    },
    {
        id: '5',
        name: 'Casement Window',
        description: 'Traditional style casement windows with modern aluminium engineering. Superior ventilation and weatherproofing.',
        category: 'Windows',
        images: '/images/casementwindow.jpeg', // Reusing placeholder
        createdAt: new Date().toISOString()
    },
    {
        id: '6',
        name: 'Wardrobes',
        description: 'Custom designed wardrobes with modern aluminium fittings. Perfect for storing your belongings.',
        category: 'Doors',
        images: '/images/wardobe.jpeg', // Reusing placeholder
        createdAt: new Date().toISOString()
    }
]

export default function ProductsPage() {
    const products = PRODUCTS

    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Our Products</h1>
            <p className="mt-4 text-muted-foreground mb-12 max-w-2xl">
                Discover our high-quality aluminium doors, windows, and facades designed for durability and elegance.
                Browse our catalog below.
            </p>

            {products.length === 0 ? (
                <div className="text-center py-20 bg-muted/30 rounded-lg">
                    <h2 className="text-xl font-semibold">No products found</h2>
                    <p className="text-muted-foreground mt-2">Check back later for our latest collections.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                            <div className="h-64 bg-muted relative w-full">
                                {/* Placeholder for image, or use existing if available */}
                                {product.images ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={product.images.split(',')[0]}
                                        alt={product.name}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                                )}
                                <Badge className="absolute top-2 right-2">{product.category}</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {product.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/contact?product=${product.id}`} className="w-full">
                                    <Button className="w-full">Enquire Now</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
