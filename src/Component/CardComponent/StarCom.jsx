import React from 'react'
import { Star } from 'lucide-react';
function StarCom({num}) {
    let count=0;
    if(num<=60)
        count=3;
    else if(num<=120)
        count=4;
    else
        count=5;
    function getStars(num)
    {
        let starArray=[];
        for(let i=0; i<num ; i++)
        {
            starArray.push(i);
        }  
        return starArray;
    }
    return (
    <div>
        
        <div className='flex flex-row items-center'>
            {
                getStars(count).map((ele)=>{
                    return <div key={ele}><Star size={12} className='fill-amber-400 text-amber-400'/></div>
                })
            }
            {
                getStars(5-count).map((ele)=>{
                    return <div key={ele}><Star size={12} className=' text-amber-400'/></div>
                })
            }
        </div>
    </div>
  )
}

export default StarCom


