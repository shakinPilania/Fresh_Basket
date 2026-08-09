import React from 'react'
//! import the camponent 
import Card from '../Component/Card'
import { ChevronRight } from 'lucide-react'

function FeatureHome({featureds}) {
  return (
    <div>
        <section className='max-w-7xl  lg:mx-auto py-6 pb-14 px-6'>
            {/* top writing ele  */}
            <div className='flex flex-col mb-6 '>
                <p className='text-green-600 text-xs font-bold uppercase tracking-widest mb-1  plusJakarta'>
                    Hand-picked for you
                </p>
                <div className='flex justify-between'>
                    <h3 className='text-2xl lg:text-3xl font-bold playfair text-black'>Featured Picks</h3>
                    <button className='flex items-center cursor-pointer gap-1  hover:gap-2 transition-all duration-300 text-sm text-green-600 font-semibold'>See all <ChevronRight/></button>
                </div>
            </div>
            {/* main card  */}
            <div className='flex flex-row gap-4 justify-evenly'>
                {
                    featureds.map((featured)=>
                    {
                        return <Card key={featured.id} featured={featured}/>
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default FeatureHome