import React from 'react'
//! impoort the -data 
import { catIcons , featured } from '../data';
//! import the component 
import HeroSection from '../HomeComponent/HeroSection'
import Category from '../HomeComponent/Category'
import FeatureHome from '../HomeComponent/FeatureHome';
import Coupon from '../HomeComponent/Coupon'
import Footer from "../Component/Footer"

function Home() {
  return (
    <div className='w-full h-full flex flex-col'>
      <HeroSection/>
      <Category catIcons={catIcons} />
      <FeatureHome featureds={featured} />
      <Coupon/>
      <Footer/>
    </div>
  
  )
}

export default Home