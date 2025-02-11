import Image from 'next/image'

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
  return (
    <div className="container py-16 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Our Products</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <div className="bg-muted w-[300px] h-[300px] aspect-square rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}