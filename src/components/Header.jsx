import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
  state = { scrollingLock: false };
  componentDidMount = () => {
    const { pathname } = this.props.location;
    let nav = document.querySelector('#nav');
    if(pathname.includes('web')) nav.style.boxShadow = '0 0 10px #00f';
    else if(pathname.includes('graphic')) nav.style.boxShadow = '0 0 10px #f00';
    else if(pathname.includes('media')) nav.style.boxShadow = '0 0 10px #0f0';
  }
  hover = (link) => {
    let nav = document.querySelector('#nav');
    if(link === 'web') nav.style.boxShadow = '0 0 10px #00f';
    else if(link === 'graphic') nav.style.boxShadow = '0 0 10px #f00';
    else if(link === 'media') nav.style.boxShadow = '0 0 10px #0f0';
    else nav.style = "";
  }
  exit = (link) => {
    let nav = document.querySelector('#nav');
    if(link.includes('web')) nav.style.boxShadow = '0 0 10px #00f';
    else if(link.includes('graphic')) nav.style.boxShadow = '0 0 10px #f00';
    else if(link.includes('media')) nav.style.boxShadow = '0 0 10px #0f0';
    else nav.style = "";
  }
  
  render() {
    const { location: { pathname }, settings: { header } } = this.props;

    return (
      <ul data-aos="fade-down" data-aos-offset="0" id="nav"
        className={`navigation ${ this.state.scrollingLock ? 'sticky' : ''} ${header}`}
       >
        <li onMouseLeave={()=>this.exit(pathname)} onMouseEnter={()=>this.hover('/')}>
          <Link className={`${(pathname === '/') ? "active" : ''} navLink`} to="/">Home</Link>
        </li>
        <li onMouseLeave={()=>this.exit(pathname)} onMouseEnter={()=>this.hover('web')}>
          <Link className={`${(pathname.includes('web')) ? "active-blue" : ''} navLink blue`} to="/web">Web</Link>
        </li>
        <li onMouseLeave={()=>this.exit(pathname)} onMouseEnter={()=>this.hover('graphic')}>
          <Link className={`${(pathname.includes('graphic')) ? "active-red" : ''} navLink red`} to="/graphic">Graphic</Link>
        </li>
        <li onMouseLeave={()=>this.exit(pathname)} onMouseEnter={()=>this.hover('media')}>
          <Link className={`${(pathname.includes('media')) ? "active-green" : ''} navLink green`} to="/media">Media</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, {})(withRouter(Header));