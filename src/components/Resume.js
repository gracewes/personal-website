import React from 'react';
import { Card, Jumbotron } from 'react-bootstrap';

function Resume(props) {
  return (
    <div id='resume'>
      <Jumbotron>
        <h2>Work Experience</h2>
        <hr/>
        <section className='cardDeck'>
          {props.items.map(item => {
            return (
              <div className='resumeCardDiv'>
                <Card className='bg-success resumeCard'>
                  <Card.Header>{item.place}</Card.Header>
                  <Card.Body>
                    <Card.Subtitle>{item.jobTitle}</Card.Subtitle>
                    <h6>{item.date}</h6>
                    <ul>
                      {item.descriptions.map(text => {
                        return (
                          <li>{text}</li>
                        )
                      })}
                    </ul>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </section>
      </Jumbotron>
    </div>
  )
}

export default Resume;
