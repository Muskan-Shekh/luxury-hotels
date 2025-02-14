import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import TravelNews from '@component/components/home/Travel-News'
import React from 'react'

import HeroBanner from '@component/components/home/HeroSection';
import PublishNewsPage from '@component/components/PublishNewsPage';

function page() {

  return (
    <>
      <div className='LatestNews-sec'>
        <HeroBanner />
        <HeadingWithoutSwiper name={"LATEST NEWS"} />
        <div className='container'>
          <PublishNewsPage />
        </div>
      </div>
    </>
  )
}

export default page