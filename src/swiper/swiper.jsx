import React, { useRef, useState } from 'react';
import './swiper.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Mousewheel, Keyboard, Navigation } from 'swiper/modules';

const Slide = () => {
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.slideNext) {
            swiperRef.current.slideNext(); // Use slideNext() method
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.slidePrev) {
            swiperRef.current.slidePrev(); // Use slidePrev() method
        }
    };
    return (
        <div className='root'>

            <div className="navigators">
                <div className="about-part-1">
                    <div className='nav_button nav_button_prev' onClick={goPrev}>
                        <img className='arrow' src="./src/assets/arrow-left.svg" alt="" />
                    </div>
                    <div className="sub-headding-4">Hear From Hospitals Chose DocMinds</div>
                    <div className='nav_button nav_button_next' onClick={goNext}>
                        <img className='arrow' src="./src/assets/arrow-right.svg" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="custom-pagination-top"></div>
            </div>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Assign swiper instance to ref
                }}
                autoplay={{
                    delay: 2500, // Time between slides (in milliseconds)
                    disableOnInteraction: false, // Autoplay won't stop after user interaction
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 30,
                    stretch: -70,
                    depth: 600,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{
                    el: '.custom-pagination-top', // Use the custom container
                    clickable: true,
                }}
                navigation={false}
                mousewheel={false}
                keyboard={true}
                modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard, Navigation]}
                className="Carousel"
            >

                <SwiperSlide>
                    <div className="carousel_cards">
                        <img className='slide-img' src="./src/assets/slide-center.svg" alt="" />
                        <div className='about-slide-content'>
                            <img className='photo' src="./src/assets/photo-1.svg" alt="" />
                            <div className="slide-headding">Dr. abc</div>
                            <div className="slide-sub-headding">Medical Director</div>
                            <div className="slide-sub-headding">Multispeciality Hospital, Bangalore</div>
                            <img className='qoute' src="./src/assets/quote.svg" alt="" />
                            <div className="slide-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel_cards">
                        <img className='slide-img' src="./src/assets/slide-center.svg" alt="" />
                        <div className='about-slide-content'>
                            <img className='photo' src="./src/assets/photo-3.svg" alt="" />
                            <div className="slide-headding">Hannah Schmitt</div>
                            <div className="slide-sub-headding">Lead designer</div>
                            <img className='qoute' src="./src/assets/quote.svg" alt="" />
                            <div className="slide-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel_cards">
                        <img className='slide-img' src="./src/assets/slide-center.svg" alt="" />
                        <div className='about-slide-content'>
                            <img className='photo' src="./src/assets/photo-2.svg" alt="" />
                            <div className="slide-headding">Hannah Schmitt</div>
                            <div className="slide-sub-headding">Lead designer</div>
                            <img className='qoute' src="./src/assets/quote.svg" alt="" />
                            <div className="slide-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel_cards">
                        <img className='slide-img' src="./src/assets/slide-center.svg" alt="" />
                        <div className='about-slide-content'>
                            <img className='photo' src="./src/assets/photo-3.svg" alt="" />
                            <div className="slide-headding">Dr. abc</div>
                            <div className="slide-sub-headding">Medical Director</div>
                            <div className="slide-sub-headding">Multispeciality Hospital, Bangalore</div>
                            <img className='qoute' src="./src/assets/quote.svg" alt="" />
                            <div className="slide-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel_cards">
                        <img className='slide-img' src="./src/assets/slide-center.svg" alt="" />
                        <div  className='about-slide-content'>
                            <img className='photo' src="./src/assets/photo-2.svg" alt="" />
                            <div className="slide-headding">Hannah Schmitt</div>
                            <div className="slide-sub-headding">Lead designer</div>
                            <img className='qoute' src="./src/assets/quote.svg" alt="" />
                            <div className="slide-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide