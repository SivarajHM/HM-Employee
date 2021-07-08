import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../Components/Header';
import Loginpage from '../Page/Loginpage';
import Signpage from '../Page/Signpage';
import Dashboard from '../Page/Dashboard';

  function Routes(){
      return(
        <Router>
          <Header />
          <Switch>
            <div className="react-page-wrapper">
            <Route path="/" exact component={Loginpage}>
                <Loginpage />
              </Route>
              <Route path="/login" exact component={Loginpage}>
                <Loginpage />
              </Route>
              <Route path="/sign" exact component={Signpage}>
                <Signpage />
              </Route>
              <Route path="/dashboard" exact component={Dashboard}>
                <Dashboard />
              </Route>
            </div>
          </Switch> 
      </Router>
      );
  }

  export default Routes;

  