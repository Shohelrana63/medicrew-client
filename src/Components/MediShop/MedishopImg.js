import React from 'react';

const MedishopImg = ({data}) => {
    const { img,name,address,phone } = data;
    return (
        <div className="">
            <img className="img-fluid" src={img} alt="" />
            <h6 className="text-center">{name}</h6>
            <h6 className="text-center">{address}</h6>
            <h6 className="text-center">{phone}</h6>
        </div>
    );
};

export default MedishopImg;