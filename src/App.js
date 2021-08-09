import React from 'react';
import AOS from 'aos';
import './css/BENstrap-in/css/my.css';
import './css/App.css';
import './css/index.css';
import Routes from './Routes';

function App() {
  AOS.init();
  return <Routes/>;
}

export default App;
