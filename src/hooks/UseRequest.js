"use client"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

// import { logout, updateLoading, updateToken } from "../store/auth/action";
import Cookies from "js-cookie";
import { BASEURL } from "@component/apiendpoints/api";
import { siteContentActions } from "@component/lib/slice/sitesSetting";
export default function useRequest(toNotLoad) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  // const [timeUrl,setTimeUrl] = useState('')

  const token = Cookies.get("token");

  const dispatch = useDispatch();


  

  const startFetching = () => {
    setResponse(null); 
    setLoading(true);
    if(!toNotLoad){
      dispatch(siteContentActions.updateLoading(true))
        }
    setError(null);
  };

  const clear = () => {
    setResponse(null);
    setError(null);
  };

  const fetchedData = () => {
    setLoading(false);
    if(!toNotLoad){
      dispatch(siteContentActions.updateLoading(false))
        }
    setError(null);
  };

  // const requestData = (method, url, data) => {
  //   let config;
  //   if (token) {
  //     config = {
  //       method,
  //       url: `${BASEURL}/${url}`,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       data,
  //     };
  //   } else {
  //     config = {
  //       method,
  //       url: `${BASEURL}/${url}`,
  //       data,
  //     };
  //   }

  //   startFetching();

  //   axios(config)
  //     .then((res) => {
  //       const token = res.headers["access-token"];

  //       if (token) {
  //         //   dispatch(updateToken({ token }));
  //       }

  //       const url = "";

  //       if (url !== "/login") {
  //         localStorage.setItem("url", url);
  //       }

  //       fetchedData();
  //       setResponse(res.data);
  //       return res.data
  //     })
  //     .catch((err) => {
  //       fetchedData();
  //       if (err.response) {
  //         if (err.response.status === 401) {
  //           // dispatch(logout());
  //           toast.error(err.response.data.message);
  //         } else if (err.response.status === 404) {
  //         } else {
  //           toast.error(err.response.data.message);
  //         }
  //       } else if (err.request) {
  //         toast.error("Slow Network Speed. Try Again later.");
  //       } else {
  //         toast.error("Oops!! Unusual error occurred");
  //       }
  //     });
  // };

  const requestData = async (method, url, data) => {
    try {
      // Configure request
      const config = {
        method,
        url: `${BASEURL}/${url}`,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        data,
      };
  
      // Indicate request started
      startFetching();
  
      // Perform request
      const response = await axios(config);
  
      // Extract token from response headers
      const newToken = response.headers["access-token"];
      if (newToken) {
        // Optionally update token in state or context
        // dispatch(updateToken({ token: newToken }));
      }
  
      // Store the last visited URL (if applicable)
      if (url && url !== "/login") {
        localStorage.setItem("url", url);
      }
  
      // Indicate request completed
      fetchedData();
      
      // Process response data
      setResponse(response.data);
      return response.data;
    } catch (error) {
      // Indicate request completed
      fetchedData();
  
      // Handle errors
      if (error.response) {
        const { status, data } = error.response;
        
        if (status === 401) {
        
          // Handle unauthorized errors
          // dispatch(logout());
          toast.error(data?.message || "Unauthorized access. Please log in.");
        } else if (status === 404) {
          toast.error("Resource not found.");
        } else {
          toast.error(data?.message || "An error occurred while processing your request.");
        }
      } else if (error.request) {
        // Handle network issues
        toast.error("Slow Network Speed. Please try again later.");
      } else {
        // Handle unexpected errors
        toast.error("Oops! An unusual error occurred.");
      }
  
      // Optional: Rethrow error for further handling (if needed)
      // throw error;
    }
  };
  
  return {
    loading,
    error,
    request: requestData,
    clear,
    response,
    setError,
  };
};

