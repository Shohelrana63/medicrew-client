import React from 'react';
import Banner from '../Components/Banner/Banner';
import Blogs from '../Components/Blogs/Blogs';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Testimonials from '../Components/Testimonials/Testimonials';

const Reviews = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default Reviews;