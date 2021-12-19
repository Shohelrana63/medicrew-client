import React, { useState } from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import PatientAppointmentDataTable from '../../Components/DataTables/PatientAppointmentDataTable';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../Components/Appointment/Calender.css'

const PatientAppointment = () => {
    const[selectedDate, setSelectedDate] = useState(new Date());
    const[appointments, setAppointments] = useState([]);

    const handleChange = date => {
		console.log("date", date)
        setSelectedDate(date)
       
        fetch('http://localhost:8000/appointmentsByDate',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }
    return (
        <div className="container-fluid row ">
			<Sidebar />
			<div
				className="col-md-10 p-4 pr-5"
				id="responsive-dashboard"
				style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB', height: '100%' }}
			>
				<h5 className="mb-5">Appointments</h5>
				<div className="row">
					<div className="col-md-6">
                    <Calendar
				onChange={handleChange}
                value={new Date()}
			/>
					</div>
					<div className="col-md-6">
						<PatientAppointmentDataTable  appointments ={appointments} />
					</div>
				</div>
			</div>
		</div>
    );
};

export default PatientAppointment;