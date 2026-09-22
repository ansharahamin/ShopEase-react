import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-3">ShopEase</h3>
          <p className="text-sm text-emerald-300">
            Best deals on electronics, fashion and home essentials.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products/men" className="hover:text-white transition-colors">Men</Link></li>
            <li><Link to="/products/women" className="hover:text-white transition-colors">Women</Link></li>
            <li><Link to="/products/kids" className="hover:text-white transition-colors">Kids</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-emerald-300">
            <li>Karachi, Pakistan</li>
            <li>support@shopease.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-emerald-800 py-4 text-center text-sm text-emerald-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer