import React from 'react';
import DataTable from '../DataTables/DataTable';
import PatientsDataTable from '../DataTables/PatientsDataTable';
import Sidebar from './Sidebar';

const Patients = () => {
    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div id="responsive-dashboard" className="col-md-10 p-4 pr-5"
             style={{position:"absolute", right:"-13px", backgroundColor: "#F4FDFB"}}>
				<h5 className="mb-5">Patients</h5>
                <DataTable tableName="All Patients">
					<PatientsDataTable />
				</DataTable>
			</div>
        </div>
    );
};

export default Patients;