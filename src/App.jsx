import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Man   from "./components/Man";
import Women from './components/Women'
import Kids from './components/Kids'
import AllProducts from './components/AllProducts'
import { FakeProducts } from './data/FakeProduct'
const menCollection = FakeProducts.filter(p=>p.category==='men')
const womenCollection = FakeProducts.filter(p=>p.category==='women')
const kidsCollection = FakeProducts.filter(p=>p.category==='kids')
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='products'element={<Products/>} >
        <Route index element={<AllProducts/>}/>
        <Route path='men' element={<Man menCollection={menCollection}/>}/>
        <Route path='women' element={<Women womenCollection={womenCollection}/>}/>
        <Route path='kids' element={<Kids kidsCollection={kidsCollection}/>}/>
        </Route>
      <Route path='product-details/:id'element={<ProductDetails/>} />
      <Route path='cart'element={<Cart/>} />
      <Route path='not-found'element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App
