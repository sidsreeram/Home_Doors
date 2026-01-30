const galleryImages = [
    '/works/WhatsApp Image 2026-01-30 at 1.32.38 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.38 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.39 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.39 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.40 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.40 PM (2).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.40 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.41 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.41 PM (2).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.41 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.42 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.42 PM (2).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.42 PM (3).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.42 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.43 PM (1).jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.43 PM.jpeg',
    '/works/WhatsApp Image 2026-01-30 at 1.32.44 PM.jpeg',
]

export default function GalleryPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Our Work Gallery</h1>
            <p className="mt-4 text-muted-foreground mb-12 max-w-2xl">
                A showcase of our successfully completed projects featuring premium aluminium doors, windows, and structural designs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                    <div key={index} className="relative aspect-square group overflow-hidden rounded-lg bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium">View Project</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

