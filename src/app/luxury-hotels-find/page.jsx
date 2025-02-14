import FIndHotels from '@component/components/FIndHotels'
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import HeroBanner from '@component/components/home/HeroSection'
import React from 'react'

function page() {
  return (
    <>
    <HeroBanner/>
    <HeadingWithoutSwiper name={"Luxury hotels selection"} />
    <div className='container'>
        <FIndHotels />
    </div>
    </>
  )
}

export default page