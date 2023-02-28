import React from 'react';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Welcome to OneManTruck</h1>
      </header>
    </div>
  );
}

export default App;
