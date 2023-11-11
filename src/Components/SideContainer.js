import React from 'react'
import Cart from './Cart'
import Total from './Total'

const SideContainer = () => {
  return (
    <div className='w-[35%] p-2'>
      <Cart/>
      <Total/>
    </div>
  )
}

export default SideContainer