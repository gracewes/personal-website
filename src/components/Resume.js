import React from 'react';
import {Carousel, Card} from 'react-bootstrap';

function Resume(props) {
    return (
        <div>
            <Carousel interval={null}>
                {props.items.map(item => {
                    return (
                        <Carousel.Item>
                            <Card className='resumeCard'>
                                <Card.Title>{item.place}</Card.Title>
                                <Card.Subtitle>{item.jobTitle}</Card.Subtitle>
                                <h6>{item.date}</h6>
                                <Card.Body>
                                    <ul>
                                        {item.descriptions.map(text => {
                                            return (
                                                <li>{text}</li>
                                            )
                                        })}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Resume;
