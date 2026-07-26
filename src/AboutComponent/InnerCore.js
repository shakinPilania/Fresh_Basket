//! it is used for the core value inner boxes 
import React from 'react'

function InnerCore({emoji , txt1 , txt2}) {
  return (
    <div className='flex  gap-4 border border-[#1c1a161a] rounded-2xl p-6 shadow-md hover:scale-101 transition-all duration-300 hover:z-[10px] ' >
        <div className='text-[30px]' >
            {emoji}
        </div>
        <div className='px-2' >
            <p className='plusJakarta font-bold text-[18px] text-black mb-2 ' >{txt1}</p>
            <p className='plusJakarta text-[14px] text-[#78716C] leading-relaxed ' >{txt2}</p>
        </div>
    </div>
  )
}

export default InnerCore