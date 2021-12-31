import React from 'react';
import covid19 from '../../Data/covid19';
import Covid19Post from './Covid19Post';
import "./Covid19.css";

const Covid19 = () => {
    const protectData = covid19;

    return (
        <section className="covid my-5">
            <div className="container">
                <div className="section-header">
                    <div className="covid-update">
                    <h2 className="style-color text-center heading-text">
                    COVID-19 <br /> <span style={{color: '#3a4256'}}>ALL UPDATE</span> 
                    </h2>
                         <div className="row py-5 text-center">
                             <div className=" col-md-3 mt-2">
                                 <div className="confirm">
                                    <h2>739385</h2>
                                    <p>Confirmed</p>
                                 </div>
                             </div>
                             <div className="col-md-3 mt-2">
                                 <div className="recover">
                                    <h2>220826</h2>
                                    <p>Recovered</p>
                                 </div>
                             </div>
                             <div className="col-md-3 mt-2">
                                 <div className="death">
                                    <h2>55986</h2>
                                    <p>Deaths</p>
                                 </div>
                             </div>
                             <div className="col-md-3 mt-2">
                                 <div className="country">
                                    <h2>200+</h2>
                                    <p>Countriess</p>
                                 </div>
                             </div>
                         </div>
                    </div>
                    <h5 className="text-primary text-center heading-text text-uppercase mt-5">How To Protect Yourself</h5>
                    <h2 style={{color: '#3a4256'}} className="text-center">
                    Stay Safe From The Coronavirus
                    </h2>
                    <div className="row mt-5">
                    {
                        protectData.map(data => <Covid19Post data={data}/>)
                    }
                </div>
                <div className="text-center info  my-5">
                    <button className="btn btn-pulse btn-style my-5">
                        <a href="https://corona.gov.bd/">
                            All Corona Information
                            <br />
                            Click Here
                        </a>
                    </button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Covid19;