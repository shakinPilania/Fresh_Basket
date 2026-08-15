import React from 'react'
import { useNavigate } from 'react-router-dom'

function Empty() {
    const navigate=useNavigate();
  return (
    <div className='max-w-lg mx-auto px-6 py-24 text-center'>
        <div className='text-8xl mb-6'>🧺</div>
        <h2 className='text-2xl font-bold mb-3 playfair'>Your basket is empty</h2>
        <p className=' text-[#78716C] text-base mb-8  plusJakarta '>Looks like you haven't added any vegetables yet. Start shopping!</p>
        <button onClick={()=>navigate("/shop")} className=' text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-md font-bold px-8 py-3 transition-colors cursor-pointer ' >Browse Shop</button>
    </div>
  )
}

export default Empty