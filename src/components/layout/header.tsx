import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="mr-8 flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/logo.png" alt="Home Doors Logo" className="h-10 w-auto object-contain" />
                    <span className="text-xl font-bold tracking-tight">Home Doors</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>

                    <Link href="/gallery" className="transition-colors hover:text-foreground/80 text-foreground/60">Gallery</Link>
                    <Link href="/customers" className="transition-colors hover:text-foreground/80 text-foreground/60">Customers</Link>
                    <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                    <Link href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/#contact">
                        <Button>Get a Quote</Button>
                    </Link>
                    <Button variant="ghost" className="md:hidden" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
