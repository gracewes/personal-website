import React from 'react';
import SocialIcons from './common/socialIcons.js';

function Contact(props) {
  return (
    <footer id='contact'>
      <p>{props.text} <a href={`mailto:${props.email}`}>here</a></p>
      <hr />
      <SocialIcons social={props.social}></SocialIcons>
    </footer>
  )
}

export default Contact;