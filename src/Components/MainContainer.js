import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';

const MainContainer = () => {

  //fetching the items from the fetch slice and looping over them to display on the UI
  const items = useSelector((store) => store.fetch.items);
  return (
    <div className='flex flex-wrap w-[60%]'>
      {items.map((item) => <Card key={item.id} info={item}/>)}
        
        
    </div>
  )
}

export default MainContainer