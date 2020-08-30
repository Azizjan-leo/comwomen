import React, {Fragment} from 'react';
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './screens/Dashboard'
import './app.css'
import { Navbar } from 'react-bootstrap'; 

function App() {
  return (
    <div className="wrapper-main">
      <TopBar/>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
