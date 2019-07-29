import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Resume from './components/Resume.js';

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

function App() {
  return (
    <div className="App">
      <Navbar navButtons={navButtons}/>
      <About data={aboutData}/>
      <Resume items={resumeData} />
    </div>
  );
}

export default App;
