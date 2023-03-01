import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

ReactDOM.render(<App />, document.getElementById('root'));

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
  navbar.style.height = navbar.style.height === '0px' ? '150px' : '0px';
});

export default App;