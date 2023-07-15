import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    'src/assets/images/IMG_6404.JPG',
    'src/assets/images/IMG_5932.jpeg',
    'src/assets/images/IMG_4557.jpeg',
    'src/assets/images/GPTempDownload 11.JPG',
    'src/assets/images/90F9D37A-7267-495A-B392-621574A1A207.jpg',
]

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mt-5 "
        >
            <SwiperSlide>
                <img src='src/assets/images/GPTempDownload 11.JPG' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src='src/assets/images/IMG_6404.JPG' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src='src/assets/images/IMG_5932.jpeg' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src='src/assets/images/IMG_4557.jpeg' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src='src/assets/images/IMG_6100.jpeg' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src='src/assets/images/90F9D37A-7267-495A-B392-621574A1A207.jpg' alt="" style={{
                    width: "100%", height:
                        "50vh"
                }} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider