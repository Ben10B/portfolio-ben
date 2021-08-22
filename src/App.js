import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/BENstrap-in/css/my.css';
import './css/App.css';
import './css/index.css';
import './css/parallax.css';
import './css/backgrounds.css';
import './css/themes.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faAngleDoubleDown, faFileDownload, faCode, faUser, faBrush, 
  faPalette, faFilm, faImage, faImages, faTimes, faEdit, faAdjust, faMusic } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes';
import DrawerButton from './components/DrawerButton';
import Drawer from './components/Drawer';
import AudioPlayer from './components/AudioPlayer2';
import { DRAWER_LINKS } from './data/links';

AOS.init();
library.add([faBars, faAngleDoubleDown, faFileDownload, faCode, faUser, faBrush, 
  faPalette, faFilm, faImage, faImages, faTimes, faEdit, faAdjust, faMusic]);

function App({ settings }) {
  const bodyRef = useRef(null);
  const [showDrawer, setDrawer] = useState(false);
  const open = () => setDrawer(prevShowDrawer => !prevShowDrawer);
  return (
    <div className={`body ${settings.theme}`} ref={bodyRef}>
      <DrawerButton bodyRef={bodyRef} open={showDrawer} onClick={open}/>
      <Drawer open={showDrawer} links={DRAWER_LINKS}/>
      <AudioPlayer/>
      <Routes/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(App);