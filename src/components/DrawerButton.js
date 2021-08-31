import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import '../css/drawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DrawerButton = ({ bodyRef, onClick, open, position }) => {
  const [scrollY, setScrollY] = useState(5);
  const [parentHeight, setParentHeight] = useState(0);
  const btn = useRef(null);

  const onScroll = useCallback(() => {
    let scrollPos = window.scrollY + window.innerHeight;
    let screenHeight = parseInt(bodyRef.current.getBoundingClientRect().height);

    let distance = screenHeight - scrollPos;
    let screenOffsetY = 100 - Math.floor((distance / screenHeight) * 100);

    if(parentHeight !== screenHeight) {
      setParentHeight(screenHeight);
      setScrollY(5);
    }
    else if(screenOffsetY < 50) setScrollY(screenOffsetY - 18);
    else if(screenOffsetY > 50 && screenOffsetY < 60) setScrollY(screenOffsetY - 13);
    else if(screenOffsetY > 60) setScrollY(screenOffsetY - 8);
  }, [bodyRef, parentHeight, setScrollY])

  useLayoutEffect(() => {
    if(position === '') window.addEventListener('scroll', onScroll);
    else {
      window.removeEventListener('scroll', onScroll);
      if(position === 'TOP') setScrollY(5);
      if(position === 'MIDDLE') setScrollY(50);
      else if(position === 'BOTTOM') setScrollY(95);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [position, onScroll]);

  return (
    <div className={`drawer-btn ${open ? 'open' : ''}`} ref={btn} style={{ top: scrollY+'%' }} onClick={onClick}>
      <FontAwesomeIcon className="edit" icon="edit" />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    position: state.settings.drawerBtn
  }
}
export default connect(mapStateToProps, {})(DrawerButton);