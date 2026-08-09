import React from 'react'
import { useState } from 'react'
//* emoji 
import {Star} from 'lucide-react'
//! import the component 
import Badge from './CardComponent/Badge';
import Liked from './CardComponent/Liked';

function Card({featured}) {
    
  return (
    <div >
        <div className='group flex flex-col'>
            {/* top image  */}
            <div className={` bg-gradient-to-br ${featured.bg} relative h-44 flex items-center justify-center `} >
                <div className='text-7xl group-hover:scale-110 select-none transition-all duration-300'>{featured.emoji}</div>
                <Badge featured={featured}/>
                <Liked />
            </div>
            {/* bottom part info   */}
            <div>
                <p>{featured.category}</p>
                <p>{featured.name}</p>
                <div className='flex '>
                    <div><Star/>
                    </div>
                    (<span>{featured.reviews}</span>)
                </div>
                <p>{featured.description}</p>
                <div className='flex '>
                    <p><span>${featured.price}</span>/Kg</p>
                    <div>
                        <button>Details </button>
                        <button>+ Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card