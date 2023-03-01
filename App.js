import React from 'react';
import Navbar from './components/Navbar';
import 'App.css'

function App() {    
  return (
    <div className="App">
      {/* Your website content goes here */}
    </div>
  );
}
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
  navbar.style.height = navbar.style.height === '0px' ? '150px' : '0px';
});

export default App;
