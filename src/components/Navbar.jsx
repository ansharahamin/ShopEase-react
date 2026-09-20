import React from 'react'
import { Link, NavLink } from "react-router-dom";
const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-white ${
    isActive ? "text-emarald-500" : "text-emerald-50"
  }`;

const Navbar = () => {
  return (
  <header className='sticky top-0 z-50 bg-emerald-700/60 backdrop-blur-md border-b border-white/30 shadow-lg text-white p-2'>
    <nav className='flex justify-between align-center'>
    <Link to='/' className='font-bold text-3xl'>ShopEase</Link>
    <div className="flex max-w-7xl justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8 text-emerald-50">
        <NavLink to='/' className={linkClass}>Home</NavLink>
        <NavLink to='/products' className={linkClass}>Products</NavLink>
        <NavLink to='/cart' className={linkClass}>Cart</NavLink>
    </div>
    </nav>
    </header>

  )
}

export default Navbar