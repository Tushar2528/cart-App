import React from 'react'
import "../App.css";
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = () => {

  //fetching the cart items from the store -> cart slice and looping over them display on the UI
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className='container mb-4 p-2 w-[100%] h-64 border overflow-scroll'>
      <div className='pb-2 mb-2 flex justify-between border-b'>
            <h1>Item</h1>
            <h1>Qty</h1>
            <h1>Price</h1>
      </div>
      {cartItems.map((item) => <CartItem info ={item}/>)}
        
    </div>
  )
}

export default Cart