import React, { useEffect } from 'react'
import HeroBanner from './HeroSection'
import FilterSection from './FilterSection'
import NewlyListedHotels from '../NewHotelList'
// import BrandSection from './brandSection'
import NewsletterSection from './NewsletterSection'
import ExclusiveDeal from './ExclusiveDeal'

import BrandSection from './BrandSection'

import VideoContainer from './VideoContainer'
import Fourthcoming from './Fourthcoming'
// import TravelNews from './Travel-News'
import LatestNews from './LatestNews'
import LuxuryAward from './LuxuryAward'
import { useDispatch, useSelector } from 'react-redux'
import { get_addons_home_Data, getAllHotels, getBestLuxuryHotelOfYear, getCountryVideos, getExclusiveOffers, getHomeData, getLatestNews, getNewlyListedHotel, getPartners, getTravelNews, getUpcomingMagazine, search_hotel, siteContentActions } from '@component/lib/slice/sitesSetting'
import TravelNews from './Travel-News'



const HomeRender = () => {
  const dispatch=useDispatch()

useEffect(()=>{
dispatch(get_addons_home_Data())
dispatch(search_hotel())
dispatch(getNewlyListedHotel())
dispatch(getCountryVideos())
dispatch(getPartners())
dispatch(getAllHotels())
dispatch(getBestLuxuryHotelOfYear())
dispatch(getUpcomingMagazine())
dispatch(getLatestNews())
dispatch(getExclusiveOffers())
dispatch(getTravelNews())
dispatch(getHomeData())
},[])
  return (
    <>
    <HeroBanner/>
    <FilterSection/>
    <NewlyListedHotels/>
    <BrandSection/>     
    <LuxuryAward />
    <Fourthcoming />
    <TravelNews />
    {/* <BrandSection/>    */}
    <VideoContainer/>  
     <LatestNews />
    <ExclusiveDeal/>
    <NewsletterSection/>
    </>
  )
}

export default HomeRender