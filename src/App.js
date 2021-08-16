import React, { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/BENstrap-in/css/my.css';
import './css/App.css';
import './css/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAlignJustify, faAngleDoubleDown, faFileDownload, faCode } from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes';
import ThemeSelector from './components/ThemeSelector';

AOS.init();
library.add([faAlignJustify, faAngleDoubleDown, faFileDownload, faCode]);

function App() {
  let bodyRef = useRef(null);
  return (
    <div style={{ position: 'relative' }} ref={bodyRef}>
      <ThemeSelector bodyRef={bodyRef}/>
      <Routes/>
    </div>
  );
}

export default App;
