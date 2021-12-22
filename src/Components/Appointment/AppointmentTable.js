import React, { useContext } from 'react';
import { DataContext } from '../../App';
// import doctors from '../../Data/doctors';
import AppointmentCard from './AppointmentCard';

const AppointmentTable = ({date}) => {
    // const doctorsData = doctors;
    const contextDoctor = useContext(DataContext);
    console.log("contextDoctor",contextDoctor)
    
    return (
        <div className="appointments container mt-5">
            <h3 className="text-primary text-center my-5">
				Available Appointments on {date.toDateString()}
			</h3>
            <div className="row">
                { 
                       contextDoctor.allDoctors.map((doctorsData) => 
                        <AppointmentCard key={doctorsData.id} date={date} doctorsData={doctorsData}/>
                        )
                    }
			</div>
        </div>
    );
};

export default AppointmentTable;