import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Leaf ,Home,ShoppingBag, Info, MessageSquare ,ShoppingBasket } from 'lucide-react'

//! import the css file of navbar 
import "./Navbar.css"

function Navbar() {

    const navigate=useNavigate();
    function HomeBack()
    {
        navigate("/");
    }

  return (
    <div className=' sticky top-0 bg-white flex justify-center z-100  md:justify-evenly items-center h-16 shadow-md '>
        <div className='flex group gap-2 cursor-pointer' onClick={HomeBack}>
            <div className=' mt-[1px] w-9 h-9 flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300 transition-transform cursor-default '>
                <Leaf size={18} className='text-white' />
            </div>
            <div className='flex flex-col justify-center items-centre  ' >
                <span className=' playfair text-lg text-green-700 font-bold leading-tight font-family '>FreshBasket</span>
                <span className=' playfair text-[12px] text-[#78716C] font-medium text-center uppercase '>Farm to Table</span>
            </div>
        </div>
        <div className='flex gap-5'>
            <NavLink to={"/"} className={"text-stone-600 hover:bg-stone-50 hover:text-black hover:font-bold font-semibold rounded-lg"} >
                <div className='flex justify-center items-center gap-1.5 px-4 py-2  text-sm plusJakarta'>
                    <span  ><Home size={15}/></span>
                    <button className='cursor-pointer hidden md:block '>Home</button>
                </div>
            </NavLink>
            <NavLink to={"/shop"} className={"text-stone-600 hover:bg-stone-50 hover:text-black hover:font-bold font-semibold rounded-lg"} >
                <div className='flex justify-center items-center gap-1.5 px-4 py-2  text-sm plusJakarta cursor-pointer'>
                    <span><ShoppingBag size={15} /></span>
                    <button className='cursor-pointer hidden md:block'>Shop</button>
                </div>
            </NavLink>
            <NavLink to={"/about"} className={"text-stone-600 hover:bg-stone-50 hover:text-black hover:font-bold font-semibold rounded-lg"} >
                <div className='flex justify-center items-center gap-1.5 px-4 py-2  text-sm plusJakarta'>
                    <span><Info size={15} /></span>
                    <button className='cursor-pointer hidden md:block'>About</button>
                </div>
            </NavLink>
            <NavLink to={"/contact"} className={"text-stone-600 hover:bg-stone-50 hover:text-black hover:font-bold font-semibold rounded-lg"} >
                <div className='flex justify-center items-center gap-1.5 px-4 py-2  text-sm  plusJakarta  '>
                    <span><MessageSquare size={15} /></span>
                    <button className='cursor-pointer hidden md:block'>Contact</button>
                </div>
            </NavLink>
        </div>
        {/* basket part  */}
        <div>
            <NavLink to={"/basket"} >
                <div className='flex justify-center items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm text-white bg-green-600 hover:bg-green-700 plusJakarta text-sm transition-all duration-300  '>
                    <span><ShoppingBasket size={17}/></span>
                    <button className='cursor-pointer hidden md:block'>Basket</button>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar