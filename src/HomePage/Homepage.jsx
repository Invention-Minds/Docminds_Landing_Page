import React, { useRef } from 'react'
import './HomePage.css'
import { useForm } from "react-hook-form";
import Slide from '../swiper/swiper';
// import Keyfeatures from '../keyfeatures/Keyfeatures';
import Keyfeatures from '../keyfeatures/keyfeatures';
import emailjs, { sendForm } from '@emailjs/browser';
import assets from '../assets/assets';
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger)
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);






const Homepage = () => {

    const demoForm = useRef(null);
    const knowMore = useRef(null);
    const Home = useRef(null);
    const form = useRef();

    const scrollToForm = () => {
        demoForm.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToForm2 = () => {
        knowMore.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToForm3 = () => {
        Home.current?.scrollIntoView({ behavior: 'smooth' });
    };



    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const sendEmail = (e) => {
        console.log(e)
        emailjs
            .sendForm('service_6i215dl', 'template_ji6p8yp', form.current, { publicKey: 'XyBjZGLCjbmH-NOWH' })
            .then(() => {
                console.log('SUCCESS');
                reset();
            },
                (error) => {
                    console.log('FAILED...', error)
                }
            )
    }


    ScrollTrigger.matchMedia({

        // Desktop (large screens)
        "(min-width: 1025px)": function () {
            gsap.to(".insta,.linkedin,.Youtube", {
                scrollTrigger: {
                    trigger: ".insta,.linkedin,.Youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: -680,
                rotate: -360,
                duration: 5,
            });

            gsap.to(".insta-img,.linkedin-img,.youtube", {
                scrollTrigger: {
                    trigger: ".insta-img,.linkedin-img,.youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 450,
                rotate: 360,
                duration: 5,
            });
        },

        // Tablet
        "(min-width: 768px) and (max-width: 1024px)": function () {
            gsap.to(".insta,.linkedin,.Youtube", {
                scrollTrigger: {
                    trigger: ".insta,.linkedin,.Youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: -400,
                rotate: -360,
                duration: 5,
            });

            gsap.to(".insta-img,.linkedin-img,.youtube", {
                scrollTrigger: {
                    trigger: ".insta-img,.linkedin-img,.youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 300,
                rotate: 360,
                duration: 5,
            });
        },

        // Mobile
        "(max-width: 767px)": function () {
            gsap.to(".insta,.linkedin,.Youtube", {
                scrollTrigger: {
                    trigger: ".insta,.linkedin,.Youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 50,
                rotate: 360,
                duration: 5,
            });

            gsap.to(".insta-img,.linkedin-img,.youtube", {
                scrollTrigger: {
                    trigger: ".insta-img,.linkedin-img,.youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 360,
                rotate: 360,
                duration: 5,
            });
        },
        "(max-width: 380px)": function () {
            gsap.to(".insta,.linkedin,.Youtube", {
                scrollTrigger: {
                    trigger: ".insta,.linkedin,.Youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 50,
                rotate: 360,
                duration: 5,
            });

            gsap.to(".insta-img,.linkedin-img,.youtube", {
                scrollTrigger: {
                    trigger: ".insta-img,.linkedin-img,.youtube",
                    toggleActions: "restart pause reverse pause",
                },
                x: 320,
                rotate: 360,
                duration: 5,
            });
        }

    });


    return (
        <div className='full' >
            <div className='container-1' ref={Home}>

                <div className='top' >
                    <div className='nav'>
                        <div className='logo-part'>

                            <img className='logo' src={assets.logo} alt="" />
                            <img className='logo-resp width' src={assets.logoresp} alt="" />
                            <div className='main-headding'>DocMinds</div>

                            <div className='nav-list'>
                                <a className='cursor scale trans'>Home</a>
                                <a className='cursor scale trans' onClick={scrollToForm} >Contact Us</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='part1'>

                    <div className='part1-1'>
                        <img className='line-img' src={assets.Groupline} alt="" />
                        <img className='line-img-2 width' src={assets.lineimg2} alt="" />
                    </div>

                    <div className='color1'>
                        <img src={assets.color1} alt="" />
                    </div>
                </div>
                <div className='part2' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='part2-1' >
                        <div className='headding'>DOC MINDS</div>
                        <div className='sub-headding'>Healthcare Evolved : Innovative Solutions</div>
                        <div className='para para-width'>Built to streamline everything from appointments to estimations, DocMinds replaces manual chaos with automation, real-time tracking and department-level coordination.</div>
                        <div className='part2-2'>
                            <button className='btn1 scale trans' onClick={scrollToForm2} >Know More</button>
                            <button className='btn2 scale trans' onClick={scrollToForm}><img className='icon' onClick={scrollToForm} src={assets.playimg} alt="" />Book Demo</button>
                        </div>
                    </div>

                    <img className='main-img' src={assets.mainimg} alt="" />
                    <img className='main-img-resp width' src={assets.mainimgresp} alt="" />

                </div>
                <img className='yellow-color' src={assets.yellowcolor} alt="" />

                <div className="part3" data-aos="fade-up-right"
                    // data-aos-anchor-placement="top-center"
                    data-aos-duration="1000" >
                    <img className='sub-img' src={assets.subimg} alt="" />
                    <img className='sub-img-resp width' src={assets.subimgresp} alt="" />
                    <div className="part3-2" >
                        <div className='sub-headding-1' >Why Choose DocMinds?</div>
                        <div className='para1 gap'>DocMinds combines the power of queue visibility with hospital-wide workflow automation—making it the perfect solution for hospitals, clinics, diagnostic centers and healthcare groups.
                            From front desk check-ins to doctor dashboards, every action in DocMinds is connected and traceable, ensuring that no patient, doctor, or service is ever left out of sync.</div>
                    </div>
                </div>

                {/* keyfeatures */}

                <div className="keyfeatures" >
                    <div className='keyfeatures-part-1' data-aos="fade-up"
                        // data-aos-anchor-placement="top-center"
                        data-aos-duration="1000">
                        <div className="sub-headding-2" ref={knowMore}>Key Features</div>
                    </div>
                    <div data-aos="fade-up"
                        // data-aos-anchor-placement="top-center"
                        data-aos-duration="1000">
                        <Keyfeatures />
                    </div>
                </div>

                <img className='fuchsia-color' src="./src/assets/fuchsia.svg" alt="" />

                <div className="part5" data-aos="fade-up-left" data-aos-duration="1000">
                    <div className='part5-1'>
                        <img className='img1' src={assets.tabletimg} alt="" />
                        <img className='tablet-img-resp width' src={assets.tabletimgresp} alt="" />
                    </div>

                    <div className='part5-2' >
                        <div className='sub-headding-2'>Secure. Scalable. Customizable.</div>
                        <div className='para1 gap'>DocMinds is cloud-ready and secure with role-based access, real-time sync and modular design. Whether you're a single-department clinic or a large hospital with multiple units, DocMinds adapts to your needs - not the other way around.</div>
                    </div>
                </div>
            </div>


            <div className='container-2 bg-color' >

                {/* Management */}

                <div className='management flex' data-aos="fade-up"
                    // data-aos-anchor-placement="top-center"
                    data-aos-duration="1000">
                    <div className='management-part-1' >
                        <div className="sub-headding-3">Management</div>
                        <div className="sub-para gap para-width">Gain complete operational visibility across departments with DocMinds. Monitor real-time analytics on OPD volumes, appointment trends, estimation statuses and departmental performance - all from a unified dashboard. Make informed decisions, approve processes instantly and ensure every unit is aligned with institutional goals.</div>
                    </div>

                    <div className='management-part-2'>
                        <img className='management-img-1' src={assets.managementimg} alt="" />
                        <img className='management-img-resp width' src={assets.managementimgresp} alt="" />
                    </div>
                </div>

                <div className="doctor flex" data-aos="fade-up"
                    //   data-aos-anchor-placement="top-center"
                    data-aos-duration="1000" >
                    <div>
                        <img className='mobile-app width' src={assets.mobileapp} alt="" />
                    </div>

                    {/* Doctors */}

                    <div className="doctor-part-1" >
                        <div className="sub-headding-3">Doctors</div>
                        <div className="sub-para gap font-width">DocMinds simplifies clinical workflows so doctors can focus entirely on care. Access your live appointment queue, start and end consultations, manage cross-referrals and close OPD sessions - all in one streamlined interface. Designed for speed, accuracy and convenience, it’s everything a doctor needs at their fingertips.</div>
                    </div>
                    <div>
                        <img className='doctor-img-2' src={assets.doctorimg2} alt="" />
                    </div>
                </div>

                {/* Admins */}

                <div className="admin flex" data-aos="fade-up"
                    //   data-aos-anchor-placement="top-center"
                    data-aos-duration="1000" >
                    <div className="admin-part-1">
                        <img className='admin-img' src={assets.admin} alt="" />
                        <img className='admin-img-resp' src={assets.adminresp} alt="" />
                    </div>

                    <div className="admin-part-2">
                        <div className="sub-headding-3">Admins</div>
                        <div className="sub-para gap">Take control of hospital operations with tools that are built for action. From managing user roles and approvals to tracking estimations, cancellations and department-wise schedules, DocMinds enables admins to coordinate effortlessly and maintain operational discipline across the system.</div>
                    </div>
                </div>

                {/* Executives */}

                <div className="executives flex padding pb" data-aos="fade-up"
                    //   data-aos-anchor-placement="top-center"
                    data-aos-duration="1000" >
                    <div className="executives-part-1">
                        <div className="sub-headding-3">Executives</div>
                        <div className="sub-para gap">The face of hospital efficiency lies in the hands of your executives - and DocMinds is built to support them every step of the way. From managing registrations and walk-ins to coordinating service slots, follow-ups, and MHC flow, every task becomes faster, clearer and more reliable.</div>
                    </div>

                    <div className="executives-part-2">
                        <img className='executive-img' src={assets.executive} alt="" />
                        <img className='executive-img-resp width' src={assets.executiveresp} alt="" />
                    </div>
                </div>
            </div>

            {/* <div className='container-3' ref={About}>
                <div className='slide-part'>
                    <div className="about-part">
                        <div>
                            <Slide />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container-4'>
                <div className="request-demo-part" >
                    <div>
                        <img className='color-line' src={assets.colorline} alt="" />
                        <img className='color-line-resp' src={assets.colorlineresp} alt="" />
                    </div>

                    <img className='demo-color' src={assets.fuchsia} alt="" />

                    <div className='request-demo-part-1'>
                        <div className='flex-1' data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1000">
                            <div className="demo-sub-headding-1">Step Into the Future of Healthcare Operations</div>
                            <div className="demo-headding">Ready to Experience the Future of Hospital Operations?</div>
                            <div className="demo-sub-headding-2">DocMinds isn’t just software - it’s your hospital’s digital brain.</div>
                            <div className="demo-para">Streamline your hospital operations and deliver a next-gen patient experience with DocMinds. Book a Demo Today and witness the transformation in real time.</div>
                            <button className='demo-btn scale trans' onClick={scrollToForm}>Request Demo</button>
                        </div>

                        <div className='flex-2' data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1000">
                            <img className='demo-img scale trans' src={assets.demoimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-5' ref={demoForm}>
                <div className="form-part">
                    <div className='form-part-1'>
                        <div className='form-part-2'>
                            <div className='form-sub-headding-1 '>Interested in Our Product?</div>
                            <div className='form-sub-headding-2 gap'>Looking for a demo, or have questions about </div>
                            <div className='form-headding gap scale trans'>Doc<span className='span-1'>Minds</span><span className='span-2'>?</span></div>
                            <div className='form-para gap'>We’d love to help you explore how DocMinds can simplify your hospital’s daily operations.</div>

                            <div className='mail scale trans'>
                                <img className='mail-img' src={assets.email} alt="" />
                                <a href='mailto:inventionmindsblr@gmail.com' className='form-mail gap'> inventionmindsblr@gmail.com</a>
                            </div>

                            <div className='phone scale trans'>
                                <img className='phone-img' src={assets.phone} alt="" />
                                <a href='tel:+91 98440 05600' className='form-contact gap '> +91 98440 05600</a>
                            </div>

                        </div>

                        <div >
                            <form onSubmit={handleSubmit(sendEmail)} ref={form}>
                                <input
                                    className='input-name style underline'
                                    type="text"
                                    {...register("name", {
                                        required: "Name  field is required",
                                        maxLength: {
                                            value: 20,
                                            message: "Name cannot exceed 20 characters"
                                        },
                                        pattern: {
                                            // value: /^[A-Za-z\s]+$/i,
                                            value: "[\s\S]*",
                                            message: "Alphabetical characters only"
                                        }
                                    })}
                                    placeholder="Full Name*"
                                />
                                {errors.name && <p className='alert-msg'>{errors.name.message}</p>}

                                <div className='flex1 flex2'>
                                    <div>
                                        <input
                                            className='input-mail style gap underline'
                                            type='email'
                                            {...register("email", {
                                                required: "Email ID is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            placeholder="Email ID*"
                                        />
                                        {errors.email && <p className='alert-msg'>{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            className='input-number style gap underline'
                                            {...register("phone", {
                                                required: "Phone number is required",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Invalid phone number (10 digits required)"
                                                }
                                            })}
                                            placeholder="Phone Number*"
                                        />
                                        {errors.phone && <p className='alert-msg'>{errors.phone.message}</p>}
                                    </div>

                                </div>

                                <textarea
                                    className='input-msg style gap underline'
                                    {...register("message", {
                                        required: "Message is required",
                                        minLength: {
                                            value: 10,
                                            message: "Message must be at least 10 characters"
                                        },
                                        maxLength: {
                                            value: 200,
                                            message: "Message cannot exceed 200 characters"
                                        }
                                    })}
                                    placeholder="Messages*"
                                />
                                {errors.message && <p className='alert-msg'>{errors.message.message}</p>}

                                <div className='btn-part'>
                                    <button className='form-btn scale trans' type="submit"><img className='btn-arrow' src={assets.btnarrow} alt="" />Submit</button>
                                </div>

                            </form>

                            <div className='form-imgs'>
                                {/* <a href="https://x.com/i/flow/login"><img  className='cursor' src={assets.twitter} alt="" /></a> */}
                                {/* <a href="https://www.facebook.com/"><img className='cursor' src={assets.facebook} alt="" /></a> */}
                                <a href="https://www.instagram.com/invention_minds2023?igsh=Y3djbTVxem1pYWRw"><img className='insta-img cursor scale trans' src={assets.insta} alt="" /></a>
                                <a href="https://www.linkedin.com/in/invention-minds-9160b8344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='linkedin-img cursor scale trans' src={assets.linkedin} alt="" /></a>
                                <a href="https://www.youtube.com/channel/UCWG15z1YsG8Kv2VJ37O8iHA"><img className='youtube scale trans' src={assets.youtube} alt="" /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container-6'>

                <div className="imgs">
                    {/* <img className='facebook cursor back-ground' src={assets.facebookimg} alt="" /> */}
                    <a href="https://www.instagram.com/invention_minds2023?igsh=Y3djbTVxem1pYWRw"><img className='insta cursor back-ground img scale trans' src={assets.instaimg} alt="" /></a>
                    {/* <img className='twitter cursor back-ground' src={assets.twitterimg} alt="" /> */}
                    <a href="https://www.linkedin.com/in/invention-minds-9160b8344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='linkedin cursor back-ground img scale trans' src={assets.linkedinimg} alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCWG15z1YsG8Kv2VJ37O8iHA"><img className=' Youtube back-ground img scale trans' src={assets.youtubeimg} alt="" /></a>
                </div>

                <div className='part-12'>
                    <button className='btn-3 cursor scale trans'><img className='btn-img' src={assets.logo} alt="" />DocMinds</button>

                    <div>
                        <div className='part-12-1'>
                            <div className='cursor scale trans' onClick={scrollToForm3}>Home</div>
                            <a className='cursor about scale trans' href="https://www.inventionminds.com/"><div >About</div></a>
                            <div className='cursor scale trans' onClick={scrollToForm}>Contact Us</div>
                        </div>
                    </div>

                    <button className='btn-4 cursor scale trans' onClick={scrollToForm}>Contact Us</button> </div>

                <div>
                    <div className='bottom-line'></div>
                    <div className='copyright'>© 2025 All Rights Reserved</div>
                </div>

            </div>

        </div>

    )
}

export default Homepage;