"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';
import { BASEURL } from '@component/apiendpoints/api';
import { useRouter, usePathname } from 'next/navigation';

const TravelNews = () => {
    const route = useRouter();

    const { travelNews } = useSelector((state) => state.siteSetting);

    const handleRoute = (item) => {
        route.push(`/news/${item}`)
    }

    useEffect(() => {
        AOS.init({
            duration: 2000, // Animation duration (in ms)
            easing: "ease-in-out", // Easing for the animation
            once: true, // Whether animation should happen only once
        });
    });

    console.log("lastestNews", travelNews)
    return (
        <section className="fourthcoming-section travelmargin0">
            <div className='container'>
                <div className="container">
                    <div className="sectionInnerHead section-head">
                        {/* <h1 className="text-sm sm:text-xl md:text-sm lg:text-xl ml-2 md:ml-0 my-5 uppercase border-l-4 pl-3 border-[#846316] text-[#846316]">LATEST News</h1> */}
                        <h1 className="text-sm sm:text-xl md:text-sm lg:text-xl ml-2 md:ml-0  uppercase border-l-4 pl-3 border-[#846316] text-[#846316]">Travel News</h1>
                        <div className="section-control">
                            <div className="swiper-button-next text-slate-300"></div>
                            <div className="swiper-button-prev text-slate-300"></div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                <div className="row whater-effect travel-news-sec">
                    <div className="col-md-3" data-aos="fade-left">
                        <div className="same-cards">
                            <div style={{
                                backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                border: "2px solid #b79d13",
                                borderRadius: '12px',
                                height: '100%'
                            }}>
                                <div className="section-comman-text">
                                    <h3 className="comman-text-heading" style={{ textAlign: "center" }}>
                                        LATEST TRAVEL NEWS
                                    </h3>
                                    <p className="comman-info" style={{ textAlign: "center" }}>
                                        Stay informed with the most recent updates, tips, and trends from the world of travel. Your next adventure starts here!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-right">
                        <Swiper className='newly-listedSwiper'
                            spaceBetween={24}
                            modules={[Navigation, Pagination, EffectFlip, Autoplay]} // ✅ Added Autoplay module
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            loop={true} // ✅ Enables infinite looping
                            autoplay={{
                                delay: 2000, // ✅ Auto-scroll every 2 seconds
                                disableOnInteraction: false, // ✅ Keeps autoplay running even after user interaction
                            }}
                            slidesPerView={3}
                        >
                            {travelNews?.content?.map((hotel, index) => (
                                <SwiperSlide key={index}>
                                    <div className="hotel-cards">
                                        <div className="hotel-img">
                                            <img src={`${BASEURL}/${hotel?.thumbnail_path}`} alt={hotel.name} />
                                        </div>
                                        <div className="hotel-content">
                                            <h4 className="hotel-name text-center hotelNames">{hotel?.news_title}</h4>
                                            <button onClick={() => handleRoute(hotel?.slug)} className="bg-[#ffffff] hotelNames text-[#846316] px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full">{hotel?.business_name}</button>
                                            <button className="bg-[#846316] text-white hotelcountry  px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full">{hotel.country?.country}</button>
                                            <p className="mb-2 text-black text-[15px] mt-2 ">{hotel?.createdAt ?? "15 May 2020 9:00 am"}</p>
                                            <p className="my-2 text-[14px] flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>10 min read</p>
                                            <button className="text-[#846316]" fdprocessedid="cmxd82">READ MORE</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default TravelNews;

