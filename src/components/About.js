import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import SocialIcons from './common/socialIcons';

function About(props) {
  return (
    <div className='about' id='about'>
      <div className='profilePic'>
        <img src='./images/profilepic.png' alt='profile' width='100%' height='100%'/>
      </div>
      <div className='aboutContainer'>
        <Jumbotron fluid>
          <Container>
            <p>{props.introText}</p>
            <h1>{props.name}</h1>
            <p>{props.about}</p>
            <hr />
            <SocialIcons social={props.social}></SocialIcons>
          </Container>
        </Jumbotron>
      </div>
    </div>
  )
}

export default About;
