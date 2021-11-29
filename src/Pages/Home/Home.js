import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Blogs from '../../Components/Blogs/Blogs';
import Department from '../../Components/Department/Department';
import Doctors from '../../Components/Doctors/Doctors';
import Footer from '../../Components/Footer/Footer';
import Info from '../../Components/Info/Info';
import Navbar from '../../Components/Navbar/Navbar';
import SpecialDoctor from '../../Components/SpecialDoctor/SpecialDoctor';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Info />
            <Department />
            <Doctors />
            <Testimonials />
            <SpecialDoctor />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;