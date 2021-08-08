import React from 'react';
import { Player, 
  // ControlBar 
} from 'video-react';
import '../css/project.css';

export const Project = ({title, src, text, className}) => {
  let project;
  if(className === 'r'){
    project = (<img className={`img ${className}`} src={src} alt="" onContextMenu={(event)=>{event.preventDefault();}}/>);
  }
  else if(className === 'g'){
    project = (
      //<div className={`vid ${className}`}>
        <Player fluid={false} style={{width: 100}}>
          <source src={src}/>
        </Player>
      //</div>
    );
  }
  return (
    // <div className="img" style={{ backgroundImage: `url(${imgSrc})`}}/>
    project
    // <div className="project">
    //   <div className="img" style={{ backgroundImage: `url(${imgSrc})`}}/>
    //   <img className="img" src={imgSrc} alt=""/>
    //   <h6>{title}</h6>
    // </div>
  );
}