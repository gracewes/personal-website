import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';

const navButtons = [
  {title: 'Home', href: '#'},
  {title: 'About', href: '#'},
  {title: 'Resume', href: '#'},
  {title: 'Projects', href: '#'},
  {title: 'Contact', href: '#'}
]

const aboutData = {
  name: 'Grace Westerman',
  about: 'I\'m a senior computer science major from San Antonio, Texas, but most importantly I\'m the loudest proudest member of the Fightin\' Texas Aggie class of 2020! Whoop!'
}

function App() {
  return (
    <div className="App">
      <Navbar navButtons={navButtons}/>
      <About data={aboutData}/>
    </div>
  );
}

export default App;
