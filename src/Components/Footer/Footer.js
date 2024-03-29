import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        { name: "Medicrew is an Online Doctor's Consultation web Application.", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Contact Us", link: "/contact" },
        { name: "Easy Payment", link: "/payment" },
        { name: "Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Medical Research", link: "/research" }
    ]
    const explore = [
        { name: "Emergency Health Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Medi Shop", link: "/medishop" },
        { name: "Check Up", link: "/checkup" },
        { name: "Covid-19", link: "/covid" },
        { name: "Review", link: "/reviews" }
    ]
    const ourAddress = [
        { name: "Dhanmondi 8/A, Dhaka, Bangladesh", link: "/https://www.google.com/maps" },
        { name: "View In Map", link: "/https://www.google.com/maps" },

    ]
    return (
        <section className="footer my-5">
            <div className="container pt-3">
                <div className="row py-5">
                    <FooterCol style={{lineHeight:1.9}} key={1} menuTitle={"Medicrew"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Explore" menuItems={explore} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="">
                            <h6>Call now</h6>
                            <button className="btn btn-style">+880 1704690563</button>
                            <button className="btn btn-style mt-2">+880 1303815116</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center mt-5">
                    <p className="text-primary  pb-3">Copyright @Medicrew {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;