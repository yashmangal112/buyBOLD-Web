import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About from '../components/About'
import Mockup from '../components/Mockup'
import LandingBanners from '../components/Landingbanners'

const Home = () => {
  return (
    <div>
        <LandingBanners/>
        <About/>
        <Mockup/>
    </div>
  )
}

export default Home