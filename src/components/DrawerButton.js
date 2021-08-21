import React, { useState, useRef, useLayoutEffect } from 'react';
import '../css/drawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DrawerButton = ({ bodyRef, onClick, open }) => {
  const [scrollY, setScrollY] = useState(5);
  const [parentHeight, setParentHeight] = useState(0);
  const btn = useRef(null);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  const onScroll = () => {
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
  }

  return (
    <div className={`drawer-btn ${open ? 'open' : ''}`} ref={btn} style={{ top: scrollY+'%' }} onClick={onClick}>
      <FontAwesomeIcon className="edit" icon="edit" />
    </div>
  )
}

export default DrawerButton;