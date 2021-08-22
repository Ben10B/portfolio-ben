import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add([faDoorOpen]);

const SplashBtn = ({ click, click2 }) => {
  return <div data-aos="zoom-in" data-aos-duration="1000" className="splash-btn">
    <label onClick={click}>
      <FontAwesomeIcon icon="door-open" className="door-open"/>
    </label>
    <div id="action-btn">
      <div className="cool-btn cool-btn-1" onClick={click2}>
        <span>Always ENTER Upon Load</span>
      </div>
    </div>
  </div>
}

export default SplashBtn;