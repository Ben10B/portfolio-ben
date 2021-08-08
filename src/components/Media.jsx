import React, { Component } from 'react';
import '../css/media.css';
import Header from './Header.jsx';
import SlideShow from './SlideShow.jsx';
// import { Project } from './Project.jsx';
import { mediaData } from '../data/data';

class Media extends Component {
  render() {
    return (
      <div className="App">
        <Header page="media"/>
        <div className="hght-90-vh" style={{overflow: 'hidden'}}>
          <SlideShow data={mediaData}/>
        </div>
      </div>
    );
  }
}

export default Media;