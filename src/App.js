import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from './Pages/Appointment';
import Reviews from './Pages/Reviews';
import Login from './Pages/Authentication/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Authentication/PrivateRoute';

export const DataContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  const contextData={loggedInUser, setLoggedInUser};

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
          </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
