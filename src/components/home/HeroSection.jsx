"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsLetterPopUp from "../NewsLetterPopUp";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const [showNewsLetter, setShowNewsLetter] = useState(false);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Easing for the animation
      once: true, // Animation happens only once
    });

    // Function to set the state to true on page refresh
    const handleRefresh = () => {
      setShowNewsLetter(true);
      console.log("Page refreshed, showNewsLetter is now true");
    };

    // Attach the event listener for page unload
    window.addEventListener("beforeunload", handleRefresh);

    // Set initial state on component load
    handleRefresh();

    // Cleanup the event listener
    return () => window.removeEventListener("beforeunload", handleRefresh);
  }, []);

  const closeNewsLetter = () => {
    setShowNewsLetter(false);
  };

  return (
    <>
      <section data-aos="zoom-in" className="hero-banner">
        {/* Embedded video */}
        <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/4j9XkiTWSrA?autoplay=1&mute=1&loop=1&color=white&controls=0&playsinline=1&rel=0&playlist=4j9XkiTWSrA&modestbranding=1&showinfo=0"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translate(0, 0) scale(1.3)",
              width: "100vw",
              height: "100vh",
              border: "none",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Hero Video"
          ></iframe>
          
        </div>

        {/* Banner content */}
        <div className="banner-content">
          <div className="container">
            <div className="row align-items-center">
              {/* Left content */}
              <div className="col-md-6">
                <div className="banner-left-text">
                  <p className="banner-text">
                    Luxury Hotels, a renowned global brand founded in England 17
                    years ago, is currently present in 89 countries. We provide
                    Luxury Hotels for affluent travelers through our online
                    platform and in print and digital formats. Each edition is
                    accessible for free download on 5 different platforms and
                    attracts 4-5 million online readers annually.
                  </p>
                  <p className="banner-text">
                    Through our Printed Edition Rotation Program, your hotel
                    will be featured as one of the top Luxury Hotels and will
                    ensure a continuous influx of bookings and a consistent
                    occupancy rate of 800,000 to 1 million tourists throughout
                    the year, all without any commission fees.
                  </p>
                </div>
              </div>

              {/* Right content */}
              <div className="col-md-6">
                <figure className="banner-logo">
                  <img
                    src="/new/assets/img/logo.svg"
                    alt="Luxury Hotels Logo"
                    className="img-fluid"
                  />
                  <figcaption>PRESENTS</figcaption>
                  {/* <p class="text-center text-golden text-xl uppercase mt-2">Presents</p> */}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter popup */}
      {showNewsLetter && (
        <div>
          <NewsLetterPopUp closeNewsLetter={closeNewsLetter} />
        </div>
      )}
    </>
  );
};

export default HeroBanner;
