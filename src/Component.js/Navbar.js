import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Leaf ,Home,ShoppingBag, Info, MessageSquare ,ShoppingBasket } from 'lucide-react'
//! import the page for linking 
// import Home from '../Pages/Home'
// import Shop from '../Pages/Shop'
// import About from '../Pages/About'
// import Contact from '../Pages/Contact'
// import Basket from '../Pages/Basket'

function Navbar() {

    const navigate=useNavigate();
    function HomeBack()
    {
        navigate("/");
    }

  return (
    <div className='flex justify-evenly items-center h-16 shadow-md '>
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
            <Link to={"/"} ><button className='flex'><span><Home/></span>Home</button></Link>
            <Link to={"/shop"} ><button className='flex'><span><ShoppingBag/></span>Shop</button></Link>
            <Link to={"/about"} ><button className='flex'><span><Info/></span>About</button></Link>
            <Link to={"/contact"} ><button className='flex'><span><MessageSquare/></span>Contact</button></Link>
        </div>
        <div>
            <Link to={"/basket"} ><button className='flex'><span><ShoppingBasket/></span>Basket</button></Link>
        </div>
    </div>
  )
}

export default Navbar