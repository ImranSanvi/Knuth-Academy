import React from 'react';
import slide1 from './../assets/slide1.jpg';
import slide2 from './../assets/slide2.jpg';
import slide3 from './../assets/slide3.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
    return (
        <div className="hero-slider">
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" className="w-full h-[40vh] object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" className="w-full h-[40vh] object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="Slide 3" className="w-full h-[40vh] object-cover" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HeroSlider;
