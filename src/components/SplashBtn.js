import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add([faDoorOpen]);

const Loader = ({ click }) => {
  return <div className="loader">
    <label onClick={click}><FontAwesomeIcon icon="door-open" className="door-open"/></label>
  </div>
}

export default Loader;