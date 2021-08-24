import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add([faFan]);

const Loader = () => {
  return <div data-aos="zoom-in-right" data-aos-duration="300" className="loader" style={{ cursor: 'wait' }}>
    <label><FontAwesomeIcon icon="fan" className="fan"/>Loading...</label>
  </div>
}

export default Loader;