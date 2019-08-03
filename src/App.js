import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {navButtons, aboutData, resumeData, projectData, contactData} from './data.js';

library.add(fab)

function App() {
  return (
    <div className="App">
      <Navbar navButtons={navButtons} />
      <About {...aboutData} />
      <Resume items={resumeData} />
      <Projects items={projectData} />
      <Contact {...contactData} />
    </div>
  );
}

export default App;
