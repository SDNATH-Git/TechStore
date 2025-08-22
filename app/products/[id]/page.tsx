import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProductById, getAllProducts } from '@/lib/data'
import { ArrowLeft, Star, Shield, Truck, RotateCcw } from 'lucide-react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/products">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.featured && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              {product.category}
            </Badge>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">(125 reviews)</span>
            </div>
            <div className="text-4xl font-bold text-primary">
              ${product.price}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            <Button size="lg" className="w-full">
              Add to Cart - ${product.price}
            </Button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Warranty</div>
                  <div className="text-sm text-muted-foreground">2 Year</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Shipping</div>
                  <div className="text-sm text-muted-foreground">Free</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Returns</div>
                  <div className="text-sm text-muted-foreground">30 Days</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Related Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getAllProducts()
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-1">{relatedProduct.name}</h3>
                    <p className="text-primary font-bold">${relatedProduct.price}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}