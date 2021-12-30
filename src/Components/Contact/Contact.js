import React from 'react';
import address from "../../Images/icon/address.png";
import phone from "../../Images/icon/phone.png";
import email from "../../Images/icon/email.png";

const Contact = () => {
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
                    <form action="">
                        <div className="form-group">
                            <input type="text" placeholder="Name" name="name" className="form-control p-4"/>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" name="email" className="form-control p-4"/>
                        </div>
                        <div className="form-group">
                            <input type="phone" placeholder="Phone No." name="phone" className="form-control p-4"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control p-4" rows="4" placeholder="Message" name="message"></textarea>
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