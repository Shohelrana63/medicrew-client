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

export const DataContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  const [ allBookedAppointments, setAllBookedAppointments ] = useState([]);
  
  
  useEffect(
		() => {
			fetch('http://localhost:8000/bookedAppointments')
				.then((res) => res.json())
				.then((data) => 
        setAllBookedAppointments(data));
		},
		[ allBookedAppointments.length ]
	);
  console.log("appointment",allBookedAppointments);

  const contextData={
    loggedInUser, setLoggedInUser,
    allBookedAppointments,setAllBookedAppointments
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
            {/* <PrivateRoute path="/dashboard/dashboard">
               <Dashboard />
            </PrivateRoute> */}
            <Route path="/dashboard/my-appointment">
							<PatientAppointment />
						</Route>
            <Route path="/dashboard/patients">
            <Patients />
						</Route>
          </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
