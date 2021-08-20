import React, { Component } from 'react';
import Header from './Header.jsx';
import SlideShow from './SlideShow.jsx';
import { webData } from '../data/data';

class Web extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="hght-90-vh" style={{overflow: 'hidden'}}>
          <SlideShow data={webData}/>
        </div>
      </div>
    );
  }
}

export default Web;