import React, { Component } from 'react';
import AOS from 'aos';
import MoveTo from 'moveto';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown, faFileDownload, faCode } from '@fortawesome/free-solid-svg-icons';
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
    library.add([faAngleDoubleDown, faFileDownload, faCode]);
    AOS.init();
    return (
      <div className="App">
        <div className="parallaxx">
          <div className="txt-center fnt-white">
            <h1 className="res-fnt-size-6">BEN-JAM-IN BECKWITH</h1>
          </div>
        </div>
        <Header page=""/>

        <div data-aos="zoom-in" data-aos-duration="1500"
          className="column fight-parallaxx hght-90-vh vert-center">
          <div className="row fnt-white">
            <div className="column flex-3">
              <h4>Full Stack Web Developer</h4>
              <p>MERN Stack | JavaScript | Shopify Liquid | UI/UX | C#</p>
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
        <div data-aos="fade-right" data-aos-duration="1500" className="fnt-white row hght-90-vh vert-center">
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
            </ul>
            <ul className="skills green">
              <li><h3>Media</h3></li>
              <li><p>Adobe Premiere Pro CC</p></li>
              <li><p>Adobe After Effects CC</p></li>
            </ul>
        </div>
        <div className="hght-90-vh" style={{boxShadow: '0 -20px 50px #ffffff21 inset', overflow: 'hidden'}}>
          <SlideShow data={mainData}/>
        </div>
        <section id="me" data-aos="flip-right" data-aos-duration="1500" className="hght-90-vh row fight-parallaxx">
          <div className="column fnt-white">
            <h3>BIO</h3>
            <p>
            I don't know about you, but I love to design; more specifically, web, graphic and media design. My strengths weigh heavier in web design and development since I can create an application with my art.
            In 2009, I was inspired to make sprite animations using Macromedia Flash and Microsoft Paint. Now I'm developing websites and games, and exploring more art and animation that entranced me back then. I just wanna create cool looking stuff!
            </p>
          </div>
          <div style={{backgroundImage: `url(${me})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}/>
        </section>
      </div>
    );
  }
}

export default Home;
