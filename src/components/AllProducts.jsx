import React from 'react'
import { FakeProducts } from '../data/FakeProduct'
import ProductCard from './ProductCard'
const AllProducts = () => {
  return (
    <div>
       <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{    FakeProducts.map((product)=>{
        return    <ProductCard key={product.id} {...product} />
    })}
    </div>
    </div>
  )
}

export default AllProducts
