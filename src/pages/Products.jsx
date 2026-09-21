import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Products = () => {

  return (
    <div className="container">
            <div className="categories">
          <Link to='allproducts'>All Products</Link>
          <Link to='men'>Men</Link>
          <Link to='women'>Women</Link>
          <Link to='kids'>kids</Link>
      </div>
      <Outlet/>
   
    </div>
  )
}

export default Products