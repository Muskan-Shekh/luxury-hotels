"use client"

import React, { useEffect } from 'react'
import HeroBanner from './home/HeroSection'
import TravelNews from './home/Travel-News'
import NominateForm from './nominateForm'
import LuxuryAward from './home/LuxuryAward'
import LuxGateWeek from './home/LuxGateWeek'

// import StoreInfo from '@component/components/ourStory/storeInfo'
// import StoreInfo2 from '@component/components/ourStory/storeInfo2'



import HearderNameIcon from './hearderNameIcon'
import StoreInfo from './ourStory/storeInfo'
import StoreInfo2 from './ourStory/storeInfo2'
import AvailableOn from './availableOn'


import { useDispatch, useSelector } from 'react-redux'
import { BASEURL } from '@component/apiendpoints/api'
import LatestNews from './home/LatestNews'
import Link from 'next/link'
import ContantUsSection from './commonPage/ContantUsSection'
import { getBestLuxuryHotelOfYear, getExclusiveOffers, getLatestNews, getTravelNews } from '@component/lib/slice/sitesSetting'



function About() {
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(getLatestNews())
    dispatch(getBestLuxuryHotelOfYear())
    dispatch(getExclusiveOffers())
    dispatch(getTravelNews())
   },[])
    const { exclusiveOffers } = useSelector((state) => state.siteSetting);

    const filterExlusiveOffers = exclusiveOffers?.hotel_offer?.filter((item) => item.show_on_home === true)
  return (
    <>
     <HeroBanner />
          <StoreInfo />
          <AvailableOn />
          <StoreInfo2 />
          {/* <div className='container'>
            <h1 className="text-sm sm:text-xl md:text-sm lg:text-xl ml-2 md:ml-0 my-5 uppercase border-l-4 pl-3 border-[#846316] text-[#846316]">Travel News</h1> */}
            <TravelNews />
          {/* </div> */}
          <HearderNameIcon name={"NEW LUXE GETAWAY EVERY WEEK"} />
          <div style={{ backgroundImage: "url('/new/assets/img/hotel-inside.png')" }}>
            <LuxGateWeek />
          </div>
          <LuxuryAward />
          <HearderNameIcon name={"Nominate Hotel"} />
          <NominateForm />
          <section className="ExclusiveDeal ExclusiveDealSec">
             
                    <HearderNameIcon name={"what we can do for you"} />
                
                <div data-aos="zoom-in" className="container">
                    <div className="grid my-[40px] grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4 ">

                        {filterExlusiveOffers?.map((hotel) => {
                            return (
                                <div className="card w-40">
                                    <div className="card__content  relative  transition-transform duration-1000  font-bold">
                                        <div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-[#C1121F]">
                                            <img style={{ maxHeight: "350px", height: "350px" }} src={`${BASEURL}/${hotel?.offer_image}`} />
                                            <span className="exclu_deal_name">The ux</span>
                                        </div>
                                        <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-[#9e7922]">
                                            <span className='offer-time'>
                                                Valid From: {hotel?.offer_from} </span>
                                            <span className='offer-time'>    Valid TO: {hotel?.offer_to} </span>
                                            <span className='offer-heading'>  {hotel?.offer_name} </span>

                                            <div className='text-center mt-4'>
                                                <Link href={`/hotels/${hotel?.hotel?.slug}`} className='theme-btn'> CLAIM  </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                       

                        <div className="card w-40 " data-aos="fade-right" >
                            <div className='' style={{
                            backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            border: "2px solid #b79d13",
                            borderRadius: "31px",
                            marginTop: "2px",
                            height: "100%"
                        }}>
                                <div className="section-comman-text">
                                    <h3 className="text-xl" style={{ textAlign: "center" }}>
                                        Exclusive Deals
                                    </h3>
                                    <p className="comman-info" style={{ textAlign: "center" }}>
                                        Catch up on the most recent updates and breaking stories from around the world. Stay informed, stay ahead!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LatestNews />

            <ContantUsSection />
            
 



    </>
  )
}

export default About