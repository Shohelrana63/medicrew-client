import React, { useState } from 'react';
import departmentData from '../../Data/departmentData';
import "./Department.css";

const Department = () => {
    const data = departmentData;
    const [showDepartment, setShowDepartment] = useState(data[0]);

    return (
        <div className="container department-section my-5">
            <h1 className="text-center heading-text mb-5">Our Departments</h1>
            <div className="row">
                <div className="col-md-4 department-icon text-center justify-content-between">
                    {
                        data.map(department =>
                            <div key={department.name} onClick={() => setShowDepartment(department)}>
                                <div className="dept ">
                                    <img src={department.icon} alt="" />
                                    <p>{department.name}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-8">
                    <div className="dept-details item">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>{showDepartment.name}</h3>
                                <div className="d-flex">
                                    <div className="col-md-7">
                                        <p>{showDepartment.defination}</p>
                                        <span>{showDepartment.description}</span>
                                        <ul>
                                            <li>{showDepartment.list}</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={showDepartment.photo} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;