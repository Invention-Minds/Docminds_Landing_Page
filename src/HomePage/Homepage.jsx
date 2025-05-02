import React, { useRef } from 'react'
import './HomePage.css'
import { useForm } from "react-hook-form";
import Slide from '../swiper/swiper';
import Keyfeatures from '../keyfeatures/Keyfeatures';
import emailjs, { sendForm } from '@emailjs/browser';


const Homepage = () => {

    const demoForm = useRef(null);
    const knowMore = useRef(null);
    const Home = useRef(null);
    const About = useRef(null);
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
    const scrollToForm4 = () => {
        About.current?.scrollIntoView({ behavior: 'smooth' });
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
                    console.log('FAILED...',error)
                }
            )
    }


    return (
        <div className='full'>
            <div className='container-1' ref={Home}>
                <div className='top' >
                    <div className='nav'>
                        <div className='logo-part'>
                            <img className='logo' src="./src/assets/logo.svg" alt="" />
                            <img className='logo-resp width' src="./src/assets/logo-resp.svg" alt="" />
                            <div className='main-headding'>DocMinds</div>
                            <div className='nav-list'>
                            <a className='cursor'>Home</a>
                            <a className='cursor' onClick={scrollToForm} >Contact Us</a>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div className='part1'>
                    <div className='part1-1'>
                        <img className='line-img' src="./src/assets/Groupline.svg" alt="" />
                        <img className='line-img-2 width' src="./src/assets/line-img-2.svg" alt="" />
                    </div>
                    <div className='color1'>
                        <img src="./src/assets/color1.svg" alt="" />
                    </div>
                </div>
                <div className='part2'>
                    <div className='part2-1'>
                        <div className='headding'>DOC MINDS</div>
                        <div className='sub-headding'>Healthcare Evolved : Innovative Solutions</div>
                        <div className='para para-width'>Built to streamline everything from appointments to estimations, DocMinds replaces manual chaos with automation, real-time tracking and department-level coordination.</div>
                        <div className='part2-2'>
                            <button className='btn1' onClick={scrollToForm2}>Know More</button>
                            <button className='btn2' onClick={scrollToForm}><img className='icon' onClick={scrollToForm} src="./src/assets/play-circle.svg" alt="" />Book Demo</button>
                        </div>
                    </div>
                    <img className='main-img' src="./src/assets/main-img.svg" alt="" />
                    <img className='main-img-resp width' src="./src/assets/main-img-resp.svg" alt="" />
                </div>
                <img className='yellow-color' src="./src/assets/yellowcolor.svg" alt="" />
                <div className="part3">
                    <img className='sub-img' src="./src/assets/sub-img.svg" alt="" />
                    <img className='sub-img-resp width' src="./src/assets/sub-img-resp.svg" alt="" />
                    <div className="part3-2">
                        <div className='sub-headding-1'>Why Choose DocMinds?</div>
                        <div className='para1 gap'>DocMinds combines the power of queue visibility with hospital-wide workflow automation—making it the perfect solution for hospitals, clinics, diagnostic centers and healthcare groups.
                            From front desk check-ins to doctor dashboards, every action in DocMinds is connected and traceable, ensuring that no patient, doctor, or service is ever left out of sync.</div>
                    </div>
                </div>
                <div className="keyfeatures" >
                    <div className='keyfeatures-part-1'>
                        <div className="sub-headding-2" ref={knowMore}>Key Features</div>
                        {/* <svg className='keyfeatures-arrow' xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 49 44" fill="none">
                            <path d="M2 0.5C1.17157 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17157 3.5 2 3.5V0.5ZM37 2H38.5V0.5H37V2ZM35.9393 43.0607C36.5251 43.6464 37.4749 43.6464 38.0607 43.0607L47.6066 33.5147C48.1924 32.9289 48.1924 31.9792 47.6066 31.3934C47.0208 30.8076 46.0711 30.8076 45.4853 31.3934L37 39.8787L28.5147 31.3934C27.9289 30.8076 26.9792 30.8076 26.3934 31.3934C25.8076 31.9792 25.8076 32.9289 26.3934 33.5147L35.9393 43.0607ZM2 2V3.5H37V2V0.5H2V2ZM37 2H35.5V42H37H38.5V2H37Z" fill="white" />
                        </svg> */}
                    </div>
                    <div>
                        <Keyfeatures />
                    </div>
                </div>
                <img className='fuchsia-color' src="./src/assets/fuchsia.svg" alt="" />
                <div className="part5">
                    <div className='part5-1'>
                        <img className='img1' src="./src/assets/Tablet-img.svg" alt="" />
                        <img className='tablet-img-resp width' src="./src/assets/tablet-img-resp.svg" alt="" />
                    </div>
                    <div className='part5-2'>
                        <div className='sub-headding-2'>Secure. Scalable. Customizable.</div>
                        <div className='para1 gap'>DocMinds is cloud-ready and secure with role-based access, real-time sync and modular design. Whether you're a single-department clinic or a large hospital with multiple units, DocMinds adapts to your needs - not the other way around.</div>
                    </div>
                </div>
            </div>
            <div className='container-2 bg-color'>
                <div className='management flex '>
                    <div className='management-part-1'>
                        <div className="sub-headding-3">Management</div>
                        <div className="sub-para gap para-width">Gain complete operational visibility across departments with DocMinds. Monitor real-time analytics on OPD volumes, appointment trends, estimation statuses and departmental performance - all from a unified dashboard. Make informed decisions, approve processes instantly and ensure every unit is aligned with institutional goals.</div>
                    </div>
                    <div className='management-part-2'>
                        <img className='management-img-1' src="./src/assets/management-img.svg" alt="" />
                        <img className='management-img-resp width' src="./src/assets/management-img-resp.svg" alt="" />
                    </div>
                </div>
                <div className="doctor flex ">
                    <div>
                        <img className='mobile-app width' src="./src/assets/Mobile-App.svg" alt="" />
                    </div>
                    <div className="doctor-part-1">
                        <div className="sub-headding-3">Doctors</div>
                        <div className="sub-para gap font-width">DocMinds simplifies clinical workflows so doctors can focus entirely on care. Access your live appointment queue, start and end consultations, manage cross-referrals and close OPD sessions - all in one streamlined interface. Designed for speed, accuracy and convenience, it’s everything a doctor needs at their fingertips.</div>
                    </div>
                    <div>
                        <img className='doctor-img-2' src="./src/assets/doctor-img2.svg" alt="" />
                    </div>
                </div>
                <div className="admin flex">
                    <div className="admin-part-1">
                        <img className='admin-img' src="./src/assets/admin-img.svg" alt="" />
                        <img className='admin-img-resp' src="./src/assets/admin-img-resp.svg" alt="" />
                    </div>
                    <div className="admin-part-2">
                        <div className="sub-headding-3">Admins</div>
                        <div className="sub-para gap">Take control of hospital operations with tools that are built for action. From managing user roles and approvals to tracking estimations, cancellations and department-wise schedules, DocMinds enables admins to coordinate effortlessly and maintain operational discipline across the system.</div>
                    </div>
                </div>
                <div className="executives flex padding">
                    <div className="executives-part-1">
                        <div className="sub-headding-3">Executives</div>
                        <div className="sub-para gap">The face of hospital efficiency lies in the hands of your executives - and DocMinds is built to support them every step of the way. From managing registrations and walk-ins to coordinating service slots, follow-ups, and MHC flow, every task becomes faster, clearer and more reliable.</div>
                    </div>
                    <div className="executives-part-2">
                        <img className='executive-img' src="./src/assets/executive-img.svg" alt="" />
                        <img className='executive-img-resp width' src="./src/assets/executive-img-resp.svg" alt="" />
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
                <div className="request-demo-part">
                    <div>
                        <img className='color-line' src="./src/assets/color-line.svg" alt="" />
                        <img className='color-line-resp' src="./src/assets/color-line-resp.png" alt="" />
                    </div>
                    <img className='demo-color' src="./src/assets/fuchsia.svg" alt="" />
                    <div className='request-demo-part-1'>
                        <div className='flex-1'>
                            <div className="demo-sub-headding-1">Step Into the Future of Healthcare Operations</div>
                            <div className="demo-headding">Ready to Experience the Future of Hospital Operations?</div>
                            <div className="demo-sub-headding-2">DocMinds isn’t just software - it’s your hospital’s digital brain.</div>
                            <div className="demo-para">Streamline your hospital operations and deliver a next-gen patient experience with DocMinds. Book a Demo Today and witness the transformation in real time.</div>
                            <button className='demo-btn' onClick={scrollToForm}>Request Demo</button>
                        </div>
                        <div className='flex-2'>
                            <img className='demo-img' src="./src/assets/demo-img.svg" alt="" />

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
                            <div className='form-headding gap'>Doc<span className='span-1'>Minds</span><span className='span-2'>?</span></div>
                            <div className='form-para gap'>We’d love to help you explore how DocMinds can simplify your hospital’s daily operations.</div>
                            <div className='mail'>
                                <img className='mail-img' src="./src/assets/Email.svg" alt="" />
                                <a href='mailto:inventionmindsblr@gmail.com' className='form-mail gap'> inventionmindsblr@gmail.com</a>
                            </div>
                            <div className='phone'>
                                <img className='phone-img' src="./src/assets/phone.svg" alt="" />
                                <a href='tel:+91 98440 05600' className='form-contact gap'> +91 98440 05600</a>
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
                                    <button className='form-btn' type="submit"><img className='btn-arrow' src="./src/assets/arrow-right-o.svg" alt="" />Submit</button>
                                </div>
                            </form>

                            <div className='form-imgs'>
                                <a href="https://x.com/i/flow/login"><img  className='cursor' src="./src/assets/twitter.svg" alt="" /></a>
                                <a href="https://www.facebook.com/"><img className='cursor' src="./src/assets/facebook.svg" alt="" /></a>
                                <a href="https://www.instagram.com/"><img className='cursor' src="./src/assets/instagram.svg" alt="" /></a>
                                <a href="https://www.linkedin.com/login"><img className='cursor' src="./src/assets/linkedin.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-6'>
                <div className="imgs">
                    <img className='facebook cursor back-ground' src="./src/assets/facebook-img.svg" alt="" />
                    <img className='insta cursor back-ground' src="./src/assets/insta-img.svg" alt="" />
                    <img className='twitter cursor back-ground' src="./src/assets/twitter-img.svg" alt="" />
                    <img className='linkedin cursor back-ground' src="./src/assets/linkedin-img.svg" alt="" />
                </div>
                <div className='part-12'>
                    <button className='btn-3 cursor'><img className='btn-img' src="./src/assets/logo.svg" alt="" />DocMinds</button>
                    <div>
                        <div className='part-12-1'>
                            <div className='cursor' onClick={scrollToForm3}>Home</div>
                            <div className='cursor' onClick={scrollToForm4}>About</div>
                            <div className='cursor' onClick={scrollToForm}>Contact Us</div>
                        </div>
                    </div>
                    <button className='btn-4 cursor' onClick={scrollToForm}>Contact Us</button> </div>
                <div>
                    <div className='bottom-line'></div>
                    <div className='copyright'>© 2025 All Rights Reserved</div>
                </div>
            </div>

        </div>

    )
}

export default Homepage;