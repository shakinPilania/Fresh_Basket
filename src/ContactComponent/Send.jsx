import React from 'react'
import { CheckCircle } from 'lucide-react'

function Send() {
  return (
    <div className='border  rounded-2xl border-[#1c1a161a] shadow-md w-full py-12 min-w-[600px] min-h-[320px] '>
        <div className='flex flex-col h-full w-full  justify-center items-center plusJakarta'>
            <div className='bg-green-100 w-18 h-18 rounded-full flex items-center justify-center mb-4'><CheckCircle className='text-green-600' size={40}/></div>
            <span className='font-bold text-xl mb-2' >Message sent!</span>
            <span className='text-sm text-stone-700'>Thanks for reaching out. We'll be in touch soon.</span>
        </div>
    </div>
  )
}

export default Send