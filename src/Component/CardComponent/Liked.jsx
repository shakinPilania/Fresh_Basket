import React from 'react'
import { useState } from 'react'
import { Heart } from 'lucide-react'
//* import the toast 
import toast from 'react-hot-toast';
function Liked() {
    const [liked , setLiked ] = useState(false );
    const [clicked , setClicked]= useState(true);
    function handler()
    {
      setLiked(!liked);
      setClicked(!clicked);
      {clicked?(toast.success("Added to wishlist")):(toast.error("Removed from wishlist"))}
    }
  return (
    <div>
        <button onClick={handler} className=' absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300 ' ><Heart size={18} className={liked?('fill-red-500 text-red-500'):('text-stone-400')} /></button>
    </div>
  )
}

export default Liked