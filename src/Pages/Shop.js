import React from 'react'
import { products } from '../data'
import Card from '../Component/Card'
import Navbar from '../Component/Navbar'

function Shop() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        {/* regarding top heading  */}
        <section className='mb-8'>
          <p className='text-green-600 text-xs font-bold uppercase tracking-widest mb-1'>Everything fresh</p>
          <h1 className='text-3xl playfair font-bold text-[#1C1A16]  '>Our Vegetable Shop</h1>
          <p className='mt-2 text-[#78716C] plusJakarta'>Handpicked from local farms, delivered fresh daily.</p>
        </section>
        {/* regarding filter  */}
        <section className='mb-8'></section>
        {/* regarding all listed vegetable  */}
        <p className='text-sm mb-5 text-[#78716C] '>
          here result be come 
        </p>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {
              products.map((product)=>
              {
                return <Card key={product.id} featured={product} />
              })
          }
        </section>
        <Navbar/>
      </div>
    </div>
  )
}

export default Shop