import React from 'react'
import './Keyfeatures.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import assets from '../assets/assets';

const Keyfeatures = () => {
    return (
        <div className='root'>
            <div className='keyfeatures-part-2'>
                <Swiper
                    centeredSlides={false} // Disable centered slides  
                    initialSlide={1} // Start with first slide active
                    loop={true}
                    slidesPerView={4}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    grabCursor={true}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                   
                >

                    <SwiperSlide >
                        <div className='card-1'>
                            <img className='card-img' src={assets.threestars} alt="" />
                            <div className='card-headding'>Smart Appointment Management</div>
                            <div className='card-para'>Book, cancel, reschedule, or transfer appointments across OPD, MHC and services - all in one place with real-time check-ins and automated notifications.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.thunderstorm} alt="" />
                            <div className='card-headding'>India’s First Multispeciality Queue Display System</div>
                            <div className='card-para'>Manage waiting rooms like a pro with live queue status, patient flow updates and promotional ads - displayed dynamically on hospital TV screens.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.threestars} alt="" />
                            <div className='card-headding'>Smart Appointment Management</div>
                            <div className='card-para'>Book, cancel, reschedule, or transfer appointments across OPD, MHC and services - all in one place with real-time check-ins and automated notifications.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.tower} alt="" />
                            <div className='card-headding'>Estimation & Pre-Admission Workflows</div>
                            <div className='card-para'>Generate surgery or procedure estimates with inclusions, exclusions, doctor preferences and digital approvals. Full transparency, reduced errors.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.timer} alt="" />
                            <div className='card-headding'>Doctor Availability & OPD Management</div>
                            <div className='card-para'>Let doctors manage their consultations, close OPDs, apply for leave and handle referrals from a single dashboard. Supports multi-slot and split-shift schedules.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.lightconversion} alt="" />
                            <div className='card-headding'>Master Health Checkup (MHC) Coordination</div>
                            <div className='card-para'>Seamlessly manage lab, radiology and consultation slots for each health package. Automate recurring visits and avoid holiday conflicts.</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card-1'>
                            <img className='card-img' src={assets.link} alt="" />
                            <div className='card-headding'>Service Appointment Tracking</div>
                            <div className='card-para'>Manage service-based bookings like physiotherapy, diagnostics and imaging with confirmation, check-in and report status updates.</div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Keyfeatures