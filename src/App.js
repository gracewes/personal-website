import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

const navButtons = [
  { title: 'About', href: 'about' },
  { title: 'Resume', href: 'resume' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact', href: 'contact' }
]

const aboutData = {
  introText: 'Howdy! Glad you\'re here! I\'m',
  name: 'Grace Westerman',
  about: 'I\'m a senior computer science major from San Antonio, Texas, but most importantly I\'m the loudest proudest member of the Fightin\' Texas Aggie class of 2020! Whoop!',
  social: [
    {
      href: 'https://www.linkedin.com/in/grace-westerman',
      type: 'linkedin'
    },
    {
      href: 'https://github.com/gracewes',
      type: 'github'
    }
  ]
}

const contactData = {
  text: 'Contact me',
  email: 'gracewes@tamu.edu',
  social: [
    {
      href: 'https://www.linkedin.com/in/grace-westerman',
      type: 'linkedin'
    },
    {
      href: 'https://github.com/gracewes',
      type: 'github'
    }
  ]
}

const resumeData = [
  {
    place: 'USAA',
    jobTitle: 'Software Developer and Integrator',
    date: 'May - July 2019',
    descriptions: [
      'Created new functionalities in existing GraphQL services used to serve a CI/CD monitoring dashboard',
      'Developed front end page in React to consume new GraphQL functionalities',
      'Built Gitlab webhooks to gather and store data in CouchDB for consumption by GraphQL service',
      'Improved existing automated testing suite for React application using Mocha and Enzyme'
    ]
  },
  {
    place: 'USAA',
    jobTitle: 'Software Developer and Integrator',
    date: 'May - August 2018',
    descriptions: [
      'Quickly mastered new skills while working in an agile team environment within a large enterprise',
      'Created UI components for internal business applications using React and Redux',
      'Wrote automated tests for React components',
      'Developed endpoints for existing RESTful APIs in Java'
    ]
  },
  {
    place: 'Texas A&M Physics Department',
    jobTitle: 'Peer Teacher',
    date: 'January - May 2017',
    descriptions: [
      'Conducted weekly recitations for three groups of eight students',
      'Facilitated group problem solving while ensuring no student was left behind in the material',
      'Developed small group leadership and communication skills'
    ]
  }
]

const projectData = [
  {
    projectName: 'USAA',
    date: 'May - July 2019',
    descriptions: [
      'Created new functionalities in existing GraphQL services used to serve a CI/CD monitoring dashboard',
      'Developed front end page in React to consume new GraphQL functionalities',
      'Built Gitlab webhooks to gather and store data in CouchDB for consumption by GraphQL service',
      'Improved existing automated testing suite for React application using Mocha and Enzyme'
    ]
  },
  {
    projectName: 'USAA',
    position: 'Software Developer and Integrator',
    date: 'May - August 2018',
    descriptions: [
      'Quickly mastered new skills while working in an agile team environment within a large enterprise',
      'Created UI components for internal business applications using React and Redux',
      'Wrote automated tests for React components',
      'Developed endpoints for existing RESTful APIs in Java'
    ]
  },
  {
    projectName: 'Texas A&M Physics Department',
    position: 'Peer Teacher',
    date: 'January - May 2017',
    descriptions: [
      'Conducted weekly recitations for three groups of eight students',
      'Facilitated group problem solving while ensuring no student was left behind in the material',
      'Developed small group leadership and communication skills'
    ]
  }
]

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
