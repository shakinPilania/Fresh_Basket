import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//! imort the emoji 
import { Minus , Plus , Trash2 , ArrowLeft, Sun } from 'lucide-react';

//! importing the toast 
import {toast} from 'react-hot-toast';

//! import the context 
import { CartContext } from '../Context/CartContext'
function OrderSummary() {
  const [coupon , setCoupon ] = useState("");
  const {totalCount , basketData , increment , decrement , removeFrmBasket} = useContext(CartContext);
  const subTotal = basketData.reduce((sum , product)=>sum + product.price * product.countQty.count, 0);
  const delivery = (30>subTotal)?(30-subTotal):(0);
  const navigate = useNavigate();
  function checkingDelivery()
  {
    if(delivery==0)
      toast.success(" 🎉 ! You’re eligible for free delivery" , {icon:null})
  }
  function couponHandler()
  {
    if(coupon==="")
      toast.error(" Please enter a promo code")
    else 
      toast.error("⚠️ Coupon is currently unavailable ", {icon:null})
  }
  useEffect(()=>checkingDelivery(), [delivery])
  return (
    <div>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 '>
        {/* above the top heading  */}
        <div className='mb-8'>
          <p className='text-xs text-green-600 font-bold uppercase tracking-widest mb-1 plusJakarta'>Review your order</p>
          <h1 className='text-3xl font-bold playfair'>Your Basket<span className='ml-3 text-lg font-semibold text-[#78716C]'>({totalCount} items)</span></h1>
        </div>
        {/* about the Shop  */}
        <div className='grid lg:grid-cols-3 gap-8 items-start '>
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
          <div className=' flex flex-col bg-white rounded-2xl border border-[#1c1a161a] shadow-sm p-6 sticky top-24 '>
            <h4 className='font-bold text-lg mb-5 playfair'>Order Summary</h4>
            {/* item list  */}
            <div className='space-y-2 mb-4 plusJakarta'>
              {
                basketData.map((product)=>(
                  <div className='flex  text-sm justify-between items-center'>
                    <p className='text-[#78716C]'>{product.name} x {product.countQty.count}</p>
                    <p className='font-medium'>${(product.price * product.countQty.count).toFixed(2)}</p>
                  </div>
                ))
              }
            </div>
            {/* line  */}
            <div className='w-full h-[1px] bg-[#1c1a161a]  '></div>
            {/* regaring the delivery  */}
            <div className='flex flex-col space-y-3 mb-3'>
              {/* subTotal  */}
              <div className='pt-4 flex justify-between items-center text-sm  plusJakarta '>
                <span className='text-[#78716C]'>Subtotal</span>
                <span className='font-semibold'>${subTotal.toFixed(2)}</span>
              </div>
              {/* delivery  */}
              <div className='flex justify-between items-center text-sm plusJakarta'>
                <span className='text-[#78716C]'>Delivery</span>
                {
                  delivery===0 && 
                  <span className='text-green-600 font-semibold'>Free!</span>
                }
                {
                  delivery!==0 && 
                  <span className='font-semibold'>$4.99</span>
                }
              </div>
              {/* extra information  */}
              {
                delivery!==0 && 
                <div className='text-xs text-amber-600 flex justify-center  bg-amber-50 p-2 rounded-lg'>
                  <span>Add ${(delivery).toFixed(2)}  more for free delivery</span>
                </div>
              }
            </div>
            {/* line  */}
            <div className='w-full h-[1px] bg-[#1c1a161a]'></div>
            
            <div className='flex justify-between plusJakarta  items-center mb-6 pt-4 '>
              <p className=' text-lg font-bold '>Total</p>
              <span className=' font-bold text-green-700 text-2xl text-right'>${(delivery === 0 ? subTotal : subTotal + 4.99).toFixed(2)}</span>
            </div>
            <div className='flex justify-between items-center gap-2'>
              <input onChange={(event)=>setCoupon(event.target.value)} type='text' value={coupon}  className='flex-1 px-3 py-2 border border-[#1c1a161a] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ' placeholder='Promo code' />
              <button className='px-4 py-2 text-stone-700 bg-stone-100 text-sm font-semibold rounded-xl hover:bg-stone-200 transition-colors cursor-pointer' onClick={couponHandler} >Apply</button>
            </div>
            <button onClick={()=>toast.success("🚚 Order placed! It’s on the way soon", {icon:null})} className='w-full mt-4  bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md text-base'>Place Order: ${ (delivery==0)?((subTotal).toFixed(2)):((subTotal+4.99).toFixed(2)) } </button>
            <div className='flex items-center justify-center gap-4 mt-4  text-xs plusJakarta '>
              <p><span>🔒</span><span className='text-[#78716C]'>Secure checkout</span></p>
              <p><span>📦</span><span className='text-[#78716C]'>2–4h delivery</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderSummary