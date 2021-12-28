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

export const DataContext = createContext();

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

  return (
    <DataContext.Provider value={contextData}>
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
          </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
