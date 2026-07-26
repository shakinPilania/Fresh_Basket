import React from 'react'

function Feature({txt1,txt2}) {
  return (
    <div className='flex flex-col justify-center items-center border border-[#1c1a161a]  rounded-2xl shadow-md px-15 py-6 ' >
        <p className='text-[#008236] text-3xl font-bold playfair mb-1 ' >{txt1}</p>
        <p className='text-[#78716C] text-sm plusJakarta ' >{txt2}</p>
    </div>
  )
}

export default Feature