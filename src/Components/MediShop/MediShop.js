import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import MedishopImg from './MedishopImg';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const MediShop = () => {
    const swiperImg =[
        {   id:'01',
            img: 'https://imgur.com/UpGmKbR.png',
            name:'Lazz Pharma',
            address: '63/C Lake Circus, West Panthapat',
            phone: '+880 9666700900',
        },
        {   id:'02',
            img: 'https://imgur.com/FT8booG.png',
            name:'best buy pharma',
            address: 'Hanavi Bhabon, Plot-10 সড়ক-০৫, Dhaka 1207',
            phone: '+880 45763219820',
        },
        {   id:'03',
            img: 'https://imgur.com/iZBRQUh.png',
            name:'Popular Medicine Corner',
            address: 'Mirpur Road · In Popular Diagnostic Center Ltd. Shyamoli',
            phone: '+880 4521368795',
        },
        {   id:'04',
            img: 'https://imgur.com/JHNQ6Ai.png',
            name:'Wellbeing',
            address: '63/C Lake Circus, West Panthapat',
            phone: '+880 9666700900',
        }
    ]
    return (
        <div className="medishop">
        <div className="container my-5">
            <h1 className="text-center heading-text my-5">Our MediShop</h1>
            <div className="medishop-view">
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
        </div>
    </div>
    );
};

export default MediShop;