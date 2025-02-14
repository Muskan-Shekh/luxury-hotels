import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import FilterSection from '@component/components/home/FilterSection'
import HeroBanner from '@component/components/home/HeroSection'
import LuxuryHotelResort from '@component/components/luxaryHotelResort'
import SwiperComponent from '@component/components/SwiperComponent'
import React from 'react'

function page() {
  return (
    <>
    <HeroBanner/>
    <HeadingWithoutSwiper name={"Luxury hotels selection"}/>

    
      <LuxuryHotelResort />
   
    </>
  )
}

export default page