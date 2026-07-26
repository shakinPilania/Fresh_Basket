import React from 'react'
import { useNavigate } from 'react-router-dom'

//!import the component
import InnerCore from './InnerCore'

function CoreValue() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center py-6 px-6 pb-16 mt-16 plusJakarta max-w-5xl mx-auto ' >
        <div className='flex flex-col justify-center items-center mb-10 '>
            <p className='text-[#00A63E] font-bold uppercase text-[12px] plusJakarta ' >What we stand for</p>
            <p className='playfair text-black font-bold text-[30px]  ' >Our Core Values</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 '>
            <InnerCore emoji={"🌱"} txt1={"Farm Fresh"} txt2={"Every vegetable is harvested within 24 hours of delivery, ensuring peak nutrition and flavour."} />
            <InnerCore emoji={"🤝"} txt1={"Farmer First"} txt2={"We partner directly with local farmers."}/>
            <InnerCore emoji={"♻️"} txt1={"Zero Waste"} txt2={"Our packaging is 100% compostable."} />
            <InnerCore emoji={"🔬"} txt1={"Quality Tested"} txt2={"Every batch is tested for pesticides and freshness."}/>
        </div>
        <button className=' text-white font-bold bg-green-600 hover:bg-green-700 rounded-xl shadow-md transition-all duration-300 px-8 py-3 mt-10 ' onClick={()=>{navigate("/shop")}}  >Start Shopping </button>
    </div>
  )
}

export default CoreValue