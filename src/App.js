import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from './Pages/Appointment';
import Reviews from './Pages/Reviews';
import Login from './Pages/Authentication/Login';

export const DataContext = createContext();

function App() {
  const[loggendInUser, setLoggedInUser] = useState({});
  const contextData={loggendInUser, setLoggedInUser};

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
            <Route path="/dashboard">
              <Login/>
            </Route>
          </Switch>
        </Router>
    </DataContext.Provider>
  );
}

export default App;
