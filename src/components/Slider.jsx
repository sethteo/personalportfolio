import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  
  } from "../assets";

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={
                {
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }
            }
            className="mt-5 "
        >
            <SwiperSlide>
                <img src={image1} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider