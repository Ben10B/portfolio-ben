import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProject } from '../actions/projectActions';
import Header from '../components/Header';
import Loader from '../components/Loader';
import VideoPlayer from '../components/VideoPlayer';
import '../css/project.css';
import ytube from '../assets/YouTube-icon-3-fff.png';
import web from '../assets/Spiderweb.png';

class Project extends Component {
  componentDidMount() {
    this.props.updateProject(this.props.match.params);
  }
  render() {
    const { project: { loading, project } } = this.props;

    return loading ? <div className="hght-90-vh" style={{ position: 'relative' }}><Loader/></div> : (
      <div className={'App column project-page'}>
        <Header/>
        <div className="body-content">
          <div className="item-a">{project && (
            project.image ? <img src={project.image} alt={project.title}/> : <VideoPlayer url={project.video}/>
          )}</div>
          <h6 className="item-b">{project && project.title}</h6>
          <div className="item-c">{project && project.description}</div>
          <div className="item-d"><h6>SKILLS:</h6> <div className="row">{project && project.tech.map(x => <p key={x}>{x}</p>)}</div></div>
          <div className="row item-e">
            {
              (project && project.links) && project.links.map((x, index) => (
                <div key={index} className="socialIcon">
                  <div style={{backgroundImage: `url(${x.yt ? ytube : web})`}}></div>
                  <a href={x.yt ? x.yt : (x.direct ? x.direct : null)} target="_blank" rel="noopener noreferrer"> </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    project: state.project
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProject: (ownProps) => dispatch(updateProject(ownProps))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);