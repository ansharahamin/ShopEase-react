import React from 'react'
import ProductCard from './ProductCard'

const Women = ({womenCollection}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
<h2 className='text-2xl font-bold text-emerald-900 mb-6'>Women's Collection</h2>
<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{womenCollection.map((product)=>{
  return <ProductCard key={product.id} {...product}/>
})}</div>
    </div>
  )
}

export default Women
