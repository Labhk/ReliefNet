import React from 'react';
import './style.css';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Story from '../components/Story';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function MainPage() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Story/>
      <Mission/>
      <Team/>
      <Contact/>
      <Footer/>
      <div class = " "> 
      
      </div>
    </>
  )
}

export default MainPage;