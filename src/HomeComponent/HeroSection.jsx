import React from 'react'
import { Navigate, useNavigate ,  } from 'react-router-dom'
//! importing the icon 
import { Leaf , ShoppingBag , ArrowRight , Truck , Shield , RotateCcw , CheckCircle } from 'lucide-react'

function HeroSection() {
    const navigate = useNavigate();
  return (
    <div>
        <section>
            <div
                className=" w-full min-h-[500px] bg-no-repeat bg-cover bg-center sm:h-[520px] relative "
                style={{backgroundImage:"url('https://images.unsplash.com/photo-1557844352-761f2565b576?w=1400&h=700&fit=crop&auto=format')"}}>
                {/* ! making the background image black  */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className='h-full justify-center flex flex-col  px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto'>
                    <div className='max-w-xl z-10 '>
                        <div className='flex w-fit items-center border border-green-400/30 gap-1.5 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 mb-4 rounded-full backdrop-blur-sm mb-4 ' >
                            <Leaf size={17} />
                            <p>100% Fresh & Organic</p>
                        </div>
                        <div>
                            <h1 className='text-4xl sm:text-5xl leading-tight text-white  font-bold mb-4 playfair'>
                                Farm-Fresh Veggies<br/>Delivered to Your Door
                            </h1>
                        </div>
                        <div>
                            <p className='text-base text-stone-300 sm:text-lg mb-8 leading-relaxed plusJakarta'>
                                Handpicked daily from local farms. No preservatives, no compromises — just nature's best on your plate .
                            </p>
                        </div>
                        <div  className='flex flex-col sm:flex-row  gap-3 items-center'>
                            <button onClick={()=>navigate("/shop")} className='flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-400/30 plusJakarta cursor-pointer '><ShoppingBag size={18} /> Shop Now </button>
                            <button onClick={()=>navigate("/about")} className='flex items-center justify-center gap-2 border border-white/30 text-white bg-white/10 hover:bg-white/20 transition-all duration-300 font-semibold px-6 py-3 rounded-xl backdrop-blur-sm cursor-pointer  '> Learn More <ArrowRight size={16} /> </button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full  justify-evenly  bg-green-700  text-white '>
                <div className='max-w-7xl mx-auto px-6 py-4 gap-2  grid grid-cols-2 sm:grid-cols-4 text-center text-sm font-medium  '>
                <span className='flex flex-row justify-center items-center gap-2 text-green-100'><Truck className='text-green-300' />Free delivery over $30</span>
                <span className='flex flex-row justify-center items-center gap-2 text-green-100'><Shield className='text-green-300'/>100% fresh guarantee</span>
                <span className='flex flex-row justify-center items-center gap-2 text-green-100'><RotateCcw className='text-green-300'/>Easy returns</span>
                <span className='flex flex-row justify-center items-center gap-2 text-green-100'><CheckCircle className='text-green-300'/>Certified organic</span>

                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection