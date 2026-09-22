import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { name: "Men", path: "/products/men", image: "https://loremflickr.com/400/300/men,fashion" },
  { name: "Women", path: "/products/women", image: "https://loremflickr.com/400/300/women,fashion" },
  { name: "Kids", path: "/products/kids", image: "https://loremflickr.com/400/300/kids,fashion" },
]
const Categories = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Shop by Category</h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat)=>(
                <Link key={cat.name} to={cat.path} className='group relative h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
                    <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{cat.name}</span>
            </div>
                </Link>
            ))}
           </div>
          </div>
  )
}

export default Categories