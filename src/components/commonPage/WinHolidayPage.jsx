"use client"

import { apis, BASEURL } from '@component/apiendpoints/api';
import useRequest from '@component/hooks/useRequest'
import moment from 'moment';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';


function WinHolidayPage() {
    const router = useRouter();

    const [data,setData] = useState([])

    const {request,response,loading} = useRequest(true);
     useEffect(()=>{
        try{
            // request("GET",`${apis?.GETWIN_HOLIDAY_DATA}`)
            request("GET",`${apis?.GET_ALL_WIN_HOLIDAY_DATA}`)

        }catch(error){
            console.log("error", error);
        }

     },[])
     const [currentPage, setCurrentPage] = useState(1);
     const perPage = 8;
   
     // Calculate total pages dynamically
     const totalPages = data ? Math.ceil(data?.length / perPage) : 1;
   
     // Extract hotels for the current page
     const paginatedHotels =data?.slice((currentPage - 1) * perPage, currentPage * perPage) || [];

     useEffect(()=>{
      if(response){
       console.log("response", response);
       setData(response?.response)
      }
     },[response])

     const handleNavigate = (slug) => {
        router.push(`/${slug}`);
      };
    
  return (
   <>
  <div className="container whater-effect section-padding" data-aos="zoom-out-up">
                  <div className="row">
                      {paginatedHotels?.map((hotel, index) => (
                          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                              <div className="hotel-cards overflow-hidden">
                                  <div className="hotel-img">
                                      {/* Fix template literal syntax */}
                                      <img
                    src={`${BASEURL}/${hotel?.hotelId?.hotel_logo}` ?? "./new/assets/img/noImage.png"}
                    alt={hotel?.hotelId?.hotel_name || "Hotel"}
                  />
                                  </div>
                                  <div className="hotel-content">
                  <button
                    onClick={() => handleNavigate(hotel?.slug)}
                    className="bg-[#ffffff] text-[#846316] px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full text-center"
                  >
                    {hotel?.hotelId?.hotel_name}
                  </button>
                  {/* <p>End Date{moment(hotel?.competitionclosure).format("DD-MM-YY")}</p> */}
                  <button className="bg-[#846316] text-white px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full">
                    {hotel?.hotelId?.country?.country || "Unknown Country"}
                  </button>
                </div>
                              </div>
                          </div>
                      ))}
                  </div>
                  </div>
                 <div className="p-3">
                   <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
                </div>
   </>
  )
}

export default WinHolidayPage;