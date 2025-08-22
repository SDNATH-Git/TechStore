export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.",
    price: 299.99,
    image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Audio",
    featured: true
  },
  {
    id: "2", 
    name: "Smart Watch Series X",
    description: "Advanced fitness tracking, health monitoring, and smart notifications in a sleek design.",
    price: 399.99,
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Wearables",
    featured: true
  },
  {
    id: "3",
    name: "Laptop Stand Aluminum", 
    description: "Ergonomic aluminum laptop stand with adjustable height and cooling design.",
    price: 79.99,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories",
    featured: true
  },
  {
    id: "4",
    name: "Wireless Mouse",
    description: "Precision wireless mouse with ergonomic design and long-lasting battery.",
    price: 49.99,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Accessories"
  },
  {
    id: "5",
    name: "Gaming Keyboard",
    description: "Mechanical gaming keyboard with RGB backlighting and programmable keys.",
    price: 129.99,
    image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Gaming"
  },
  {
    id: "6",
    name: "4K Webcam",
    description: "Ultra HD webcam with auto-focus and built-in microphone for professional streaming.",
    price: 199.99,
    image: "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Camera"
  }
]

// Simple in-memory storage for new products (in production, use a database)
let newProducts: Product[] = []

export function addProduct(product: Omit<Product, 'id'>): Product {
  const newProduct: Product = {
    ...product,
    id: (Date.now()).toString(),
  }
  newProducts.push(newProduct)
  return newProduct
}

export function getAllProducts(): Product[] {
  return [...products, ...newProducts]
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find(product => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(product => product.featured)
}