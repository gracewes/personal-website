import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function socialIcons(props) {
  return (
    <div className='iconHolder'>
      {props.social.map(item => {
        return (
          <div className='socialIcon' >
            <a href={item.href} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={['fab', item.type]} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default socialIcons;
