import React, { useState } from 'react';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import AppointmentTable from '../Components/Appointment/AppointmentTable';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
const Appointment = () => {
    const[selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = date => {
        setSelectedDate(date)
        // console.log("date", date)
    }
    return (
        <div>
            <Navbar/>
            <AppointmentSection handleChange={handleChange} />
            <AppointmentTable date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default Appointment;