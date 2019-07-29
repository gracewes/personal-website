import React from 'react';
import { Card, CardDeck, Jumbotron, Container, Row } from 'react-bootstrap';

function Resume(props) {
    return (
        <div>
            <Jumbotron>
                <h3>Work Experience</h3>
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
                    )})}
            </section>
            </Jumbotron>
        </div>
            )
        }
        
        export default Resume;
