import React from 'react'

const ProductCard = (props) => {
  return (
        <div className='bg-emerald-50 text-emerald-900 border-2 border-emerald-300 p-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col gap-2'>
            <img src={props.thumbnail} alt="img" className='h-48 object-cover rounded-xl' />
        <p className='text-emerald-700 text-sm border-b border-emerald-200 p-2 rounded'>{props.id}</p>
      <h3 className='font-bold text-lg'>{props.title}</h3>
      <p className='text-emerald-950'>{props.category}</p>
      <p className='text-emerald-950 font-bold'>PKR: {props.price}</p>
      <div className="btns flex justify-between mt-3 border-t border-emerald-200 pt-2">
        <button className='bg-emerald-900 text-emerald-100 px-4 py-2 rounded-4xl hover:bg-emerald-700 transition-colors' type="button" >Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
        <button className='bg-emerald-600 text-emerald-100 px-4 py-2 rounded-4xl hover:bg-emerald-700 transition-colors' type='button' >Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  )
}

export default ProductCard