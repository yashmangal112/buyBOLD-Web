// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home'
import ContactDetailsForm from './components/ContactDetailsForm';
import TermsAndConditions from './pages/TermsAndConditions';
import TrackOrdersPage from './components/TrackOrdersPage';
import About from './components/About';
import Mockup from './components/Mockup';
import Landingbanners from './components/Landingbanners';

function App() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Router>
      <div>
        <Navbar/>
        {/* <TermsAndConditions/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={() => <About scrollToAbout={scrollToAbout} />} />
          <Route path="/contact" component={ContactDetailsForm} />
          <Route path='/terms' component={TermsAndConditions} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
