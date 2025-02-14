"use client"
import { apis } from '@component/apiendpoints/api';
import useRequest from '@component/hooks/useRequest';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

function ReviewForm({new_fetch_hotel_info}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const {request:requestGuestReview,resposne,loading} = useRequest(true);

      const onSubmit = async (data) => {
        try {
          const formData = new FormData();
          formData.append("reviewer_name", data.reviewer_name);
          formData.append("reviewer_email", data.reviewer_email);
          formData.append("country", data.country);
          formData.append("formDate", data.formDate);
          formData.append("toDate", data.toDate);
          formData.append("cleanliness_rating", data.cleanliness_rating);
          formData.append("facilities_rating", data.facilities_rating);
          formData.append("comfort_rating", data.comfort_rating);
          formData.append("freewifi_rating", data.freewifi_rating);
          formData.append("overall_rating", data.overall_rating);
          formData.append("review", data.review);
          const response = await requestGuestReview("POST", `${apis.POST_GUEST_REVIEWS}/${new_fetch_hotel_info?.hotel?._id}`, formData)
          if (response) {
            console.log("response", response)
          }
        } catch (error) {
          console.log("error", error)
        }
      };
      useEffect(()=>{
              if(resposne){
                  reset({
                    reviewer_name :"",
                    reviewer_email:""
                  })
              }
            },[resposne])
  return (
    <>
    <form className='row px-3 pt-2' onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-12'>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder='Name'
                          className="form-control"
                          {...register("reviewer_name", { required: true })}
                        />
                        {errors.reviewer_name && <span className='text-danger'>Name is required</span>}
                      </div>
                    </div>

                    <div className='col-12'>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder='Email Address'
                          className="form-control"
                          {...register("reviewer_email", { required: true })}
                        />
                        {errors.reviewer_email && <span className='text-danger'>Email is required</span>}
                      </div>
                    </div>

                    <div className='col-12 my-3'>
                      <p>The Date you visit / stayed at the hotel.</p>
                    </div>

                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>From</label>
                        <input
                          type="date"
                          className="form-control"
                          {...register("formDate", { required: true })}
                        />
                      </div>
                    </div>

                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>To</label>
                        <input
                          type="date"
                          className="form-control"
                          {...register("toDate", { required: true })}
                        />
                      </div>
                    </div>

                    <div className='col-md-12'>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder='Description'
                          style={{ height: "auto", minHeight: "100px" }}
                          {...register("review", { required: true })}
                        ></textarea>
                      </div>
                    </div>

                    {[
                      { name: "comfort_rating", label: "Comfort" },
                      { name: "cleanliness_rating", label: "Cleanliness" },
                      { name: "facilities_rating", label: "Facilities" },
                      { name: "freewifi_rating", label: "Free WiFi" },
                    ].map(({ name, label }) => (
                      <div className='col-md-3' key={name}>
                        <label className='uppercase inline-block mb-2'>{label}</label>
                        <div className='rating'>
                          {[1, 2, 3, 4, 5].map((value) => (
                            <input
                              key={value}
                              type='radio'
                              className='mask mask-star-2 bg-orange-400'
                              {...register(name, { required: true })}
                              value={value}
                            />
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className='col-md-12'>
                      <div className="mt-1 flex items-start gap-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mt-1"
                          {...register("certify", { required: true })}
                        />
                        <p className="text-gray-500 text-sm">
                          Note:- I certify that this review is based on my own experience and is my
                          genuine opinion of this hotel, and that I have no personal or business
                          relationship with this establishment.
                        </p>
                      </div>
                    </div>

                    <div className='col-md-12'>
                      <button type="submit" className="theme-btn">
                        {!loading ? "Submit Review" : "Submit Review ..."}
                        </button>
                    </div>
                  </form>
    </>
  )
}

export default ReviewForm