import React from 'react';
import {useDispatch} from "react-redux";
import { decrementCount, incrementCount } from '../utils/cartSlice';
import { toast } from 'react-toastify';

const CartItem = ({info}) => {

    const dispatch = useDispatch()


    //dispatching the action to increment count of an item inside the cart
    const handleIncrement = () => {
        dispatch(incrementCount(info));
        toast.success(info.title + " added to cart !");
    }

    //dispatching the action to decrement count of an item inside the cart
    const handleDecrement = () => {
        dispatch(decrementCount(info));
        toast.error(info.title + " removed from cart !");
    }


  return (
    <div>
        
        <div className='flex justify-between text-xs'>
            <div className='p-2 h-18 w-40 border flex justify-between'>
                <img alt="product" className='h-10 w-12' src={info.thumbnail}></img>
                <p className='mt-2'>{info.title}</p>
                
            </div>
            <div className='flex -ml-[25%]'>
                <p onClick={handleIncrement} className='mt-4 px-1 cursor-pointer'>+</p>
                <p className='h-18 w-14 border text-center pt-4'>{info.count}</p>
                <p onClick={handleDecrement} className='mt-4 px-1 cursor-pointer'>-</p>
            </div>
            <p><b>${info.price}</b></p>
        </div>
    </div>
  )
}

export default CartItem