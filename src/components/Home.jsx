import React from 'react'
import Login from './Login'
import ProductCard from '../components/ProductCard'
import product from '../components/product.json'

function Home() {
  return (
   <>
    <div className="max-w-sm bg-gray-300 rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200" // replace with your own image if needed
        alt="Gaming Earbuds"
      />
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">March 1, 2023</p>
        <h2 className="text-lg font-semibold mb-2">
          Best Gaming Earbuds for Travel
        </h2>
        <p className="text-gray-700 text-sm mb-4">
          Discover the best gaming earbuds designed for travel. Compact, portable, and perfect for on-the-go gaming.
        </p>
        <button className="px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
          Read More
        </button>
      </div>
    </div>

<section>
    <h1 className="text-2xl font-bold mt-8">Welcome to Our Website</h1>
    <p className="mt-4 text-gray-700">
        This is the home page where you can find the latest updates and information.
    </p>
</section>
<Login />

    <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">           
            {product.map((item) => (
                <ProductCard  data={item} />
            ))}
        </div>
    </section>

   </>
  )
}

export default Home
