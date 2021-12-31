import React from 'react';
import './MediShop..css';

const MedishopImg = ({data}) => {
    const { img,name,address,phone } = data;
    return (
        <div className="">
            <img className="img-fluid" src={img} alt="" />
            <h4 className="text-primary font-weight-bold text-center">{name}</h4>
            <h6 className="text-center">{address}</h6>
            <h6 className="text-center"> 
            <span className="text-primary font-weight-bold">Phone:</span>  {phone}</h6>
        </div>
    );
};

export default MedishopImg;

export const MedishopCard = ({data}) => {
    const { img,name,address,phone } = data;
    return (
        <div className="col-md-4 mb-5">
        <div className="single-shop">
            <img className="img-fluid doctor-image" src={img} alt="doctor" />
            <div className="shop-description">
                <h4 className="shop-name font-weight-bold text-primary">{name}</h4>
                <p className="shop-address">
                    <span className="span text-primary">Address:</span> {address}</p>
                <p className="phone">
                <span className="span text-primary">Phone No:</span>{phone}</p>
                </div>
        </div>
        </div>
    );
};
