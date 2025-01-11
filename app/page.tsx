import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to shadzIT, your one-stop shop for all things tech. Discover our wide range of laptops, smartphones, and accessories.',
}

export default function Home() {
  return (
    <div className="space-y-16 animate-fade-in">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-4 animate-fade-up">Welcome to shadzIT</h1>
        <p className="text-xl mb-8 animate-fade-up animation-delay-200">Your one-stop shop for all things tech!</p>
        <Link href="/products">
          <Button size="lg" variant="secondary" className="animate-fade-up animation-delay-300">Shop Now</Button>
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            // { name: 'Latest Laptop', image: '/placeholder.svg?height=200&width=200' },
            // { name: 'Smartphone', image: '/placeholder.svg?height=200&width=200' },
            // { name: 'Wireless Earbuds', image: '/placeholder.svg?height=200&width=200' },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <Link href="/products">
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose shadzIT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Wide Selection', description: 'Choose from our vast array of tech products.' },
            { title: 'Competitive Prices', description: 'Get the best deals on the latest technology.' },
            { title: 'Expert Support', description: '24/7 customer service to assist you.' },
          ].map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
        <p className="text-xl mb-8">Explore our latest products and find the perfect device for you.</p>
        <Link href="/products">
          <Button size="lg" variant="secondary">Browse Products</Button>
        </Link>
      </section>
    </div>
  )
}

