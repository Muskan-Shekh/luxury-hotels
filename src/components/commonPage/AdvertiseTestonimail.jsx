import React from 'react'

function AdvertiseTestonimail() {
  return (
    <div className="review-section">
      <div className="container py-5 my-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="company-logo w-48 mx-auto mb-3">
              <img src="./assets/img/company-logo.png" alt="company-logo" />
            </div>
            <p className="text-md text-white border border-white p-4 m-3 bg-white bg-opacity-30 rounded">
              Lorem ipsum dolor sit amet consectetur. Orci nulla penatibus tortor
              nulla nisl pellentesque ipsum. Et integer ac et elit risus blandit urna
              imperdiet magna. A imperdiet risus scelerisque at. habitant.
            </p>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input key={index} type="radio" name="rating-1" className="mask mask-star-2 bg-star" />
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="company-logo w-48 mx-auto mb-3">
              <img src="./assets/img/company-logo.png" alt="company-logo" />
            </div>
            <p className="text-md text-white border border-white p-4 m-3 bg-white bg-opacity-30 rounded">
              Lorem ipsum dolor sit amet consectetur. Orci nulla penatibus tortor
              nulla nisl pellentesque ipsum. Et integer ac et elit risus blandit urna
              imperdiet magna. A imperdiet risus scelerisque at. habitant.
            </p>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input key={index} type="radio" name="rating-2" className="mask mask-star-2 bg-star" />
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="company-logo w-48 mx-auto mb-3">
              <img src="./assets/img/company-logo.png" alt="company-logo" />
            </div>
            <p className="text-md text-white border border-white p-4 m-3 bg-white bg-opacity-30 rounded">
              Lorem ipsum dolor sit amet consectetur. Orci nulla penatibus tortor
              nulla nisl pellentesque ipsum. Et integer ac et elit risus blandit urna
              imperdiet magna. A imperdiet risus scelerisque at. habitant.
            </p>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input key={index} type="radio" name="rating-3" className="mask mask-star-2 bg-star" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default AdvertiseTestonimail