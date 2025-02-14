"use client";
import React, { useEffect, useState } from "react";
import FilterSection from "./home/FilterSection";

import AOS from "aos";
import "aos/dist/aos.css";

import Pagination from "./commonPage/Pagination";
import useRequest from "@component/hooks/useRequest";
import { apis } from "@component/apiendpoints/api";
import { BASEURL } from "@component/apiendpoints/api";
import { useRouter } from "next/navigation";

function FIndHotels() {
  const route = useRouter();
  const [data, setData] = useState([]);
  const { request, response, loading } = useRequest(true);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: false,
      offset: 120, // Whether animation should happen only once
    });
    AOS.refresh();

    request("GET", `${apis.GET_ALL_HOTELS}?${currentPage}`);
  }, []);

  useEffect(() => {
    if (response) {
      setData(response?.hotels);
    }
  }, [response]);
  
  const handleRoute =(slug)=>{
    route.push(`/hotels/${slug}`)
  }

  // Calculate total pages dynamically
  const totalPages = data ? Math.ceil(data.length / perPage) : 1;

  // Extract hotels for the current page
  const paginatedHotels =
    data?.slice((currentPage - 1) * perPage, currentPage * perPage) || [];
  // console.log("paginatedHotels", paginatedHotels);

  return (
    <>
      <section className="newly-listed">
        <FilterSection />
        <div
          className="container whater-effect section-padding "
          data-aos="zoom-out-up"
        >
          <div className="row">
            {paginatedHotels?.map((hotel, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className="hotel-cards overflow-hidden">
                  <div className="hotel-img">
                    <img
                      // src={`${BASEURL}/${hotel?.thumbnail_path}`}
                      src={`${hotel?.coverPhoto}`}
                      alt={hotel.name}
                    />
                  </div>
                  <div className="hotel-content cursor-pointer">
                    <h4
                      className="hotel-name text-center"
                      onClick={() => handleRoute(hotel?.slug)}
                    >
                      {hotel?.hotel_name}
                    </h4>
                    {/* <div className="teams-name cursor-pointer" onClick={() => handleRoute(hotel?.slug)}>{hotel?.business_name}</div> */}
                    {/* <p className="mb-2 text-black text-[15px] mt-2">{hotel?.competitionclosure ?? "15 May 2020 9:00 am"}</p> */}

                    <div className="teams-role">{hotel.country?.country}</div>
                    {/* <button className="text-[#846316] cursor-pointer" fdprocessedid="cmxd82" onClick={() => handleRoute(hotel?.slug)}>READ MORE</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3">
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
}

export default FIndHotels;
