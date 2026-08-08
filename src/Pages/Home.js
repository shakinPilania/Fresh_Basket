import React from 'react'


//! import the component 
import HeroSection from '../HomeComponent/HeroSection'
import Coupon from '../HomeComponent/Coupon'
import Footer from "../Component/Footer"

function Home() {
  return (
    <div className='w-full h-full flex flex-col'>
      <HeroSection/>
      <Coupon/>
      <Footer/>
    </div>
  
  )
}

export default Home