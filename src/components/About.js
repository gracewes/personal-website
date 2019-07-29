import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function About(props) {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{props.data.name}</h1>
                <p>{props.data.about}</p>
            </Container>
        </Jumbotron>
    )
}

export default About;
