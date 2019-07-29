import React from 'react';
import { Card, Jumbotron } from 'react-bootstrap';

function Projects(props) {
  return (
    <div id='projects'>
      <Jumbotron>
        <h3>Projects</h3>
        <section className='cardDeck'>
          {props.items.map(item => {
            console.log(item.position !== null)
            return (
              <div className='resumeCardDiv'>
                <Card className='bg-info resumeCard'>
                  <Card.Header>{item.projectName}</Card.Header>
                  <Card.Body>
                  {item.position !== null && <Card.Subtitle>{item.position}</Card.Subtitle>}
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

export default Projects;
