import React, { useContext } from 'react'
//! imort the emoji 
import { Minus , Plus , Trash2 } from 'lucide-react';

//! import the context 
import { CartContext } from '../Context/CartContext'
function OrderSummary() {
  const {totalCount , basketData , increment , decrement , removeFrmBasket} = useContext(CartContext);
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
                <div className='flex' >
                  <div>{product.emoji}</div>
                  <div className='flex'>
                    {/* about  */}
                    <div>
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                      <span>{product.price}</span>
                    </div>
                    {/* increment and decrement  */}
                    <div className='flex' >
                      <p onClick={()=>decrement(product)} ><Minus/></p>
                      <p>{product.countQty.count}</p>
                      <p onClick={()=>increment(product)} ><Plus/></p>
                    </div>
                    {/* total price  */}
                    <p>{(product.price * product.countQty.count).toFixed(2)}</p>
                    <button onClick={()=>removeFrmBasket(product)}><Trash2/></button>
                  </div>
                </div>
              ))
            }
          </div>
          {/* order summary  */}
          <div>WORKING</div>
        </div>
      </section>
    </div>
  )
}

export default OrderSummary