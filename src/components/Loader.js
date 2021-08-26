import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add([faFan]);

const Loader = ({ animation }) => {
  let aos = animation ? animation : "zoom-in-right";
  return <div data-aos={aos} data-aos-duration="300" className="loader" style={{ cursor: 'wait' }}>
    <label><FontAwesomeIcon icon="fan" className="fan"/>Loading...</label>
  </div>
}

export default Loader;