'use client';

import Image from 'next/image'
import { CartModal } from "@/components/ui/cart-modal"
import { useCart } from "@/providers/CartProvider"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: 'Camera DSLR Profissional',
    price: 2499.99,
    image: '/products/pexels-alessandro-oliverio-611273-1472443.jpg',
  },
  {
    id: 2,
    name: 'Microscópio Digital',
    price: 1899.99,
    image: '/products/pexels-atomlaborblog-844923.jpg',
  },
  {
    id: 3,
    name: 'Câmera Vintage',
    price: 999.99,
    image: '/products/pexels-fotios-photos-3806168.jpg',
  },
  {
    id: 4,
    name: 'Kit Fotografia',
    price: 799.99,
    image: '/products/pexels-kindelmedia-8566464.jpg',
  },
  {
    id: 5,
    name: 'Câmera Compacta',
    price: 599.99,
    image: '/products/pexels-pixabay-163073.jpg',
  },
  {
    id: 6,
    name: 'Câmera Profissional',
    price: 3299.99,
    image: '/products/pexels-stasknop-1298601.jpg',
  },
]

export default function ProductsPage() {
  const { addItem, setIsOpen, items } = useCart()
  
  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id.toString(), // Convertendo para string
      name: product.name,
      price: product.price,
      imageUrl: product.image
    })
    setIsOpen(true)
  }

  const getProductQuantity = (productId: number) => {
    const item = items.find(item => item.id === productId.toString()) // Convertendo para string
    return item?.quantity || 0
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
        {products.map((product) => (
          <div key={product.id} className="relative group flex flex-col h-full">
            <div className="bg-muted aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex flex-col flex-1">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {formatCurrency(product.price)}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="flex-1"
                >
                  Adicionar ao Carrinho
                </Button>
                {getProductQuantity(product.id) > 0 && (
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                    {getProductQuantity(product.id)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartModal />
    </div>
  )
}