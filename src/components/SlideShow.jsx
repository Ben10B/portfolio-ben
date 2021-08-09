import React, { Component } from 'react';
import '../css/slideshow.scss';
import '../css/slideshow.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faFileDownload, faCode } from '@fortawesome/free-solid-svg-icons';
import VideoPlayer from './VideoPlayer';

class SlideShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: this.props.data,
      project: this.props.data[0],
    }
  }
  select = (newIndex) => {
    this.setState({
      project: this.state.projects[newIndex]
    });
  }
  next = () => {
    let newIndex = this.state.project.index+1;
    if(newIndex === this.state.projects.length) newIndex = 0;
    this.setState({
      project: this.state.projects[newIndex]
    });
  }
  prev = () => {
    let newIndex = this.state.project.index-1;
    if(newIndex < 0) newIndex = this.state.projects.length-1;
    this.setState({
      project: this.state.projects[newIndex]
    });
  }
  render() {
    library.add([faAngleDoubleDown, faFileDownload, faCode]);
    AOS.init();
    const { projects, project } = this.state;
    return (
      <div id="slideShowContainer" data-aos="flip-down" data-aos-duration="3000" className="column">
        <div className="row">
          <div className="prev" onClick={() => this.prev()}><p>Prev</p></div>
          <section>
            {
              projects.map(p => (<Indicators key={p.index} project={p} select={this.select}  currentIndex={this.state.project.index}/>))
            }
          </section>
          <div className="next" onClick={() => this.next()}><p>Next</p></div>
        </div>
        <div className={`cards-slider active-slide-${project.index}`}>
          <div className="cards-slider-wrapper"
            style={{transform: `translateX(-${project.index * (100/projects.length)}%)`}}
          >
            {
              projects.map(project => (
                <Card key={project.index} project={project} select={this.select} currentIndex={this.state.project.index}/>
                ))
              }
          </div>
        </div>
      </div>
    );
  }
}
const Indicators = ({project, select, currentIndex}) => {
  const { index } = project;
  const active = (currentIndex === index) ? 'active' : '';
  return (
    <div className={`indicator ${active}`} onClick={()=>select(index)}/>
  )
}
const Card = ({project, select, currentIndex}) => {
  const {index, image, video, title, description, tech} = project;
  return (
    <div id={`card-${index}`} className="card" onClick={()=>select(index)}>
      
      {image !== undefined ? (
        <img src={image} alt={title}/>
      ) : (
        <VideoPlayer url={video}/>
      )}
      <h6 className="title">{title}</h6>
      <div className="details" style={{ display: currentIndex !== index ? 'none' : ''}}>
        <p className="desc">{description}</p>
        <p id='code'><FontAwesomeIcon icon="code"/></p>
        <ul className="features">
          {
            tech.map(element => (
              <li key={element+""+index}>{element}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
export default SlideShow;