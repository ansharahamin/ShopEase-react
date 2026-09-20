import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='h-[70-vh] text-white flex flex-col items-center justify-center text-center gap-4 px-4 bg-linear-to-br from-emerald-900 via-emerald-700 to-teal-600 mt-2 p-5'>
        <h1 className='text-4xl md:text-6xl font-bold'>Shop Smart, Live Better</h1>
        <p className='text-lg max-w-xl'>Best deals on electronics, fashion and home essentials</p>
        <button type="button" className='bg-white text-emerald-800 px-6 py-3 rounded-full font-semibold hover:bg-emerald-100 transition-colors'><Link to='/products'>Shop Now</Link></button>
    </div>
  )
}

export default Hero