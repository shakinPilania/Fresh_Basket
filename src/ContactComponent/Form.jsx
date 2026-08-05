import React from 'react'
import { useState } from 'react';

function Form({setSent}) 
{
    const[data,setData] = useState({name:"",email:"",subject:"",message:""})

    function submitHandler(event)
    {
        event.preventDefault();
        setSent(true);
        console.log({data});
    }
    function changeHandler(event)
    {
        setData((prevState)=>{
            return {
                ...prevState,
                [event.target.name]:event.target.value,
            };
        })
    }
  return (
    <div className='border  rounded-2xl border-[#1c1a161a] shadow-md w-full mr-1 ml-1 ' >
        <div className='p-6 '>
           <form className='space-y-4 w-full mx-auto' onSubmit={submitHandler}>
                {/* basic thing */}
                <div className='flex flex-col md:flex-row gap-3 w-full '>
                    <div className='flex-1'>
                        <label className='text-xs font-semibold text-stone-600 plusJakarta' htmlFor='name'>Your name </label>
                        <br/>
                        <input className='text-sm mt-2 outline-none border border-[#1c1a161a] rounded-2xl px-4 py-3 focus:border-green-400 focus:border-3 md:pr-17 plusJakarta w-full' type="text" id="name" placeholder='Sahil Pilania ' required name='name' value={data.name} onChange={changeHandler} />
                    </div>
                    <div className='flex-1'>
                        <label className='text-xs font-semibold text-stone-600 plusJakarta' htmlFor='email'>Email address</label>
                        <br/>
                        <input className='text-sm  mt-2 outline-none border border-[#1c1a161a] rounded-2xl px-4 py-3 focus:border-green-400 focus:border-3  plusJakarta md:pr-17 w-full  '  required type="email" id="email" placeholder='sahilPilania@gmail.com' name='email' value={data.email} onChange={changeHandler}  />
                    </div>
                </div>
                {/* problem */}
                <div>
                    <label className='text-xs font-semibold text-stone-600 plusJakarta' htmlFor='subject'>Subject</label>
                    <br/>
                    <input className='mt-2 text-sm  outline-none border border-[#1c1a161a] rounded-2xl px-4 py-3 focus:border-green-400 focus:border-3 w-full plusJakarta ' type="text" id="subject" placeholder='Order enquiry,feedback....' name='subject'  required value={data.subject} onChange={changeHandler}  />
                </div>
                {/* textarea  */}
                <div>
                    <label className='text-xs font-semibold text-stone-600 plusJakarta' htmlFor='area'>Message</label>
                    <br/>
                    <textarea  className='mt-2 text-sm  outline-none border border-[#1c1a161a] rounded-2xl px-4 py-3 focus:border-green-400 focus:border-3 w-full plusJakarta resize-none min-h-32' placeholder='Tell how can we help...' id='area'  required name='message' value={data.message} onChange={changeHandler}  >

                    </textarea>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md cursor-pointer">Send Message</button>
           </form>
        </div>
    </div>
  )
}

export default Form