import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

function Navbar(props) {
  return (
    <div className="App">
      <Nav className='navbar navbar-dark bg-dark justify-content-center fixed-top' as='ul'>
        {props.navButtons.map(item => { 
            console.log(item)
            return (
            <Nav.Item>
              <Nav.Link>
                  <Link
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    {item.title}
                  </Link>
              </Nav.Link>
            </Nav.Item>
            )
        })}
      </Nav>
    </div>
  );
}

export default Navbar;
