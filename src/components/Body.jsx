import React from 'react'
import HeroSection from './HeroSection'
import Slider from './Slider'
import ProductCategories from './ProductCategories'
import ServiceCategories from './ServiceCategories'

const Body = () => {
  return (
    <div>
        <Slider/>
        <HeroSection/>
        <ProductCategories/>
        <ServiceCategories/>
    </div>
  )
}

export default Body