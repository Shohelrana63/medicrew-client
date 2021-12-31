import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import MedishopImg, { MedishopCard } from './MedishopImg';
import cart from "../../Images/serviceIcon/cart.png";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const MediShop = () => {
    const swiperImg =[
        {   id:'01',
            img: 'https://imgur.com/UpGmKbR.png',
            name:'Lazz Pharma',
            address: '743 Satmasjid Road Gawsia Twin peaks, 42-43, Sat Masjid road, Dhaka 1209',
            phone: '+880 9666700900',
        },
        {   id:'02',
            img: 'https://imgur.com/JHNQ6Ai.png',
            name:'Wellbeing',
            address: 'House # 80, Road # 8/A, Satmasjid Road, Dhaka 1209',
            phone: '+880 1668700600',
        },
        {   id:'03',
            img: 'https://imgur.com/iZBRQUh.png',
            name:'Popular Medicine Corner',
            address: 'Mirpur Road · In Popular Diagnostic Center Ltd. Shyamoli',
            phone: '+880 4521368795',
        },
        {   id:'04',
            img: 'https://imgur.com/FT8booG.png',
            name:'Best Buy Pharma',
            address: 'Hanavi Bhabon, Plot-10, Road-05, Dhaka 1207',
            phone: '+880 45763219820',
        },
    ]
    return (
        <div className="medishop">
        <div className="container my-5">
            <h1 className="text-center heading-text">Our MediShop Partners</h1>
            <p style={{color: '#3a4256'}} className="text-center">Buy Your Medicine From Our Authorized MediShop & Get Flat 8% Discount
           <span> <img src={cart} alt="" width="30"/></span> </p>
            
            <div className="single-doctor mt-5">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredslide="true"
                    navigation
                    autoplay={true}
                    key={swiperImg && swiperImg.length}
                >
                    {swiperImg.map((data, index) => (
                            <SwiperSlide key={index}>
                                <MedishopImg data={data} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className="row my-5">
            <h1 className="text-center heading-text my-5">MediShop Details</h1>
            {swiperImg.map((data, index) => (
                                    <MedishopCard data={data} />
                        ))}
            </div>
            </div>
    </div>
    );
};

export default MediShop;