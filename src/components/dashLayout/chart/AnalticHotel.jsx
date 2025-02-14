"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';
import Barchart from './Barchart';
import LineChart from './Linchart';
import CountryAnalytics from './CountryAnalytics'
import Link from 'next/link';
import useRequest from '@component/hooks/useRequest';
import { apis } from '@component/apiendpoints/api';
import CounrtyAnaltics from './CounrtyAnaltics';

// Register required Chart.js components
ChartJS.register(LineElement, BarElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const LineAndBarChart = () => {

  const {request,response,loading} = useRequest(true);
  const [barChartData,setBarChartData] = useState([]);
  const [lineChartData,setLineChartData] = useState([])
  const {request:requestReview,response:responseReview,loading:loadingReview} = useRequest(true);

  useEffect(()=>{
    request("POST",`${apis.GET_ALL_DATA_FROM_GRAPH}/visit`);
    requestReview("POST",`${apis.GET_ALL_DATA_FROM_GRAPH}/view`)
  },[])

  useMemo(()=>{
    if(response){
      setLineChartData(response?.data)
    }
    if(responseReview){
      setBarChartData(responseReview?.data)
    }
  },[response,responseReview])
  
  return (
    <div>
      <h4>Analtics For Website Visits</h4>
      <LineChart lineChartData={lineChartData} />
      <h4>Analtics For Review</h4>
      <Barchart barChartData={barChartData} />
      <h4>Analytics for Countries Guest Coming From</h4>
      <CounrtyAnaltics barChartData={barChartData}/>

      <div className='footer-btn text-end'>
            <Link href="/dashboard/select-package" className='next-btn me-auto'>  Previous </Link>
                {/* <a href='' className='save-btn'>  Proceed to payment </a>
            <Link href="/dashboard/hotel-analytics" className='next-btn me-auto'>  Next </Link> */}
            </div>
    </div>
  );
};

export default LineAndBarChart;

