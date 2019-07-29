import React from 'react';
import {Nav} from 'react-bootstrap';

function Navbar(props) {
  return (
    <div className="App">
      <Nav className='navbar navbar-dark bg-dark justify-content-center' as='ul'>
        {props.navButtons.map(item => { 
            console.log(item)
            return (
            <Nav.Item>
                <Nav.Link href={item.href}>{item.title}</Nav.Link>
            </Nav.Item>
            )
        })}
      </Nav>
    </div>
  );
}

export default Navbar;
