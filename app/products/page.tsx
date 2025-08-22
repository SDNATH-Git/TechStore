import { ProductCard } from '@/components/product-card'
import { getAllProducts } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of premium technology products, carefully selected for quality and innovation.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found.</p>
          </div>
        )}
      </div>
    </div>
  )
}