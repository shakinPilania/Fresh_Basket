import React from 'react'
import { useState } from 'react'
//!import the component
import Detail from '../ContactComponent/Detail'
import Form from '../ContactComponent/Form'
import Footer from '../Component/Footer'
import Send from '../ContactComponent/Send'
//! import the icon 
import {Phone, Mail, MapPin} from 'lucide-react'

function Contact() {
  const [sent , setSent] =useState(false);
  return (
    
    <div className='flex flex-col  ' >
    {/* * top part  */}
      <div className='flex flex-col justify-center items-center  px-4 py-14 ' >
        <span className='text-green-600 font-bold text-xs mb-2 plusJakarta'>GET IN TOUCH</span>
        <h1 className='text-3xl font-bold playfair' >We'd Love to Hear from You</h1>
        <p className='mt-3 plusJakarta text-base text-[#78716C]' >Questions about an order? Want to partner with us? Drop us </p>
        <p className=' plusJakarta text-base text-[#78716C]'>message and we'll get back to you within 24 hours.</p>
      </div>
      <div>
        <div className='flex flex-col md:flex-row justify-center gap-8' >
          <div className='flex flex-col gap-4' >
            <Detail icon={Phone} title={"Phone"} detail={"+1 (555) 234-5678"} schedule={"Mon–Sat, 8am – 6pm"} />
            <Detail icon={Mail} title={"Email"} detail={"hello@freshbasket.co"} schedule={"We reply within 24h"}/>
            <Detail icon={MapPin} title={"Address"} detail={"14 Green Lane, Farmville"} schedule={"NY 10001 Bhiwani , Haryana"}/>
          </div>
          <div >
            {sent?(<Send/>):(<Form  setSent={setSent} />)}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact