"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';
import { BASEURL } from '@component/apiendpoints/api';
import { useRouter } from 'next/navigation';

const LatestNews = () => {
    const route = useRouter();

    const { latestNews } = useSelector((state) => state.siteSetting);

    const handleRoute = (item) => {
        route.push(`/news/${item}`)
    }

  

    return (
        <>
            <div className='container whater-effect letestNews travel-news-sec'>
                {/* <div className="section-head"> */}
                <div className="container">
                    <div className="sectionInnerHead section-head">
                        <h1 className="text-sm sm:text-xl md:text-sm lg:text-xl ml-2 md:ml-0 uppercase border-l-4 pl-3 border-[#846316] text-[#846316]">LATEST News</h1>

                        <div className="section-control">
                            {/* Use refs for navigation buttons */}
                            <div  id="newly-prev2" className="swiper-button-prev"></div>
                            <div  id="newly-next2" className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9" data-aos="fade-left">
                        <Swiper className='newly-listedSwiper2'
                            spaceBetween={24}
                            modules={[Navigation]}
                        // navigation={{
                        //     prevEl: prevRef.current,
                        //     nextEl: nextRef.current,
                        // }}
                            loop={true}
                            slidesPerView={3} // Adjust the number of slides visible at once
                        // breakpoints={{
                        //   768: {
                        //     slidesPerView: 2, // 2 slides on medium screens
                        //   },
                        //   480: {
                        //     slidesPerView: 1, // 1 slide on small screens
                        //   },
                        // }}
                        >
                            {latestNews?.content?.map((hotel, index) => (
                                <SwiperSlide className='' key={index}>
                                    <div className="hotel-cards">
                                        <div className="hotel-img">
                                            <img src={`${BASEURL}/${hotel?.thumbnail_path}`} alt={hotel.name} />
                                        </div>
                                        <div className="hotel-content">
                                            <h4 className="hotel-name hotelNames text-center">{hotel?.news_title}</h4>
                                            <button onClick={() => handleRoute(hotel?.slug)} className="bg-[#ffffff] hotelNames text-[#846316] px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full">{hotel?.news_title}</button>
                                            <button className="bg-[#846316] text-white px-3 py-1 blog-bottom-content hotelcountry rounded-md mt-3 uppercase w-full">{hotel?.country?.country}</button>
                                            <p className="mb-2 text-black text-[15px] mt-2">{hotel?.createdAt ?? "15 May 2020 9:00 am"}</p>
                                            <p className="my-2 text-[14px] flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>10 min read</p>
                                            <button className="text-[#846316]">READ MORE</button>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-md-3" data-aos="fade-right">
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
                                        LATEST NEWS
                                    </h3>
                                    <p className="comman-info" style={{ textAlign: "center" }}>
                                        Catch up on the most recent updates and breaking stories from around the world. Stay informed, stay ahead!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LatestNews;
