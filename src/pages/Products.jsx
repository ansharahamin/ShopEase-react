import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
const linkClass = ({isActive})=>  `px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
    isActive
      ? "bg-emerald-600 text-white border-emerald-600"
      : "border-emerald-300 text-emerald-800 hover:bg-emerald-50"
  }`;
const Products = () => {

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
            <div className="categories flex flex-wrap gap-3 mb-6">
          <NavLink className={linkClass} to='/products'>All Products</NavLink>
          <NavLink className={linkClass} to='men'>Men</NavLink>
          <NavLink className={linkClass} to='women'>Women</NavLink>
          <NavLink className={linkClass} to='kids'>kids</NavLink>
      </div>
      <Outlet/>
   
    </div>
  )
}

export default Products