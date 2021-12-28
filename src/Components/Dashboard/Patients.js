import React from 'react';
import PatientsDataTable from '../DataTables/PatientsDataTable';
import Sidebar from './Sidebar';

const Patients = () => {
    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div id="responsive-dashboard" className="col-md-10 p-4 pr-5"
             style={{right: "10px", backgroundColor: '#F4FDFB' }}>
				<h5 className="mb-5">Patients</h5>
					<PatientsDataTable />
			</div>
        </div>
    );
};

export default Patients;