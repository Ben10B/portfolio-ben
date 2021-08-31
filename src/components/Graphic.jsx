import React, { Component } from 'react';
import '../css/graphic.css';
import Header from './Header.jsx';
import SlideShow from './SlideShow.jsx';
import { graphicData } from '../data/data';

class Graphic extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="" style={{ height: 'calc(100vh + 30vh)', overflow: 'hidden'}}>
          <SlideShow data={graphicData}/>
        </div>
      </div>
    );
  }
}

export default Graphic;