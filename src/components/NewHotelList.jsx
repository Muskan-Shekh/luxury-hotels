"use client"
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from 'next/dynamic';

import HearderNameSection from './hearderNameSection';
import HearderNameIcon from './hearderNameIcon';
import LuxGateWeek from './home/LuxGateWeek';

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useSelector } from "react-redux";


const NewlyListedHotels = () => {
  const { newlyListedHotel } = useSelector((state) => state.siteSetting);

  // console.log("newlyListedHotel", newlyListedHotel);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: false,
      offset: 120,  // Whether animation should happen only once
    });
    // AOS.refresh();
  });
  const SwiperComponent = dynamic(() => import('./SwiperComponent'), { ssr: false });


  return (
    <section className="newly-listed newly-listedSec">

      <HearderNameSection name={"NEWLY LISTED HOTELS"} />


      <div>
        <div className="container">
          <div className="row whater-effect">
            <div className="col-md-3" data-aos="fade-left" >
              <div className="same-cards">
              <div className="" style={{
                  backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  border: "2px solid #b79d13",
                  borderRadius: '12px',
                   height: '100%'
                }}>
                <div className="section-comman-text">
                  <h3 className="comman-text-heading" style={{ textAlign: "center" }}>
                    RECENTLY ADDED HOTELS
                  </h3>
                  <p className="comman-info" style={{ textAlign: "center" }}>
                    Explore our latest collection of exceptional hotels, thoughtfully curated to offer unparalleled comfort and style. Book your stay today!
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-9" data-aos="fade-right"> <SwiperComponent newlyListedHotel={newlyListedHotel} /></div>
          </div>
        </div>
      </div>
      <HearderNameIcon name={"NEW LUXE GETAWAYS EVERY WEEK"} />
      <div style={{ backgroundImage: "url('/new/assets/img/hotel-inside.png')" }}>
        <LuxGateWeek />
      </div>
    </section>
  );
};

export default NewlyListedHotels;
