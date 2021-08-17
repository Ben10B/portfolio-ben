import React, { useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/BENstrap-in/css/my.css';
import './css/App.css';
import './css/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faAngleDoubleDown, faFileDownload, faCode } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes';
import DrawerButton from './components/DrawerButton';
import Drawer from './components/Drawer';

AOS.init();
library.add([faBars, faAngleDoubleDown, faFileDownload, faCode]);

function App() {
  const [showDrawer, setDrawer] = useState(false);
  let bodyRef = useRef(null);
  const open = () => {
    setDrawer(prevShowDrawer => !prevShowDrawer)
  }
  return (
    <div style={{ position: 'relative' }} ref={bodyRef}>
      <DrawerButton bodyRef={bodyRef} open={showDrawer} onClick={open}/>
      <Drawer open={showDrawer}/>
      <Routes/>
    </div>
  );
}

export default App;
