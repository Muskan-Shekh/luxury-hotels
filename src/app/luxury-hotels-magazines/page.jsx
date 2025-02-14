import Magazines from '@component/components/cards/Magazines'
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import HeroBanner from '@component/components/home/HeroSection'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='Magazines-section '>
                <HeroBanner/>
                <HeadingWithoutSwiper name={"Luxury hotels Magazines"} />
                <div className='container whater-effect section-padding'>
                    <Magazines />
                </div>
            </section>
        </>
    )
}

export default page