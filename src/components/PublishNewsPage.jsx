"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

import { getLatestNews } from "@component/lib/slice/sitesSetting"; 
import { BASEURL } from "@component/apiendpoints/api";
import Pagination from "./commonPage/Pagination";


function PublishNewsPage() {
  const dispatch = useDispatch();
  const route = useRouter();

  useEffect(() => {
    dispatch(getLatestNews());
  }, [dispatch]);

  const { latestNews } = useSelector((state) => state.siteSetting);

  const handleRoute = (item) => {
    route.push(`/news/${item}`);
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
        const perPage = 8;
      
        // Calculate total pages dynamically
        const totalPages = latestNews?.content ? Math.ceil(latestNews?.content?.length / perPage) : 1;
      
        // Extract hotels for the current page
        const paginatedHotels =latestNews?.content?.slice((currentPage - 1) * perPage, currentPage * perPage) || [];

    return (
       <>
        <div className="container whater-effect section-padding " data-aos="zoom-out-up">

         <div className="row">
                        {paginatedHotels.map((hotel, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                <div className="hotel-cards overflow-hidden">
                                    <div className="hotel-img">
                                      <img src={`${BASEURL}/${hotel?.thumbnail_path}`} alt={hotel.name} />
                                    </div>
                                    <div className="hotel-content">
                                    <h4 className="hotel-name text-center">{hotel?.news_title}</h4>
                                        <div className="teams-name cursor-pointer" onClick={() => handleRoute(hotel?.slug)} >{hotel?.business_name}</div>
                                        <p className="mb-2 text-black text-[15px] mt-2">{hotel?.createdAt ?? "15 May 2020 9:00 am"}</p>
                                        <div className="teams-role">{hotel.country?.country}</div>
                                        <button className="text-[#846316] cursor-pointer" fdprocessedid="cmxd82" onClick={() => handleRoute(hotel?.slug)}>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div className="p-3" >
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
      </div>
       </>
    );
  
}

export default PublishNewsPage