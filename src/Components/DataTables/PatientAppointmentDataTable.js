import React from 'react';

const PatientAppointmentDataTable = ({appointments}) => {
    return (
        <div>
           <h1>PatientAppointment:
               {appointments.length}</h1> 
        </div>
    );
};

export default PatientAppointmentDataTable;