import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';



import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,

} from "../assets";

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            effect={"EffectCoverflow"}
            breakpoints={
                {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }
            }
            className="mt-5 "
        >
            <SwiperSlide>
                <img src={image1} alt="image1" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="image2" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image3} alt="image3" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image4} alt="image4" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image5} alt="image5" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image6} alt="image6" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image7} alt="image7" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image8} alt="image8" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image9} alt="image9" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image10} alt="image10" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image11} alt="image11" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image12} alt="image12" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image13} alt="image13" className="rounded-lg h-96 w-full lg:h-[50vh]" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider