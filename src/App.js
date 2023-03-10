import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="App">
      <button className="hamburger" onClick={() => setShowNavbar(!showNavbar)}>Toggle Navbar</button>
      <Navbar className={`navbar ${showNavbar ? 'show' : 'hide'}`} />
      {/* Your website content goes here */}
    </div>
  );
}

export default App;