import React from 'react';
import address from "../../Images/icon/address.png";
import phone from "../../Images/icon/phone.png";
import email from "../../Images/icon/email.png";
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4lb5ahk', 'template_d5qg0l4', e.target, 'user_QmQR5yHlyKi9kaOT60TwB')
            .then((result) => {
                alert('Thank you! Your Message Send Successfully');
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value = "";
                document.getElementById('message').value = "";
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="Contact">  
        <div className="container py-5">
        <div className="section-header text-center">
            <h1 className="text-primary heading-text text-uppercase">CONTACT US</h1>
         </div>
         <div className="row mt-4 mt-5">
                <div className="col-md-5">
                    <div className="card text-center">
                        <div className="card-body">
                            <div>
                                <img style={{width: "45px"}} src={address} alt="" />
                                <h4>Address</h4>
                                <p>Dhanmondi 8/A, Dhaka, Bangladesh</p>
                            </div>
                            <div  className="pt-3">
                                <img style={{width: "45px"}} src={phone} alt="" />
                                <h4>Phone</h4>
                                <p>+88017000000</p>
                            </div>
                            <div className="pt-3">
                                <img style={{width: "45px"}} src={email} alt="" />
                                <h5>Email</h5>
                                <p>medicrewbd@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 mt-md-0 mt-5">
                    <form action="" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" id="name" placeholder="Name" name="name" className="form-control p-4" required/>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Email" name="email" className="form-control p-4" required/>
                        </div>
                        <div className="form-group">
                            <input type="phone" id="phone" placeholder="Phone No." name="phone" className="form-control p-4" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control p-4" rows="4" placeholder="Message" id="message" name="message" required></textarea>
                        </div>
                        <input type="submit" className="btn btn-style btn-block py-3" value="SEND"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;