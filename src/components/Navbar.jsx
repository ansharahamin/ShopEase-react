import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react"
import { useState } from 'react';
const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-white ${
    isActive ? "text-emarald-500" : "text-emerald-50"
  }`;

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className='bg-emerald-50 text-emarald-800 border-b border-emerald-100 flex justify-between items-center p-3 gap-3 border-2 rounded shadow-lg shadow-gray-100'>

            <h1 className='text-xl font-bold'>Shop Ease</h1>

            <ul className='flex space-x-4 hidden md:flex'>
                <li><Link to="/" className='hover:text-emerald-600 cursor-pointer transition-colors'>Home</Link></li>
                <li><Link to="/Products" className='hover:text-emerald-600 cursor-pointer transition-colors'>Products</Link></li>
                <li><Link to="/Cart" className='hover:text-emerald-600 cursor-pointer transition-colors'>Cart</Link></li>
            </ul>
            <div className="search-wrapper relative hidden md:flex">
                <input type="text" placeholder='Search... ' className='border border-emerald-200 rounded-2xl px-2 py-1 outline-emerald-200 focus:ring-2 focus:ring-emerald-500  pr-8' />
                <i className="fa-solid fa-magnifying-glass absolute right-2.5 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="circle w-10 h-10 bg-emerald-300 rounded-full border border-emerald-400 text-center flex justify-center items-center hidden md:flex">N</div>
            <i className="fa-solid fa-bars md:hidden!" onClick={() => { setIsOpen(!isOpen) }}></i>

        </nav>
             {  isOpen &&    ( <ul className='flex flex-col md:hidden justify-center
             items-center gap-3 bg-linear-30 text-emerald-900 border-2 border-emerald-900 p-3 mt-1 rounded-2xl shadow-lg bg-emerald-50'>
                <li><Link to="/" className='hover:text-emerald-600 cursor-pointer transition-colors'>Home</Link></li>
                <li><Link to="/Products" className='hover:text-emerald-600 cursor-pointer transition-colors'>Products</Link></li>
                <li><Link to="/cart" className='hover:text-emerald-600 cursor-pointer transition-colors'>Cart</Link></li>
                 <div className="search-wrapper relative">
                <input type="text" placeholder='Search... ' className='border border-emerald-300 rounded-2xl px-2 py-1 outline-emerald-200 focus:ring-2 focus:ring-emerald-500  pr-8 mt-0.5' />
                <i class="fa-solid fa-magnifying-glass absolute right-2.5 top-1/2 transform -translate-y-1/2"></i>
            </div>
                <div className="circle w-10 h-10 bg-emerald-300 rounded-full border border-emerald-400 text-center flex justify-center items-center">N</div>
            </ul>)}
            </>
    )
}
export default Navbar