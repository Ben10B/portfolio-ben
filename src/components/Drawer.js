import React from 'react';
import '../css/drawer.css';
import Accordion from './Accordion';

const Drawer = ({ open, links, changeBG }) => {
  return (
    <div className={`drawer ${open ? 'open' : ''}`}>
      <Accordion links={links} changeBG={changeBG}/>
    </div>
  )
}

export default Drawer;