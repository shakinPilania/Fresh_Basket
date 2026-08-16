import React from 'react'

function WishlistEmpty({setSelectedCategory}) {
  return (
    <div className='flex justify-center'>
        <div className='w-full h-full px-6 py-24 text-center'>
        <div className='text-8xl mb-6'>💖</div>
        <h2 className='text-2xl font-bold mb-3 playfair'>Your Wishlist is empty</h2>
        <p className=' text-[#78716C] text-base mb-8  plusJakarta '>Looks like you haven't added any vegetables yet. Start shopping!</p>
        <button onClick={()=>setSelectedCategory("All")} className=' text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-md font-bold px-8 py-3 transition-colors cursor-pointer ' >Continue Shopping</button>
    </div>
    </div>
  )
}

export default WishlistEmpty