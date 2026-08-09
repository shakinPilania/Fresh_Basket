import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
//! import the component 
import CardCategory from './CardCategory';

function Category({catIcons}) {
    const navigate = useNavigate();
  return (
    <div>
        <section className='max-w-7xl lg:mx-auto py-14 px-6'>
            {/* top - heading  */}
            <div className='flex flex-col mb-6 '>
                <p className='text-green-600 text-xs font-bold uppercase tracking-widest mb-1   plusJakarta'>browse by type</p>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl lg:text-3xl font-bold playfair text-black' >Shop by Category</h2>
                    <button onClick={()=>navigate("/shop")} className='flex items-center cursor-pointer gap-1  hover:gap-2 transition-all duration-300 text-sm text-green-600 font-semibold' >View all <ChevronRight size={16} /> </button>
                </div>
            </div>
            {/* we create an card using the map function  */}
            <div className='grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3'>
                {
                    catIcons.map((catIcon)=>
                    {
                        return <CardCategory key={catIcon.id} catIcon={catIcon} />
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default Category