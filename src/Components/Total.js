import React from 'react';
import {useSelector} from "react-redux";

const Total = () => {


    //destructuring the state items from cart slice 
    const {totalPrice, totalItems, totalDiscount, orderTotal} = useSelector((store) => store.cart);


  return (
    <div className='h-56 p-2  w-[70%] border '>
        <h1 className='font-bold p-2'>Total</h1>
        <div className='grid grid-flow-col'>
            <div className='col-span-4'>
                <p className='my-4'>Items({totalItems})</p>
                <p className='my-4'>Discount</p>
                <p>Order Total</p>
            </div>
            <div className='col-span-4'>
                <p className='my-4'>:</p>
                <p className='my-4'>:</p>
                <p>:</p>
                
            </div>
            <div className='col-span-4'>
                <p className='my-4'>${totalPrice}</p>
                <p className='my-4'>${totalDiscount}</p>
                <p className='bg-slate-400 px-4 py-2 -ml-20 text-center text-white rounded-md'><b>${orderTotal}</b></p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Total