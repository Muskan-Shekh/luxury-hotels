"use client"
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import TravelNews from '@component/components/home/Travel-News'
import React from 'react'

import HeroBanner from '@component/components/home/HeroSection';
import TravelNewsPage from '@component/components/TravelNewsPage';

function page() {
    
  return (
    <>
    <HeroBanner/>
    <HeadingWithoutSwiper name={"TRAVEL NEWS"} />
   

    <TravelNewsPage />
   
    </>
  )
}

export default page