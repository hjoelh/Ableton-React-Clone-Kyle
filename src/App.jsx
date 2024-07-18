import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import "./App.css"







function App() {
  return (
      <div className="App">
          <Navbar className="futara" />
          <Hero />
          <Footer />
          
      </div>
  );
}


export default App
