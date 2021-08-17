import React from 'react';
import '../css/drawer.css';

const Drawer = ({ open }) => {
  return (
    <div className={`drawer ${open ? 'open' : ''}`}>

    </div>
  )
}

export default Drawer;