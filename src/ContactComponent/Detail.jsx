import React from 'react'

function Detail({icon:Icon,title , detail , schedule}) {
  return (
    <div className='border border-[#1c1a161a] rounded-2xl p-5 shadow-sm hover:scale-101 transition-all duration-300 cursor-pointer ' >
        <div className='flex flex-row gap-5 pr-38' >
            <div className='w-8 h-8 text-green-600 bg-green-50 rounded-xl flex items-center justify-center' ><Icon  /></div>
            <div className='flex flex-col ' >
                <span className='font-bold text-sm' >{title}</span>
                <span className='text-sm text-stone-700' >{detail}</span>
                <span className='text-xs text-stone-700'>{schedule}</span>
            </div>
        </div>
    </div>
  )
}

export default Detail