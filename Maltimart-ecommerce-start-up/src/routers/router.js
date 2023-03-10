import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import {Routes, Route, Navigate} from 'react-router-dom'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="home"/>} />
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default Router
