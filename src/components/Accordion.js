import React from 'react';
import '../css/accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ links }) => {

  return (
    <div className={`accordion`}>
      <div className="menu">
        <ul>
          {links.map(x => (
            <li key={x.id} className="item" id={x.id}>
              <a href={x.href} className="btn">
                <FontAwesomeIcon icon={x.icon}/> {x.name}
              </a>
              <div className="smenu">
                {x.lvl2links.map(y => (
                  <div key={y.name}>{y.name}</div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Accordion;