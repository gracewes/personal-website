const navButtons = [
  { title: 'About', href: 'about' },
  { title: 'Experience', href: 'resume' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact', href: 'contact' }
]

const aboutData = {
  introText: 'Howdy! My name is',
  name: 'Grace Westerman',
  about: 'I\'m a senior computer science student at Texas A&M University in College Station, Texas, Whoop! I love learning new things while solving problems.',
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
  text: 'Email me',
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
      'Built Gitlab webhooks to store data in CouchDB for consumption by GraphQL service',
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
    projectName: 'Aggie Coding Connect',
    date: 'January - May 2019',
    descriptions: [
      'Application developed using React and Express for CSCE 431 Software Engineering Project',
      'Web application to connect students in Aggie Coding Club with software development opportunities'
    ],
    github: 'https://github.com/gracewes/431-Creative',
    link: 'https://tranquil-dusk-38037.herokuapp.com/'
  },
  {
    projectName: 'Pyram - TAMUHack Project',
    date: 'January 2019',
    descriptions: [
      'Built with Python, Flask, and Google Maps API',
      'Web application to help people connect with others who want to do activities in an area',
      'Developed in 24 hours as part of Texas A&M\'s hackathon'
    ],
    github: 'https://github.com/gracewes/pyram',
    link: 'http://pyram.io'
  },
  {
    projectName: 'Autonomous Underwater Vehicle',
    position: 'Programming Team Lead',
    date: 'September 2017 - May 2018',
    descriptions: [
      'Conducted weekly meetings to teach team members programming concepts using Python and Arduinos',
      'Helped to develop software to run the Texas A&M Women in Engineering\'s Autonomous Underwater Vehicle to compete in the AUVSI Robosub competition'
    ]
  }
]

module.exports = {
  navButtons,
  aboutData,
  contactData, 
  projectData,
  resumeData
}