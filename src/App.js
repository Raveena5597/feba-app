import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import SecondNav from './layout/SecondNav';
import Tabbar from './layout/Tabbar';
import Results from './layout/Results';
import Vendor from './layout/Vendor';
import Contactus from './layout/Contactus';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from './layout/Card';
import Landing from './layout/Landing';
import Login from './layout/Vendor';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <section>
          <switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/vendor' component={Vendor} />
            <Route exact path='/contact' component={Contactus} />
            <Route exact path='/login' component={Login} />
          </switch>
        </section>
        <Tabbar />
      </Fragment>
    </Router>

  );
}

export default App;
