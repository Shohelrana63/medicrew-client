import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import testimonials from '../../Data/testimonials';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Testimonials = () => {
    const testimonialsData = testimonials;
    console.log("testimonialsData", testimonialsData)

    return (
        <section className="testimonials my-5 py-4">
            <div className="container">
                <div className="section-header">
                    <h3 className="text-primary text-center heading-text text-uppercase">Testimonial</h3>
                    <h1 className="style-color text-center heading-text">
                        What Our Patients Says
                    </h1>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView="auto"
                    centeredslide="false"
                    navigation
                    autoplay={true}
                    key={testimonials.length}
                >
                    {testimonialsData.map((testimonials, index) => (
                        <SwiperSlide key={index}>
                            <Testimonial testimonials={testimonials} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;