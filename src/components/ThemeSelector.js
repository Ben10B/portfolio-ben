import React, { useState, useRef, useLayoutEffect } from 'react';
import '../css/themeselector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeSelector = ({ bodyRef }) => {
  const [scrollY, setScrollY] = useState(5);
  const btn = useRef(null);
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
    
  const onScroll = () => {
    let scrollPos = window.scrollY + window.innerHeight;
    // console.log('WINDOW SCROLLY: '+window.scrollY, 'WINDOW INNER_HEIGHT: '+window.innerHeight);
    let screenHeight = parseInt(bodyRef.current.getBoundingClientRect().height);
    // console.log('SCREEN HEIGHT: '+screenHeight);

    // let distance = screenHeight - scrollPos;
    let distance = getDistance(0, scrollPos, 0, screenHeight);
    // console.log('DISTANCE: '+distance);
    let screenOffsetPercentY = Math.floor((distance / screenHeight) * 100);
    // console.log('SCREEN OFFSET PERCENT Y: '+screenOffsetPercentY);
    let screenOffsetY = 100 - screenOffsetPercentY;
    // console.log('SCREEN OFFSET Y: '+screenOffsetY);

    setScrollY(screenOffsetY - 18);
  }
  const getDistance = (xA, yA, xB, yB) => {
    let xDiff = xA - xB; 
    let yDiff = yA - yB;
  
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }

  return (
    <div className="theme-selector" ref={btn} style={{ top: scrollY+'%' }}>
      <FontAwesomeIcon className="fnt-white" icon="align-justify" />
    </div>
  )
}

export default ThemeSelector;