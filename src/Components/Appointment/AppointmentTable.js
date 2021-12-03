import React from 'react';
import doctors from '../../Data/doctors';
import AppointmentCard from './AppointmentCard';

const AppointmentTable = ({date}) => {
    const doctorsData = doctors;
    
    return (
        <div className="appointments container mt-5">
            <h3 className="text-primary text-center my-5">
				Available Appointments on {date.toDateString()}
			</h3>
            <div className="row">
                { 
                        doctorsData && doctorsData.map((doctorsData) => 
                        <AppointmentCard key={doctorsData.id} date={date} doctorsData={doctorsData}/>
                        )
                    }
			</div>
        </div>
    );
};

export default AppointmentTable;