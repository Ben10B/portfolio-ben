import React, { Component } from 'react';
import '../css/graphic.css';
import Header from './Header.jsx';
import { Project } from './Project.jsx';
import { graphicData } from '../data/data';

class Graphic extends Component {
  render() {
    let projectList = [];
    for(let i = 0; i < graphicData.length; i++){
      projectList.push(
        <Project key={`${i}p`} 
          src={graphicData[i].img} 
          title={graphicData[i].proj} 
          text={graphicData[i].text}
          className={`r`}
        />)
    }
    return (
      <div className="App">
        <Header/>

        <div className="graphicContainer">
          {projectList}
        </div>
      </div>
    );
  }
}

export default Graphic;