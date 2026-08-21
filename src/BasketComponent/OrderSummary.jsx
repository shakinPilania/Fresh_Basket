import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
//! imort the emoji 
import { Minus , Plus , Trash2 , ArrowLeft } from 'lucide-react';

//! import the context 
import { CartContext } from '../Context/CartContext'
function OrderSummary() {
  const {totalCount , basketData , increment , decrement , removeFrmBasket} = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 '>
        {/* above the top heading  */}
        <div className='mb-8'>
          <p className='text-xs text-green-600 font-bold uppercase tracking-widest mb-1 plusJakarta'>Review your order</p>
          <h1 className='text-3xl font-bold playfair'>Your Basket<span className='ml-3 text-lg font-semibold text-[#78716C]'>({totalCount} items)</span></h1>
        </div>
        {/* about the Shop  */}
        <div className='grid lg:grid-cols-3 gap-8 '>
          {/* card */}
          <div className='lg:col-span-2 space-y-3'>
            {
              basketData.map((product)=>(
                <div className='flex items-center gap-4  bg-white rounded-2xl border border-[#1c1a161a] p-4 shadow-sm hover:shadow-md transition-shadow group ' >
                {/* emoji  */}
                  <div className={`bg-gradient-to-br ${product.bg} w-16 h-16 rounded-xl flex justify-center items-center  `} >
                    <span className='text-3xl group-hover:scale-110 transition-all duration-300'>{product.emoji}</span>
                  </div>
                  {/* about  */}
                  <div  className='flex-1 min-w-0 ' >
                      <h4 className='font-bold text-sm' >{product.name}</h4>
                      <p className='text-xs text-[#78716C] '>{product.category} per {product.unit}</p>
                      <span className='text-green-700 font-bold text-sm mt-1 '>${product.price}</span>
                  </div>
                  {/* increment and decrement  */}
                  <div className='flex gap-4 items-center '>
                    
                      <button onClick={()=>decrement(product)} className=' w-8 h-8 rounded-lg border border-[#1c1a161a] bg-[#f0fdf4] flex justify-center items-center hover:bg-stone-200 transition-colors  ' ><Minus size={13} /></button>
                      <p className='w-8 text-center font-bold text-sm'>{product.countQty.count}</p>
                      <button onClick={()=>increment(product)} className=' w-8 h-8 rounded-lg border border-[#1c1a161a] bg-[#f0fdf4] flex justify-center items-center hover:bg-stone-200 transition-colors  ' ><Plus size={13} /></button>
                  </div>
                  {/* total price  */}
                  <p className='font-bold hidden sm:block'>${(product.price * product.countQty.count).toFixed(2)}</p>
                  <button onClick={()=>removeFrmBasket(product)} className='w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors' ><Trash2 size={15} /></button>
                  
                </div>
              ))
            }
            <button onClick={()=>navigate("/shop")} className='flex items-center cursor-pointer gap-2  hover:gap-3 transition-all duration-300 text-sm text-green-600 font-semibold' > <ArrowLeft className='mt-[2px]'  size={16} /> <span>Continue shopping</span> </button>
          </div>
          
          {/* order summary  */}
          <div>WORKING</div>
        </div>
      </section>
    </div>
  )
}

export default OrderSummary