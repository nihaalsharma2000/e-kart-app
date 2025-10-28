"use client"
import React from 'react'
import Header from '../components/Header/Header'
import { Provider } from 'react-redux'
import store from '../store/store'
import { useRouter } from 'next/navigation'
import { HomeOutlined } from '@mui/icons-material'
import "./Cart.css"
function Cart() {
  const Router = useRouter()
  return (
    <Provider store={store}>
      <Header/>
      <div className='cart-page '>
          <div className='cart-bar container'>
            <h1 className='cart-text'>Cart</h1>
            <button className='homeBtn' onClick={()=>{Router.push('/')}}>
              <HomeOutlined/>
            </button>
          </div>
      </div>
    </Provider>
  )
}

export default Cart