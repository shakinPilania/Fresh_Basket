import React from 'react'
import { useNavigate } from 'react-router-dom'
function SearchEmpty({setSearchData}) {
    // const  navigate =useNavigate();
  return (
    
    <div>
        <div className='flex justify-center'>
            <div className='w-full h-full px-6 py-24 text-center'>
            <div className='text-8xl mb-6'>😥</div>
            <h2 className='text-2xl font-bold mb-3 playfair'>OOP'S NOTHING FOUND</h2>
            <p className=' text-[#78716C] text-base mb-8  plusJakarta '>We couldn't find what you're looking for. It may be available soon!</p>
            <button onClick={()=>setSearchData("")} className=' text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-md font-bold px-8 py-3 transition-colors cursor-pointer ' >Referesh</button>
        </div>
    </div>
    </div>
  )
}

export default SearchEmpty