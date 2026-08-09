import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardCategory({catIcon}) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center  gap-2 p-3 border border-[#1c1a161a] rounded-2xl shadow-sm hover:border-green-300 hover:shadow-md transition-all group duration-200 cursor-pointer' onClick={()=>navigate("/shop")} >
       <span className='text-3xl group-hover:scale-110 transition-transform '>{catIcon.emoji}</span>
        <p className='text-sm font-semibold text-stone-600 leading-tight plusJakarta text-center'>{catIcon.category}</p> 
    </div>
    
  )
}

export default CardCategory