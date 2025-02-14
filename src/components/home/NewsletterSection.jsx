import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HeadingWithoutSwiper from "../headingWithoutSwiper";
import { useForm } from "react-hook-form";
import useRequest from "@component/hooks/useRequest";
import { apis } from "@component/apiendpoints/api";

const NewsletterSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { request, response, loading } = useRequest(true);

  const handleSubmitNewsLatter = (data) => {
    request("POST", apis.SUBSCRIBE_NEWSLATTER, data);
  };

  useEffect(() => {
    if (response) {
      console.log("Response:", response);
      reset(); // Reset the form only on successful response
    }
  }, [response, reset]);

  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <HeadingWithoutSwiper name={"SUBSCRIBE NEWSLETTER"} />
      <section className="section-padding  bg-[#fffcf5]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center text-white ">
            {/* Left Side - Image */}
            <div className="md:w-1/3" data-aos="fade-left">
              <img
                src="/new/assets/img/resort.png" // Replace with your image URL
                alt="Scenic View"
                className=" object-cover "
              />
            </div>

            {/* Right Side - Content */}
            <div className="md:w-2/3 mt-[-50px] md:mt-0 md:ml-8 md:text-left">
              <h2 className="text-2xl font-bold">NEWSLETTER SIGN UP</h2>
              <p className="mt-3">
                SIGN UP NOW TO RECEIVE HOT SPECIAL OFFERS AND INFORMATION ABOUT THE
                BEST TOURS!
              </p>
              <form className="mt-6" onSubmit={handleSubmit(handleSubmitNewsLatter)}>
                <div className="border-b pb-3 d-flex">
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="WRITE YOUR NAME"
                    className="w-full bg-transparent text-black focus:outline-none"
                  />
                  {errors?.name?.message && (
                    <span className="error_message">
                      {errors.name.message}
                    </span>
                  )}
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    placeholder="WRITE YOUR EMAIL"
                    className="w-full bg-transparent text-black focus:outline-none"
                  />
                  {errors?.email?.message && (
                    <span className="error_message">
                      {errors.email.message}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="flex-grow-0 text-[16px] px-2 m-1 hover:bg-[#121212]-700 h-8 w-48 rounded-md bg-[#D2122E] grid place-items-center focus:outline-none"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "SUBSCRIBE"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;
