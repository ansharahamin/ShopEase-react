import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div><Hero />
      <Categories/>
      <Footer/></div>
  )
}

export default Home