import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
//* emoji 
import {Star} from 'lucide-react'

//* import the context 
import {CartContext} from "../Context/CartContext"

//! import the component 
import Badge from './CardComponent/Badge';
import Liked from './CardComponent/Liked';
import DetailsCard from './DetailsCard';
import StarCom from './CardComponent/StarCom';


function Card({featured,category}) {

    const [open , setOpen]=useState(false);
    const {addToBasket , basketData} = useContext(CartContext);
    function orderTo()
    {
        addToBasket(featured);
        console.log(basketData);
    }
    return (
    <div >
        <div  className='group flex flex-col bg-white rounded-2xl border border-[#1c1a161a] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300  '>
            {/* top image  */}
            <div className={` bg-gradient-to-br ${featured.bg} relative h-44 flex items-center justify-center `} >
                <div className='text-7xl group-hover:scale-110 select-none transition-all duration-300'>{featured.emoji}</div>
                <Badge featured={featured}/>
                <Liked featured={featured}   />
                
            </div>
            {/* bottom part info   */}
            <div className='p-4 flex flex-col gap-2 '>
                <p className='text-xs font-medium tracking-wider text-[#78716C] plusJakarta uppercase playfair '>{featured.category}</p>
                <h3 className='font-bold text-base leading-tight text-foreground mt-1 '>{featured.name}</h3>
                <div className='flex items-center'>
                    <StarCom num={featured.reviews} />
                    <span className='text-xs text-[#78716C] plusJakarta' >({featured.reviews})</span>
                </div>
                <p className='plusJakarta text-[#78716C] text-xs leading-relaxed ' >{featured.description}</p>
                <div className='flex items-center justify-between pt-2 '>
                    <p className='text-xs text-[#78716C] ml-1 '><span className='text-xl font-bold text-green-700 ml-0' >${featured.price}</span>/Kg</p>
                    <div className='flex gap-2' >
                        <button onClick={()=>{setOpen(!open)}} className='px-3 py-1.5 text-xs font-semibold text-green-700 border border-green-200 rounded-lg hover:bg-green-50 transition-colors cursor-pointer'>Details </button>
                        <button onClick={orderTo} className='flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 shadow-sm transition-colors cursor-pointer' ><span>+</span>Add</button>
                    </div>
                </div>
            </div>
        </div>
        {
            open && <DetailsCard featured={featured} setOpen={setOpen} />
        }
    </div>
  )
}

export default Card