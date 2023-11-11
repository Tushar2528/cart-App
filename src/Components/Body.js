import React, { useEffect } from 'react'
import MainContainer from './MainContainer'
import SideContainer from './SideContainer'
import { useDispatch } from 'react-redux';
import { populateItems } from '../utils/fetchSlice';


const Body = () => {

    const dispatch = useDispatch();

    //using async function to fetch the data as its is an asynchrounous operation
    const fetchItems = async () => {
        const data = await fetch("https://dummyjson.com/products ");
        const json = await data.json();
        console.log(json);
        dispatch(populateItems(json.products));

    }
    //using useEffect hook to fetch data from the API, using empty dependency array so that the fetch is performed only once.
    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


  return (
    <div className='flex m-10 w-[100%]'>
        <MainContainer/>
        <SideContainer/>
    </div>
  )
}

export default Body