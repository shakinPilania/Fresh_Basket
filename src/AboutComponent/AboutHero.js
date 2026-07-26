import React from 'react'

function AboutHero() {
  return (
    <div className='w-full bg-gradient-to-br from-green-700 to-emerald-600 py-20 px-6 text-white flex flex-col justify-center items-center  ' >
        <p className=' text-[#B9F8CF] text-xs font-bold plusJakarta mb-3 uppercase '>Our Story </p>
        <p className='playfair text-4xl font-bold text-white mb-5 '>Growing with Purpose</p>
        <div className='flex flex-col justify-center items-center text-[#DCFCE7] text-sm plusJakarta '>
            <p>FreshBasket was born from a simple belief: everyone deserves access to</p>
            <p>genuinely fresh, nutritious vegetables — without the supermarket compromise.</p>
        </div>
    </div>
  )
}

export default AboutHero