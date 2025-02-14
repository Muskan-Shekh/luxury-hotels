import WinHolidayPage from '@component/components/commonPage/WinHolidayPage';
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import HeroBanner from '@component/components/home/HeroSection';
// import SwiperComponent from '@component/components/SwiperComponent'
import React from 'react'

function page() {
  return (
    <>
    <HeroBanner/>
    <HeadingWithoutSwiper name={"Win a trip"} />
    <div className='container'>
    <WinHolidayPage />
    </div>
    </>
  )
}

export default page;