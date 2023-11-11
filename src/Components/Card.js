import React from 'react';
import {useDispatch} from "react-redux";
import { addTocart } from '../utils/cartSlice';
import { toast } from 'react-toastify';

const Card = ({info}) => {

  const dispatch = useDispatch();


  //using useDistch hook to dispatch the add to cart action to the reducer along with the item card data as payload
  const handleAddTocart = () => {
    dispatch(addTocart(info));
    toast.success(info.title + " added to cart !");
  }

  //early return with the card data is undefined
  if(!info) return null;
  


  return (
    <div className='m-2 p-2 h-64 w-72 border rounded-lg shadow-xl text-xs'>
        <img className='mb-4 rounded-lg h-40' alt="thumbnail" src={info.images[0]}></img>
        <div className='bg-slate-400 p-2 text-white rounded-lg flex justify-between'>
            <div>
                <h1>{info.title}</h1>
                <span><del>${info.price}</del> <b>${Math.round(info.price-((info.price * info.discountPercentage)/100))}</b></span>
            </div>
            <div>
                <button 
                onClick={handleAddTocart}
                className='bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white'
                >
                  Add to Cart
                </button>
            </div>
        </div>
        

    </div>
  )
}

export default Card