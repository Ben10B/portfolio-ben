import React from 'react';
import '../css/drawer.css';
import Accordion from './Accordion';

const Drawer = ({ open, links }) => {
  return (
    <div className={`drawer ${open ? 'open' : ''}`}>
      <Accordion links={links}/>
    </div>
  )
}

export default Drawer;