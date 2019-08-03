import React from 'react';
import { Card, Jumbotron } from 'react-bootstrap';

function Projects(props) {
  return (
    <div id='projects'>
      <Jumbotron>
        <h3>Projects</h3>
        <section className='cardDeck'>
          {props.items.map(item => {
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
                      {item.github !== null && item.github !== undefined && <li><a className='projectLink' href={item.github}>Github Repo</a></li>}
                      {item.link !== null && item.link !== undefined && <li><a className='projectLink' href={item.link}>Live Project</a></li>}
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
