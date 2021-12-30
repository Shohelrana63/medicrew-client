import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from './Pages/Appointment';
import Reviews from './Pages/Reviews';
import Login from './Pages/Authentication/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import PatientAppointment from './Pages/Dashboard/PatientAppointment';
import Patients from './Components/Dashboard/Patients';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import AddReview from './Pages/Dashboard/AddReview';
import Prescription from './Pages/Dashboard/Prescription';
import PatientPrescription from './Pages/Dashboard/PatientPrescription';
import Payment from './Components/Payment/Payment';
import Contacts from './Pages/Contacts';

export const DataContext = createContext();
export const CalenderContext = createContext();
function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  const [ allBookedAppointments, setAllBookedAppointments ] = useState([]);
  const [ allDoctors, setAllDoctors ] = useState([]);
  const[admin, setAdmin] = useState({
    email: 'ad@gmail.com',
    password: 'ad12345'
  });
  const[formAdmin, setFormAdmin] = useState({
    email:"",
    password:"",
  });
  const[userType, setUserType] = useState("");
  const [ date, setDate ] = useState(new Date());
  useEffect(
		() => {
			fetch('http://localhost:8000/bookedAppointments')
				.then((res) => res.json())
				.then((data) => 
        setAllBookedAppointments(data));
		},
		[ allBookedAppointments.length ]
	);
  // console.log("appointment",allBookedAppointments);
  // Load all Doctors Information
	useEffect(
		() => {
			fetch('http://localhost:8000/doctors')
				.then((res) => res.json())
				.then((data) => {
          setAllDoctors(data);
			});
		},
		[ allDoctors.length ]
	);
console.log("allAppointments",allDoctors);

  const contextData={
    loggedInUser, setLoggedInUser,
    allBookedAppointments,setAllBookedAppointments,
    allDoctors, setAllDoctors ,
    admin, setAdmin,
    formAdmin, setFormAdmin,
    userType, setUserType
  };
  const calenderContextValue = { date, setDate };

  return (
    <DataContext.Provider value={contextData}>
      <CalenderContext.Provider value={calenderContextValue}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment/>
            </Route>
            <Route path="/reviews">
              <Reviews/>
            </Route>
            <Route path="/contact">
              <Contacts/>
            </Route>
            <Route exact path="/dashboard">
              <Login/>
            </Route>
            <PrivateRoute path="/dashboard/dashboard">
               <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/my-appointment">
							<PatientAppointment />
						</PrivateRoute>
            <PrivateRoute path="/dashboard/patients">
             <Patients />
						</PrivateRoute>
            <PrivateRoute path="/dashboard/doctors">
              <AddDoctor/>
						</PrivateRoute>
            <PrivateRoute path="/dashboard/prescriptions">
							<Prescription />
						</PrivateRoute>
            <PrivateRoute path="/dashboard/my-prescriptions">
							<PatientPrescription />
						</PrivateRoute>
            <PrivateRoute path="/dashboard/reviews">
              <AddReview/>
						</PrivateRoute>
            <PrivateRoute path="/dashboard/payment">
              <Payment/>
            </PrivateRoute>
          </Switch>
        </Router>
        </CalenderContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
