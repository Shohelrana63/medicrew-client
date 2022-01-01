import React, { useContext } from 'react';
import doctors from '../../Data/doctors';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
import { DataContext } from '../../App';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);
const Doctors = () => {
    // const doctorsData = doctors;
    const doctorsData = useContext(DataContext)
    console.log("d",doctorsData.allDoctors)
    return (
        <div className="doctors">
            <div className="container my-5">
                <h1 className="text-center heading-text my-5">Our Doctors</h1>
                <div className="doctors-view">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredslide="true"
                        navigation
                        autoplay={true}
                        key={doctorsData.allDoctors && doctorsData.allDoctors.length}
                    >
                        {doctorsData.allDoctors &&
                            doctorsData.allDoctors.map((doctorData, index) => (
                                
                                <SwiperSlide key={index}>
                                    {console.log("data",doctorData)}
                                    <Doctor key={doctorData.id} doctorData={doctorData} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Doctors;