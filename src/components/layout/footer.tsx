import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold tracking-tight">Home Doors</Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Premium aluminium doors and windows for modern homes and offices. Quality, durability, and style in every detail.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Products</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/products?cat=windows" className="transition-colors hover:text-foreground">Windows</Link></li>
                            <li><Link href="/products?cat=doors" className="transition-colors hover:text-foreground">Doors</Link></li>
                            <li><Link href="/products?cat=facades" className="transition-colors hover:text-foreground">Facades</Link></li>
                            <li><Link href="/products?cat=railings" className="transition-colors hover:text-foreground">Railings</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/#about" className="transition-colors hover:text-foreground">About Us</Link></li>
                            <li><Link href="/#careers" className="transition-colors hover:text-foreground">Careers</Link></li>
                            <li><Link href="/#contact" className="transition-colors hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Home Doors. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
