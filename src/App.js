// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home'
import ContactDetailsForm from './components/ContactDetailsForm';
import TermsAndConditions from './components/TermsAndConditions';
import TrackOrdersPage from './components/TrackOrdersPage';
import About from './components/About';
import Mockup from './components/Mockup';

function App() {
  return (
    <Router>
      <Navbar/>
      {/* <About/> */}
      {/* <Mockup/> */}
      {/* <ContactDetailsForm/> */}
      <Footer/>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={ContactDetailsForm} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
