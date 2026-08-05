import React from 'react'

//! import the component 
import AboutHero from "../AboutComponent/AboutHero"
import CoreValue from "../AboutComponent/CoreValue"
import Feature from "../AboutComponent/Feature"
import Footer from '../Component.js/Footer'

function About() {
  return (
    <div>
      <AboutHero/>
      <div className='flex justify-center items-center  mt-12 ' >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 ' >
          <Feature txt1={"50+"} txt2={"Local Farm Partners"} />
          <Feature txt1={"12k+"} txt2={"Happy Customers"} />
          <Feature txt1={"200+"} txt2={"Varieties Available"} />
          <Feature txt1={"4h+"} txt2={"Average Delivery Time"} />
        </div>
      </div>
      <CoreValue/>
      <Footer/>
    </div>
  )
}

export default About