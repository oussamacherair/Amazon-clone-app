import React from 'react'
import './Banner.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className='relative'> 
            <div className='absolute h-32 w-full  bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}>
                <div>
                    <img loading='lazy' src='https://rebrand.ly/ozz3' alt='' />
                </div>
                <div>
                    <img loading='lazy' src='https://rebrand.ly/ozz1' alt='' />
                </div>
                <div>
                    <img loading='lazy' src='https://rebrand.ly/ozz2' alt='' />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner