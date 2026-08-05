// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// //! importing the icons
// import { ArrowRight, Leaf } from 'lucide-react'
// import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

// function Footer() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   return (
//     <div className='bg-stone-900 text-stone-300 mt-16'>
//       {/* top */}
//       <div className='flex flex-col md:flex-row justify-between lg:justify-around gap-10 px-6 sm:px-10 lg:px-16 py-14'>

//         {/* left */}
//         <div className="flex flex-col justify-evenly gap-4 plusJakarta">
//           <div className="flex flex-row gap-2 items-center">
//             <div className='mt-[1px] w-9 h-9 flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300 transition-transform cursor-default'>
//               <Leaf size={18} />
//             </div>

//             <p className="playfair font-bold text-lg text-white">
//               FreshBasket
//             </p>
//           </div>

//           <p className="text-sm plusJakarta leading-relaxed">
//             Farm-fresh vegetables delivered to your
//             <br />
//             door. Nutritious, sustainable, and always seasonal.
//           </p>

//           <div className="flex gap-3 text-white items-center">
//             <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300">
//               <FaInstagram className="w-full mx-auto" size={20} />
//             </button>

//             <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300">
//               <a href="https://github.com/shakinPilania">
//                 <FaGithub className="w-full mx-auto" size={20} />
//               </a>
//             </button>

//             <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300">
//               <FaFacebook className="w-full mx-auto" size={20} />
//             </button>
//           </div>
//         </div>

//         {/* left most */}
//         <div className="flex flex-col gap-2 cursor-default plusJakarta">
//           <h4 className="text-white font-bold mb-2">SHOP</h4>

//           <div className="space-y-2 text-base font-semibold">
//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/shop") }}
//             >
//               All Vegetable
//             </p>

//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/shop") }}
//             >
//               Leaf Green
//             </p>

//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/shop") }}
//             >
//               Root Vegetable
//             </p>

//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/shop") }}
//             >
//               Organic Range
//             </p>

//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/shop") }}
//             >
//               Weekly Bundles
//             </p>
//           </div>
//         </div>

//         {/* middle */}
//         <div className="flex flex-col gap-2 cursor-default plusJakarta">
//           <h4 className="text-white font-bold mb-2">COMPANY</h4>

//           <div className="space-y-2 text-base font-semibold">
//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/about") }}
//             >
//               About Us
//             </p>

//             <p
//               className="hover:text-green-400 transition-all duration-200"
//               onClick={() => { navigate("/contact") }}
//             >
//               Contact
//             </p>

//             <p className="hover:text-green-400 transition-all duration-200">
//               Careers
//             </p>

//             <p className="hover:text-green-400 transition-all duration-200">
//               Sustainability
//             </p>

//             <p className="hover:text-green-400 transition-all duration-200">
//               Press
//             </p>
//           </div>
//         </div>

//         {/* right */}
//         <div className='cursor-default flex flex-col plusJakarta'>
//           <h4 className="text-white font-bold mb-5">
//             STAY FRESH
//           </h4>

//           <p className='text-sm mb-3'>
//             Get weekly offers and seasonal picks in your inbox
//           </p>

//           <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 items-stretch sm:items-center'>
//             <input
//               type="email"
//               placeholder='your@email.com'
//               className='bg-stone-800 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:border focus:border-green-500'
//               value={email}
//               onChange={(event) => { setEmail(event.target.value) }}
//             />

//             <button
//               className='bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-lg transition-all duration-200 flex justify-center'
//               onClick={() => { console.log(email) }}
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* medium */}
//       <div className='h-[1px] bg-stone-800 w-[90%] mx-auto mt-[-20px] md:mt-[-40px]'></div>

//       {/* bottom */}
//       <div className='flex flex-col md:flex-row justify-between items-center gap-4 mt-6 py-6 px-6 sm:px-10 lg:px-16 text-center md:text-left'>

//         <div>
//           <span className='plusJakarta text-xs text-[#79716B]'>
//             © 2025 FreshBasket. All rights reserved.
//           </span>
//         </div>

//         <div className='flex flex-wrap justify-center md:justify-end gap-4 sm:gap-5 plusJakarta text-sm sm:text-base text-[#79716B] font-semibold cursor-default'>
//           <span className='hover:text-stone-300 transition-all duration-200'>
//             Privacy Policy
//           </span>

//           <span className='hover:text-stone-300 transition-all duration-200'>
//             Terms of Service
//           </span>

//           <span className='hover:text-stone-300 transition-all duration-200'>
//             Cookie Policy
//           </span>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

//! importing the icons 
import { ArrowRight,Leaf} from 'lucide-react'
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const [email , setEmail] =useState("");
  return (
    <div className=' bg-stone-900 text-stone-300 mt-16' >
      {/* top */}
      <div className='flex flex-col md:flex-row  justify-around mb-10 gap-10 px-6 md:px-10 lg:px-16 py-14 ' >
        {/* left */}
        <div className="flex flex-col justify-evenly gap-4 plusJakarta " >
          <div className="flex flex-row gap-2  items-center " >
            <div className=' mt-[1px] w-9 h-9 flex justify-center items-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-md group-hover:scale-110 transition-all duration-300 transition-transform cursor-default ' ><Leaf size={18} /></div>
            <p className="playfair font-bold text-lg text-white" >FreshBasket</p>
          </div>
          <p className="text-sm plusJakarta leading-relaxed " >
            Farm-fresh vegetables delivered to your 
            <br/> door. Nutritious, sustainable, and always seasonal.
          </p>
          <div className="flex flex-row gap-3 text-white items-center " >
            <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300" ><FaInstagram  className="w-full mx-auto " size={20} /></button>
            <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300"  ><a href="https://github.com/shakinPilania"><FaGithub className="w-full mx-auto "  size={20}/></a></button>
            <button className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-green-600 transition-all duration-300"  ><FaFacebook className="w-full mx-auto "  size={20}/></button>
          </div>
        </div>
        {/* left most  */}
        <div className="flex flex-col gap-2 cursor-default plusJakarta" >
          <h4 className="text-white font-bold mb-2 " >SHOP</h4>
          <div className="space-y-2 text-base font-semibold  ">
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/shop")}} >All Vegetable</p>
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/shop")}}>Leaf Green</p>
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/shop")}}>Root Vegetable</p>
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/shop")}}>Organic Range</p>
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/shop")}}>Weekly Bundles</p>
          </div>
        </div>
        {/* middle  */}
        <div className="flex flex-col gap-2 cursor-default plusJakarta">
          <h4 className="text-white font-bold mb-2 ">COMPANY</h4>
          <div className="space-y-2 text-base font-semibold  ">
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/about")}}>About Us </p>
            <p className="hover:text-green-400 transition-all duration-200" onClick={()=>{navigate("/contact")}}>Contact</p>
            <p className="hover:text-green-400 transition-all duration-200">Careers</p>
            <p className="hover:text-green-400 transition-all duration-200">Sustainability</p>
            <p className="hover:text-green-400 transition-all duration-200">Press</p>
          </div>
        </div>
        {/* right  */}
        <div className='cursor-default flex  flex-col plusJakarta ' >
          <h4 className="text-white font-bold mb-5 ">STAY FRESH </h4>
          <p className='text-sm mb-3'> Get weekly offers and seasonal picks in your inbox</p>
          <div className='flex flex-row items-center ' >
            <input type="email" placeholder='your@email.com' className='bg-stone-800 rounded-lg px-3 py-2  focus:outline-none focus:border focus:border-green-500' value={email} onChange={(event)=>{setEmail(event.target.value)}} />
            <button className='bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-lg transition-all duration-200' onClick={()=>{console.log(email)}}  ><ArrowRight/></button>
          </div>
        </div>
      </div>
      {/* medium */}
      <div className='h-[1px] bg-stone-800 w-[90%] mx-auto mt-[-40px] ' ></div>
      {/* bottom */}
      <div className='flex flex-row justify-between items-center mt-3 min-h-[100px]' >
        <div>
          <span className='px-17 mt-5 plusJakarta text-xs text-center md:text-left  text-[#79716B]' >© 2025 FreshBasket. All rights reserved.</span>
        </div>
        <div className='flex flex-row gap-5 px-17 plusJakarta text-base text-[#79716B] font-semibold cursor-default'>
          <span className='hover:text-stone-300 transition-all duration-200' >Privacy Policy</span>
          <span className='hover:text-stone-300 transition-all duration-200'>Terms of Service</span>
          <span className='hover:text-stone-300 transition-all duration-200'>Cookie Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer