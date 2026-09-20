import React from 'react'
import { FakeProducts } from '../data/FakeProduct'
import ProductCard from '../components/ProductCard'

const Products = () => {

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{    FakeProducts.map((product)=>{
        return    <ProductCard key={product.id} {...product} />
    })}
    </div>
  )
}

export default Products