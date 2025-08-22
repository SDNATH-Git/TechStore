import Link from 'next/link'
import { ShoppingBag, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">TechStore</span>
            </div>
            <p className="text-muted-foreground">
              Your one-stop shop for the latest technology products and accessories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/login" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <div className="text-muted-foreground">Audio</div>
              <div className="text-muted-foreground">Wearables</div>
              <div className="text-muted-foreground">Accessories</div>
              <div className="text-muted-foreground">Gaming</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}