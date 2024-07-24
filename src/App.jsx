import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import "./App.css"
import './components/Hero.css'
import './components/Footer.css'







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
