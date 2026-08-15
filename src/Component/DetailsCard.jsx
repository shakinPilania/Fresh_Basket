import React from 'react'
import { ShoppingBasket } from 'lucide-react'
//* emoji 
import {Star,X} from 'lucide-react'
//! import the component 
import Badge from './CardComponent/Badge'
import Liked from './CardComponent/Liked'

function DetailsCard({ featured, setOpen }) {
  return (
    <div onClick={()=>setOpen(false)} className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 '>
        <div className='flex flex-col rounded-2xl overflow-hidden max-w-[520px]' >
            <div className={` bg-gradient-to-br ${featured.bg} relative h-44 flex items-center justify-center  `} >
                <div className='text-7xl group-hover:scale-110 select-none transition-all duration-300'>{featured.emoji}</div>
                <Badge featured={featured}/>
                <div className='absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex justify-center items-center  '>
                <X onClick={()=>setOpen(false)} size={16} />
                </div>
            </div>
            <div className='p-6 flex flex-col gap-2 bg-white '>
                <p className='text-xs font-medium tracking-wider text-[#78716C] plusJakarta uppercase '>{featured.category}</p>
                <h3 className='font-bold text-2xl playfair mb-2 text-foreground mt-1 '>{featured.name}</h3>
                <div className='flex items-center gap-1'>
                    <div className='flex flex-row items-center'>
                        <div><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                        <div><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                        <div><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                        <div><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                        <div><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                    </div>
                    <span className='text-sm text-[#78716C]  plusJakarta' >{featured.rating} · {featured.reviews} reviews</span>
                </div>
                <p className='plusJakarta text-[#78716C] text-sm leading-relaxed mb-6 ' >{featured.description}</p>
                <div className='flex flex-row items-center justify-between'>
                    <p className='text- text-[#78716C] ml-1 '><span className='text-3xl font-bold text-green-700 ml-0' >${featured.price}</span>/Kg</p>
                    <button className='flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl shadow-md'><ShoppingBasket size={17}/><span>Add to basket</span></button>
                </div>

                </div>
        </div>
    </div>
  )
}

export default DetailsCard