import React, { Component } from 'react';
import MoveTo from 'moveto';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header.jsx';
import SlideShow from '../components/SlideShow.jsx';

import linkedIn from '../assets/LinkedIn-icon-3-fff.png';
import ytube from '../assets/YouTube-icon-3-fff.png';
import insta from '../assets/InstaGram-icon-3-fff.png';
import resume from "../assets/Resume (2021).pdf";
import me from '../assets/me3.jpg';
import { mainData } from '../data/data';

class Home extends Component {
  moveTo = (id, duration) => {
    const moveTo = new MoveTo();
    const target = document.getElementById(id);
    moveTo.move(target, {
      tolerance: 0,
      duration: duration,
      easing: 'easeOutQuart'
    });
  }
  render() {
    const { parallaxes: { landing, slideshow }, fight: { animation, choreo } } = this.props.settings;
    return (
      <div className="App">
        <div className={`landing-parallaxx ${landing} ${choreo} ${animation}`}>
          <div className="txt-center fnt-white">
            <h1 className="res-fnt-size-6">BEN-JAM-IN BECKWITH</h1>
          </div>
        </div>
        <Header/>

        <div data-aos="zoom-in" data-aos-duration="1500" className={`fight-parallaxx ${choreo} ${animation} column hght-90-vh vert-center`}>
          <div className="row fnt-white">
            <div className="column flex-3">
              <h4>Full Stack Web Developer</h4>
              <p>MERN Stack | JavaScript | Shopify Liquid | UI/UX | C#</p>
              <p><FontAwesomeIcon icon="envelope"/> benjamin.beckwith@yahoo.com</p>
              <p><FontAwesomeIcon icon="phone-alt"/> 850-348-1142</p>
              <span className="socialContainer">
                <div className="socialIcon">
                  <div style={{backgroundImage: `url(${linkedIn})`}}></div>
                  <a href="https://www.linkedin.com/in/benjamintbeckwith/" target="_blank" rel="noopener noreferrer"> </a>
                </div>
                <div className="socialIcon">
                  <div style={{backgroundImage: `url(${ytube})`}}></div>
                  <a href="https://www.youtube.com/youngroyboy" target="_blank" rel="noopener noreferrer"> </a>
                </div>
                <div className="socialIcon">
                  <div style={{backgroundImage: `url(${insta})`}}></div>
                  <a href="https://www.instagram.com/ben_jam_in_10/" target="_blank" rel="noopener noreferrer"> </a>
                </div>
              </span>
              <p><a href={resume} id="resume" download><FontAwesomeIcon icon="file-download" /> Download Resume </a></p>
              <FontAwesomeIcon onClick={()=>this.moveTo('me', 1000)} className="moveToBtn fnt-white" icon="angle-double-down" />
            </div>
          </div>
        </div>
        
        <div className={`parallaxx ${slideshow} ${choreo} ${animation} hght-90-vh`} style={{ overflow: 'hidden'}}>
          <SlideShow data={mainData}/>
        </div>
        
        <div data-aos="fade-right" data-aos-duration="1500" className={`fight-parallaxx ${choreo} ${animation} fnt-white row hght-90-vh skill-section`}>
          <ul className="skills blue">
            <li><h3>Web</h3></li>
            <li><p>HTML5</p></li>
            <li><p>JavaScript</p></li>
            <li><p>Shopify Liquid</p></li>
            <li><p>React/React Native</p></li>
            <li><p>Express.js</p></li>
            <li><p>Node.js</p></li>
          </ul>
          <ul className="skills red">
            <li><h3>Graphic</h3></li>
            <li><p>Adobe Illustrator CC</p></li>
            <li><p>Adobe Photoshop CC</p></li>
            <li><p>Adobe InDesign CC</p></li>
            <li><p>Macromedia Fireworks</p></li>
          </ul>
          <ul className="skills green">
            <li><h3>Media</h3></li>
            <li><p>Adobe Premiere Pro CC</p></li>
            <li><p>Adobe After Effects CC</p></li>
            <li><p>Macromedia Flash 8</p></li>
          </ul>
        </div>

        <div id="me" data-aos="flip-right" data-aos-duration="1500" className={`hght-90-vh row fight-parallaxx ${choreo} ${animation}`}>
          <div className="column fnt-white">
            <h3>BIO</h3>
            <p className="paragraph">
            I don't know about you, but I love to implement design into code; more specifically, web, graphic and media design. My strengths weigh heavier in web design and development since I can create an application with my art.
            In 2009, I was inspired to make sprite animations using Macromedia Flash and Microsoft Paint. Now I'm developing websites and games, and exploring more art and animation that entranced me back then. I just wanna create cool looking stuff!
            </p>
            <p className="paragraph">I recommend eating your pizza with Creamy Garlic Parmesan sauce!</p>
          </div>
          <div style={{backgroundImage: `url(${me})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(Home);
