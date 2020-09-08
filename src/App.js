import React, {Fragment} from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './screens/Dashboard';
// import React from "react";
import AboutPage from './AboutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="wrapper-main">
      <Router>
        <TopBar/>
        <Header/>
        <Switch>
          <Route path="/"></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact"></Route>
        </Switch>
        <Dashboard/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
