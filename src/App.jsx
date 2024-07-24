import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import Footer from './components/footer.jsx';
import './App.css'
import './components/hero.css'
import './components/footer.css'







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
