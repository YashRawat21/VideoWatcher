import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import Avatar from 'react-avatar';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/menuSlice";
import { useEffect, useState } from "react";
import { setCategory } from "../utils/categorySlice";
import { SEARCH_SUGGESTIONS_API } from "../constants/youtube";



const Navbar = () => {
    const dispatch = useDispatch()
    const [input , setInput] = useState("")
    const inputHandler = () => {
     dispatch(setCategory(input))
     setInput("")
    }
    const toggleHandler = () => {
    dispatch(toggle())
   }


   const fetchVideoInput = async() => {
  try{
   const res = await fetch(SEARCH_SUGGESTIONS_API + input)
   const data = await res.json()
   dispatch( setCategory(data[1]))
   console.log(data)
  }catch(error){
    console.log(error)
  }
   }

   useEffect(() => {
    fetchVideoInput()
   },[])
    return (
        <div className="flex justify-between items-center px-5  sticky top-0 bg-white z-50 ">
        <div className="flex items-center">
            <GiHamburgerMenu onClick={() => toggleHandler()} className="cursor-pointer"/>
          <img  src = 'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' className=' w-[114px] cursor-pointer' alt='youtube logo' />
        </div>
        <div className="flex items-center "> 
            <div>
            <input  onChange={(e) => setInput(e.target.value)} className="w-[500px] rounded-l-full border border-gray-400 outline-none py-2 px-4" />
            </div>
            <button onClick={inputHandler}  className="py-2 px-4  border border-gray-400 bg-gray-300 rounded-r-full"><FaSearch size={"24px"} className="cursor-pointer" />
            </button>         
        </div>
        <div className="flex items-center gap-5 ">
         <IoIosNotificationsOutline  size={"20px"} className="cursor-pointer"/>
         <FaVideo size={"20px"} className="cursor-pointer"/>
         <Avatar githubHandle="sitebase" size={"20px"} round={true} className="cursor-pointer"/>

        </div>
        </div>
    )
}

export default Navbar;