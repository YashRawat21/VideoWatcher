import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/categorySlice';



const List = ["All" , "Gaming" , "Songs" , "Live", "Fitness" , "Music" , "News", "Cricket" , "Podcast" , "Football"];


const ButtonList = () => {
  const [isActive , setIsActve] = useState("All")
   const dispatch = useDispatch()
  const btnHandler = (genre) => {
    dispatch(setCategory(genre))
    setIsActve(genre)
 }
  return (
    <div>
      { 
        List.map((genre) => {
            return (
           <button onClick={() => btnHandler(genre)} className={`${isActive === genre ? "bg-black text-white" : "bg-gray-200" } px-5 py-2 m-2  rounded-lg  font-semibold`}>{genre}</button>
            )
        } )
      }
    </div>
  )
}

export default ButtonList