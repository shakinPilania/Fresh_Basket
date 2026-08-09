import React from 'react'
import { useState } from 'react'
import { Heart } from 'lucide-react'
function Liked() {
    const [liked , setLiked ] = useState(false );
  return (
    <div>
        <button onClick={()=>{setLiked(!liked)}} className=' absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300 ' ><Heart size={18} className={liked?('fill-red-500 text-red-500'):('text-stone-400')} /></button>
    </div>
  )
}

export default Liked