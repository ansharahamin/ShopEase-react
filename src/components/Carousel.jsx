import React from 'react'
import { useState } from "react";
import { slides } from "../data/Slides";
const Carousel = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='h-80 relative overflow-hidden mx-auto max-w-7xl rounded-2xl'>
      <img className='w-full h-full object-cover rounded-t-full' src={slides[1].image} alt="img" />
      <p className='absolute bg-black/40 transition-opacity duration-500'></p>
    </div>
  )
}

export default Carousel