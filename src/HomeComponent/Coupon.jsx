import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Coupon() {
  const navigate = useNavigate();
  return (
    <div>
        <section className='max-w-7xl mx-6 lg:mx-auto rounded-3xl  mt-14  mb-14 rounded-3xl relative bg-gradient-to-br from-green-600 to-emerald-700'>
            <div className=' absolute leading-none select-none w-72 h-72 right-0 top-0 opacity-10 text-[200px]' >🌿</div>
            <div className='z-10 relative p-10 sm:p-14 max-w-lg flex flex-col justify-start '>
              <p className='text-xs text-green-200 font-bold mb-2 plusJakarta tracking-widest uppercase'>Limited time offer</p>
              <h4 className='text-3xl font-bold text-white mb-3 playfair' >Get 20% off your first order</h4>
              <p className='text-green-100 mb-6 leading-relaxed plusJakarta'>Use code <span className='font-bold text-white bg-white/20 px-2 py-0.5 rounded' >FRESH20</span> at checkout and taste the difference.</p>

              <button onClick={()=>navigate("/shop")} className=' bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-100 transition-all duration-300 shadow-md cursor-pointer ' >Claim Offer</button>

            </div>
        </section>
    </div>
  )
}

export default Coupon